// Require the Fastify framework and instantiate it
const fs = require("fastify")({
logger: false,
});
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fs.get("/", (request, reply) => {
reply
.code(200)
.header("Content-Type", "text/html; charset=utf-8")
.send("<h1>Hello from Fastify!</h1>");
});
// Start server and listen to requests using Fastify
const listenIP = 'localhost';
const listenPort = 8082;
fs.listen(listenPort, listenIP, (err, address) => {
if (err) {
// fastify.log.error(err);
console.log(err);
process.exit(1);
}
// fastify.log.info(`Server listening on ${address}`);
console.log(`Server listening on ${address}`);
});
