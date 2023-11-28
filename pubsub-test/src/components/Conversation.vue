<script setup lang="ts">
const props = defineProps<{
    data: string[]
}>();
</script>

<template>
    <div class="conversation-container">
        <div v-for="each in props.data" key="each">
        {{each}}
    </div>
        </div>

</template>

<style scoped>
.conversation-container {
    display: flex;
    flex-direction: column;
}
</style>