// Load environment variables from .env.test
require('dotenv').config({
    path: require('path').resolve(__dirname, '../../.env.test'),
});

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/app');
const Bug = require('../../src/models/Bug');

jest.setTimeout(30000);

// Debug: Confirm URI loaded
console.log('🔍 MONGODB_URI_TEST:', process.env.MONGODB_URI_TEST);

// Safety check
if (!process.env.MONGODB_URI_TEST) {
    throw new Error('❌ MONGODB_URI_TEST is not defined. Make sure your .env.test file exists and contains the correct URI.');
}

// Connect to test DB
beforeAll(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI_TEST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Connected to test MongoDB');
    } catch (err) {
        console.error('❌ Failed to connect to test DB:', err);
        process.exit(1);
    }
});

// Clean up after each test
afterEach(async () => {
    await Bug.deleteMany({});
});

// Drop DB and disconnect
afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    console.log('🧹 Disconnected and cleaned up test DB');
});

describe('POST /api/bugs', () => {
    it('should create a new bug', async () => {
        const newBug = {
            title: 'Test Bug',
            description: 'This is a test bug',
        };

        const res = await request(app)
            .post('/api/bugs')
            .send(newBug);

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.title).toBe(newBug.title);
        expect(res.body.description).toBe(newBug.description);
    });
});

describe('GET /api/bugs', () => {
    it('should return all bugs', async () => {
        await Bug.insertMany([
            {
                title: 'Bug One',
                description: 'Bug one description',
                status: 'open',
            },
            {
                title: 'Bug Two',
                description: 'Bug two description',
                status: 'in-progress',
            },
        ]);

        const res = await request(app).get('/api/bugs');

        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(2);
    });
});

describe('PUT /api/bugs/:id', () => {
    it('should update a bug', async () => {
        const bug = await Bug.create({
            title: 'Update Bug',
            description: 'To be updated',
            status: 'open',
        });

        const res = await request(app)
            .put(`/api/bugs/${bug._id}`)
            .send({ status: 'resolved' });

        expect(res.status).toBe(200);
        expect(res.body.status).toBe('resolved');
    });
});

describe('DELETE /api/bugs/:id', () => {
    it('should delete a bug', async () => {
        const bug = await Bug.create({
            title: 'Delete Bug',
            description: 'To be deleted',
            status: 'open',
        });

        const res = await request(app).delete(`/api/bugs/${bug._id}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toMatch(/deleted/i);
    });
});
