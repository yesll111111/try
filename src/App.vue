<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
<!--  <h1>{{ a }}</h1>-->
<!--  <button @click="a++">+1</button>-->
  <router-view/>
</template>

<script lang="ts" setup>
import { ref } from "vue"
let a = ref(0)
</script>

<style>
</style>
