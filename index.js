const functions = require('@google-cloud/functions-framework');

exports.helloHttp = functions.http('helloHttp', (req, res) => {
    res.send(`Hello ${req.query.name || req.body.name || 'World'}!`);
});
