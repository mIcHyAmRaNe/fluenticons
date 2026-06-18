export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const api = config.public.api
  const provider = getRouterParam(event, 'provider')
  const body = await readBody(event)

  if (!api) {
    throw createError({ statusCode: 501, message: 'Auth API not configured' })
  }

  try {
    const response = await $fetch(`${api}/api/social/${provider}`, {
      method: 'POST',
      body,
      timeout: 5000,
    })

    if (response.success) {
      await setUserSession(event, {
        user: {
          email: response.email,
          token: response.token,
        }
      })
      return { success: true }
    }

    throw createError({ statusCode: 401, message: 'Authentication failed' })
  } catch (err) {
    throw createError({ statusCode: 401, message: err.message || 'Authentication failed' })
  }
})
