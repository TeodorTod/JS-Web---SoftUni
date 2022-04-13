const { html } = require("./util");

const defaultPage = `
    <h1>404 not foud</h1>
    <p>Can't find the resource</p>`;

const routes = {};

function main(req, res) {
    console.log('>>>', req.method, req.url);

    const url = new URL(req.url, `http://${req.headers.host}`);

    let handler;
    const actions = routes[url.pathname];
    if (actions) {
        handler = actions[req.method];
    }
    if (typeof handler == 'function') {
        handler(req, res);
    } else {
        defautController(req, res);
    }
}

function register(method, pathname, handler) {
    if (routes[pathname] == undefined) {
        routes[pathname] = {};
    } 
    const actions = routes[pathname];
    routes[pathname][method] = handler;
}

function get(pathname, handler) {
    register('GET', pathname, handler);
}
function post(pathname, handler) {
    register('POST', pathname, handler);
}

function defautController(req, res) {
    res.statusCode = 404;
    res.write(html(defaultPage));
    res.end();
}

module.exports = {
    main, 
    register,
    get,
    post
};