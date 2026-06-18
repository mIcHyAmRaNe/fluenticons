<template>
  <article class="flex xs:flex-col lg:flex-row">
    <div
      class="relative xs:p-8 lg:p-16 w-full h-full markdown-body post-right custom-scroll max-w-7xl mx-auto p-6"
    >
      <h1 class="font-bold text-4xl text-center">{{ article.title }}</h1>
      <p class="pb-4 text-center">
        Post last updated: {{ formatDate(article.updatedAt) }}
      </p>
      <p class="text-center">{{ article.description }}</p>
      <div class="max-w-4xl mx-auto">
        <img
          :src="api + article.img"
          :alt="article.title"
          class="h-full w-full object-cover max-w-lg mx-auto mt-16 mb-10"
        />
        <div v-if="article.content">
          <p
            v-for="(content, i) in article.content.split('\n')"
            :key="i"
            class="mb-3"
          >
            {{ content }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const api = config.public.api

const { data: article } = await useFetch(`/api/blog/${route.params.slug}`)

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}
</script>

<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
