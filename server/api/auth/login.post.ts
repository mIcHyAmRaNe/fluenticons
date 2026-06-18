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
    const response = await $fetch(`${api}/api/auth/login`, {
      method: 'POST',
      body: { email, password },
      timeout: 5000,
    })

    if (response.success) {
      await setUserSession(event, {
        user: {
          email,
          token: response.token,
        }
      })
      return { success: true }
    }

    throw createError({ statusCode: 401, message: response.message || 'Invalid credentials' })
  } catch (err) {
    throw createError({ statusCode: 401, message: err.message || 'Authentication failed' })
  }
})
