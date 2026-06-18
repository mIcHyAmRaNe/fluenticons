<template>
  <div></div>
</template>

<script setup>
const route = useRoute()
const provider = route.params.provider

let params
switch (provider) {
  case 'facebook':
    const accessToken = route.hash?.split('&')[0]?.split('=')[1]
    params = { token: accessToken }
    break
  default:
    const { code } = route.query
    params = { code }
}

const { fetch: refreshSession } = useUserSession()

try {
  await $fetch(`/api/auth/social/${provider}`, {
    method: 'POST',
    body: params,
  })
  await refreshSession()
} catch (err) {
  console.error(err)
}

await navigateTo('/')
</script>
