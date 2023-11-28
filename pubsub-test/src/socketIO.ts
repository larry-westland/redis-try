import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  channel1: [""],
  channel2: [""],
});

export const socket = io("http://localhost:3000/");

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on('newMessage', (channel:string, message:string) => {
  if(channel === 'channel1'){
    state.channel1.push(message)
  }else{
    state.channel2.push(message)
  }
})