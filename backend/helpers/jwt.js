const {expressjwt} = require('express-jwt');

const isRevoked = async (req, token) => {
    return !token.payload.isAdmin;
}

const onExpired = async (req, err) => {
    if (new Date() - err.inner.expiredAt < 5000) { return;}
    throw err;
};

const authJwt =  () => {
    const secret = process.env.SECRET;
    const api = process.env.API_URL;

    return expressjwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked,
        onExpired: onExpired,
    }).unless({
        path: [
            {url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS']},
            {url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS']},
            {url: /\/api\/v1\/orders(.*)/, methods: ['GET', 'OPTIONS', 'POST']},
            {url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS']},
            `${api}/users/login`,
            `${api}/users/register`
        ]
    })
};

module.exports = authJwt;
