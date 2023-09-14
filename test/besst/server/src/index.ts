import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => 'Hello Elysia').listen(3000)

if (!app.server) throw new Error('Server not found!')

console.log(`🦊 Elysia is running at ${app.server.hostname}:${app.server.port}`)
