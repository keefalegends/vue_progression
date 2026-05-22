<template lang="">
    <div></div>
</template>
<script setup>
    import { ref } from 'vue';

    const message = ref('Hello Vue!');

    // fungsi untuk mengubah state
    function changeMessage() {
        message.value = 'Pesan diubah!';
    }
</script>
<style lang=""></style>