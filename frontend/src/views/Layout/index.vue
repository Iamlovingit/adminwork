<template>
    <div class="menu">
        <Menu></Menu>
    </div>
    <div class="content">
        <Content/>
    </div>
</template>

<script setup>
import Menu from './Menu.vue'
import Content from './Content.vue'
</script>

<style scoped>
.menu{
    position: fixed;
    left: 0;
    top:0;
    bottom: 0;
}
.content{
    padding: 200px;
}
</style>
