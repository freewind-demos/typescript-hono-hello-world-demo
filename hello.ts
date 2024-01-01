import {serve} from '@hono/node-server'
import {Hono} from 'hono';

const app = new Hono();

app.get('/', (c) => {
    return c.text('hello')
});

serve(app, (info) => {
    console.log(`http://localhost:${info.port}`)
})


