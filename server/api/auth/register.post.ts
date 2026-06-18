export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const api = config.public.api
  const { email, password } = await readBody(event)

  if (!email || !password) {
    throw createError({ statusCode: 400, message: 'Email and password are required' })
  }

  if (!api) {
    throw createError({ statusCode: 501, message: 'Auth API not configured' })
  }

  try {
    return await $fetch(`${api}/api/auth/register`, {
      method: 'POST',
      body: { email, password },
      timeout: 5000,
    })
  } catch (err) {
    throw createError({ statusCode: 400, message: err.message || 'Registration failed' })
  }
})
