<template>
  <div class="grid grid-cols-3 gap-3">
    <button
      v-for="p in providers"
      :key="p.name"
      @click="login(p.name)"
      class="font-semibold border text-center py-2 px-4 bg-transparent border-2 border-gray-200 hover:border-gray-300 rounded"
    >
      <img :src="`/${p.img}`" class="w-6 h-6 mx-auto" />
    </button>
  </div>
</template>

<script setup>
const providers = [
  { name: 'google', img: 'google-logo.svg' },
  { name: 'facebook', img: 'facebook-logo.png' },
  { name: 'github', img: 'github-logo.svg' },
]

function login(provider) {
  window.location.href = `/api/auth/social/${provider}`
}
</script>
