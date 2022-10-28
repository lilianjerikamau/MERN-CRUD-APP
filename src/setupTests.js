// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/auth/google', 
        { target: 'http://localhost:8081/' }
    ));
}