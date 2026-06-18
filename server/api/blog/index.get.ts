export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const api = config.public.api

  if (!api) return []

  try {
    return await $fetch(`${api}/api/blog`, { timeout: 5000 })
  } catch {
    return []
  }
})
