import index from 'app/index.html'
import Elysia from 'elysia'
import { apiController } from './controllers/api'

const app = new Elysia()
  .get('/', index)
  .use(apiController)
  .get('/*', async ({ server, set }) => {
    // biome-ignore lint/style/noNonNullAssertion: cannot be null here
    const res = await fetch(server!.url!)
    set.headers['Content-Type'] = 'text/html'
    return await res.text()
  })
  .listen(3000)

console.log(`🚀 Server running at ${app.server?.url}`)
