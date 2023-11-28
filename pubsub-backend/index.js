const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const { createServer } = require('node:http');
const redis = require('redis');
const publisher = redis.createClient(6379, '127.0.0.1');
publisher.connect()
const subscriber = publisher.duplicate();
subscriber.connect()
const app = express();

app.use(cors())
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

app.get('/', (req, res) => {
    res.send('hello')
})

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('conversation', (conversation) => {
        io.emit('conversation', conversation)
    })

    socket.on('subscribe', (channel) => {
        console.log(`a user has subscribe ${channel}`)
        subscriber.subscribe(channel, (message) => {
            console.log('sent')
            io.emit('newMessage', channel, message)
        })
    })

    socket.on('publish', (channel, message) => {
        publisher.publish(channel, message)
    })
})

server.listen(3000, () => {
    console.log('listening to 3000')
})

