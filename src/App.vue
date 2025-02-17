<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/player">Player</RouterLink>
        <RouterLink to="/library">Library</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  border-bottom: 4px solid var(--highlight);
  box-shadow: 0 5px 30px 5px;
  padding: 10px;
}

nav {
  width: 100%;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

a {
  text-decoration: none;
  color: var(--text-color);
  transition: 0.4s;
  padding: 5px 20px;
}

a:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  border-radius: 15px;
  color: var(--highlight);
}

a:active,
a:focus {
  color: var(--action);
}

nav a.router-link-exact-active {
  color: var(--action);
}

nav a.router-link-exact-active:hover {
  color: var(--highlight);
}
</style>
