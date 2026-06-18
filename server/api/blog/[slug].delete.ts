export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const api = config.public.api
  const slug = getRouterParam(event, 'slug')

  if (!api) {
    throw createError({ statusCode: 400, message: 'Blog API not configured' })
  }

  try {
    return await $fetch(`${api}/api/blog/${slug}`, {
      method: 'DELETE',
      timeout: 5000,
    })
  } catch (err) {
    throw createError({ statusCode: 400, message: err.message || 'Failed to delete article' })
  }
})
