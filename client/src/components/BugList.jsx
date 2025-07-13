import axios from 'axios';

const BugList = ({ bugs, refreshBugs, setSelectedBug }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/bugs/${id}`);
            refreshBugs();
        } catch (err) {
            console.error('Error deleting bug:', err.message);
        }
    };

    return (
        <div className='p-4 bg-gray-100 rounded shadow-md'>
            <h2 className='text-lg font-bold mb-4'>Reported Bugs</h2>
            {bugs.length === 0 ? (
                <p>No bugs reported yet.</p>
            ) : (
                <ul className='space-y-2'>
                    {bugs.map((bug) => (
                        <li key={bug._id} className='p-3 bg-white shadow flex justify-between items-center'>
                            <div>
                                <p className='font-semibold'>{bug.title}</p>
                                <p className='text-sm text-gray-600'>{bug.description}</p>
                                <p className='text-xs text-blue-600'>Status: {bug.status}</p>
                            </div>
                            <div className='space-x-2'>
                                <button
                                    onClick={() => setSelectedBug(bug)}
                                    className='text-sm text-yellow-600 hover:underline'
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(bug._id)}
                                    className='text-sm text-yellow-600 hover:underline'
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BugList;