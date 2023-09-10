import { Hono } from 'hono'

const app = new Hono()
app.get('api/lotteries', async (c) => {
    const file = Bun.file(`${import.meta.dir}/data/example.json`);
    const countries = await file.json();

    return c.json({
        message: 'Lottery Mega Millions Winning Numbers: Beginning 2002',
        data: countries
    });
})

export default {
    port: 3005,
    fetch: app.fetch,
}