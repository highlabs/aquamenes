<template>
  <main class="px-4 bg-black min-h-screen text-white">
    <nuxt />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');

body {
  @apply font-body;
}

p {
  @apply text-sm my-2;
}
.pixel-border {
  border-image-slice: 2;
  border-image-width: 2;
  border-image-repeat: stretch;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
  border-image-outset: 2;
}
</style>
