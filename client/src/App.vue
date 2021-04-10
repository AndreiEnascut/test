<template>
  <div id="app">
    <div id="nav" class="nav">
      <router-link to="/">Phone list</router-link> |
      <router-link :to="{ name: 'phone'}">Add phone</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style scoped>
  .nav {
    margin: 30px;
    font-size: 1.5rem;
  }
</style>