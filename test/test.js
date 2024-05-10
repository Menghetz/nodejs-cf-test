const { helloHttp } = require('../index');
const {getFunction} = require("@google-cloud/functions-framework/testing");

describe('helloHttp Cloud Function', () => {
    let req, res;
    let helloHttp = getFunction('helloHttp');

    beforeEach(() => {
        req = {
            query: {},
            body: {}
        };
        res = {
            send: jest.fn()
        };
    });

    test('should respond with Hello World when no name is provided', () => {
        helloHttp(req, res);
        expect(res.send).toHaveBeenCalledWith('Hello World!');
    });

    test('should respond with Hello {name} when a name is provided in query parameters', () => {
        req.query.name = 'Matteo';
        helloHttp(req, res);
        expect(res.send).toHaveBeenCalledWith('Hello Matteo!');
    });

    test('should respond with Hello {name} when a name is provided in request body', () => {
        req.body.name = 'Bob';
        helloHttp(req, res);
        expect(res.send).toHaveBeenCalledWith('Hello Bob!');
    });

    test('should prioritize name from query parameters over request body', () => {
        req.query.name = 'Charlie';
        req.body.name = 'Diana';
        helloHttp(req, res);
        expect(res.send).toHaveBeenCalledWith('Hello Charlie!');
    });
});
