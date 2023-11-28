import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  channel1: [""],
  channel2: [""],
});

// "undefined" means the URL will be computed from the `window.location` object
// const URL:any = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000/";

export const socket = io("http://localhost:3000/");

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on('newMessage', (channel:string, message:string) => {
  // const index = Object.keys(state).indexOf(channel);
  if(channel === 'channel1'){
    state.channel1.push(message)
  }else{
    state.channel2.push(message)
  }
})