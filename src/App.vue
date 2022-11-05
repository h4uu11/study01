<script setup lang="ts">
import {RouterView} from "vue-router"
import Header from "./components/Header.vue"
</script>

<template>
   <div class="wrapper">
      <div class="header">
         <Header />
      </div>
      <div class="container">
         <RouterView />
      </div>
   </div>
</template>

<style scoped></style>
