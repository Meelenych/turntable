<script setup>


fetch('https://api.deezer.com/playlist/4341978/tracks?index=0&limit=10')
  .then((response) => response.json()) // Return the parsed JSON
  .then((data) => console.log(data))   // Log the actual data
  .catch((error) => console.error('Error fetching data:', error)); // Handle errors

</script>

<template>

  <h1>TURNTABLE</h1>

</template>

<style></style>