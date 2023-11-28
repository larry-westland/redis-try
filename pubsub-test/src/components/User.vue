<script setup lang="ts">
    import { ref } from 'vue';
    import { socket, state } from '../socketIO'
    import Conversation from './Conversation.vue';
    const textInput = ref<string>("");
    const name = ref<string>("");
    const channel = ref<string>("");

    function print() {
        socket.emit('publish', channel.value, textInput.value)
        textInput.value = ""
    }

    function subscribe(channel:string){
        socket.emit('subscribe', channel);
    }

</script>

<template>
    <div class="chat-container">
        <Conversation :data="channel === 'channel1' ? state.channel1 : state.channel2"/>
        <h1>
            HI
        </h1>
        <input type="text" v-model="name" id="input" placeholder="name"/>
        <input type="text" v-model="channel" placeholder="channel" />
        <input type="text" v-model="textInput" id="input" placeholder="message"/>
        <button @click="() => subscribe(channel)">subscribe</button>
        <button @click="print">press me</button>
        <button @click="() => socket.connect()">connect</button>
        <button @click="() => socket.disconnect()">disconnect</button>

    </div>
</template>

<style scoped>
#input {
    height: 16px;
}

.chat-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}
</style>