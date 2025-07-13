exports.isValidStatus = (status) => {
    return ['open', 'in-progress', 'resolved'].includes(status);
};