# redis-try

Clone the repo with `git clone https://github.com/larry-westland/redis-try.git`

To start the frontend project, run `npm run dev`

To start the backend server, run `node ./index.js`

## To start the project in full.
1. Activate with docker, first install with `docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest`
2. Move to pubsub-test folder and run `npm i` then `npm run dev`
3. Move to pubsub-backend folder and run `npm i` then `node ./index.js`
4. Go to the [localhost frontend](http://localhost:5173/)
5. input whatever channel name you want in the channel field and press **subscribe**
6. input whatever channel name you want for another channel field and press **subscribe**
### note
Those two user share the same websocket so disconnect and connect would only happen once

## To test the redis pub and sub
1. Open three terminal
2. run `docker exec -it redis-stack-server redis-cli` on both three terminal
3. run `subscribe <the first channel name>` in the first terminal (This would be the subscriber)
4. run `subscribe <the second channel name>` in the second terminal (This would be the subscriber)
5. run `publish <any one channel you typed> <message you want to send>`
## You should see the terminal that subscribed to that channel would print out a message, also the frontend.
### You could also try to press disconnect and send some messages, the messages will show up once you reconnect, it's a socket io feature.
