// middleware/auth.ts
export default defineNuxtRouteMiddleware(() => {
    const token = useState<string | null>('token')
    if (!token.value) {
      return navigateTo('/login')
    }
  })
  