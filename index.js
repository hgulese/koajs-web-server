const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    ctx.status = 200;
    ctx.accepts('text/html');
    switch (ctx.url) {
        case '/':
            ctx.body = '<h1>Welcome to Index page</h1>'
            break;
        case '/about':
            ctx.body = '<h1>Welcome to About page</h1>'
            break;
        case '/contact':
            ctx.body = '<h1>Welcome to Contact page</h1>'
            break;
        default:
            ctx.status = 404;
            ctx.body = '<h1>Page not found</h1>'
            break;
    }
});

app.listen(3000);