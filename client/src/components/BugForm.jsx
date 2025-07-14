import { useState, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    title: '',
    description: '',
    status: 'open',
    };

    const BugForm = ({ selectedBug, refreshBugs, clearSelection }) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (selectedBug) setFormData(selectedBug);
    }, [selectedBug]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedBug?._id) {
                await axios.put(`/api/bugs/${selectedBug._id}`, formData);
            } else {
                await axios.post('/api/bugs', formData);
            }
            setFormData(initialState);
            refreshBugs();
            clearSelection();
        } catch (err) {
            console.error('Error submitting form:', err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold">
                {selectedBug ? 'Edit Bug' : 'Report New Bug'}
            </h2>
            <input
                type="text"
                name="title"
                placeholder="Bug title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border p-2"
            />
            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full border p-2"
            />
            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border p-2"
            >
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
            </select>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                {selectedBug ? 'Update Bug' : 'Report Bug'}
            </button>
        </form>
    );
};

export default BugForm;
