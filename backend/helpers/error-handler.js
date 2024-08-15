const errorHandler = (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        res.status(401).json({ message: "The user is not authorized" });
    }

    if (err.name === 'ValidationError') {
        // validation error
        res.status(401).json({ message: err });
    }

    res.status(500).json(err);
    next();
}

module.exports = errorHandler;
