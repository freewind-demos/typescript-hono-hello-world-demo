import Koa from 'koa';

const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello';
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});

