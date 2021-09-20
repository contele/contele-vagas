const redis = require("redis");

const client = redis.createClient({ host: process.env.REDIS_HOST });

const { promisify } = require("util");

client.on("error", function(error) {
    console.error(error);
});

module.exports = {
    getAsync: promisify(client.get).bind(client),
    setAsync: promisify(client.set).bind(client),
    getKeysAsync: promisify(client.keys).bind(client),
    client
}