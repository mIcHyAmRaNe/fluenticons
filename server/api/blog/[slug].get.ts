export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const api = config.public.api
  const slug = getRouterParam(event, 'slug')

  if (!api) {
    throw createError({ statusCode: 404, message: 'Article not found' })
  }

  try {
    return await $fetch(`${api}/api/blog/${slug}`, { timeout: 5000 })
  } catch {
    throw createError({ statusCode: 404, message: 'Article not found' })
  }
})
