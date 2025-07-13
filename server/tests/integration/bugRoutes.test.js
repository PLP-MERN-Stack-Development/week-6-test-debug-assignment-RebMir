require('dotenv').config({ path: '.env.test' });

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/app');
const Bug = require('../../src/models/Bug');


jest.setTimeout(30000);


beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI_TEST);
});

afterEach(async () => {
    await Bug.deleteMany({});
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
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
        await Bug.create({
            title: 'Test Bug',
            description: 'This is a test bug',
            status: 'open',
        });

        await Bug.create({
            title: 'Test Bug 2',
            description: 'This is another test bug',
            status: 'in-progress',
        });

        const res = await request(app).get('/api/bugs');
        
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(2);
    });
});

describe('PUT /api/bugs/:id', () => {
    it('should update a bug', async () => {
        const bug = await Bug.create({
            title: 'Test Bug',
            description: 'This is a test bug',
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
            title: 'Test Bug',
            description: 'This is a test bug',
            status: 'open',
        });
    
        const res = await request(app)
            .delete(`/api/bugs/${bug._id}`);
    
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toMatch(/deleted/i);
    });
});