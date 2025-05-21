// composables/useAuth.ts
export function useAuth() {
    const token = useState<string | null>('token', () => null)
    const user = useState<any>('user', () => null)
  
    function saveToken(newToken: string) {
      token.value = newToken
      localStorage.setItem('token', newToken)
    }
  
    function loadToken() {
      const stored = localStorage.getItem('token')
      if (stored) token.value = stored
    }
  
    async function fetchUser() {
      try {
        const { $api } = useNuxtApp()
        const data = await $api('/user/me')
        user.value = data
      } catch {
        logout()
      }
    }
  
    function logout() {
      token.value = null
      user.value = null
      localStorage.removeItem('token')
      navigateTo('/login')
    }
  
    return {
      token,
      user,
      saveToken,
      loadToken,
      fetchUser,
      logout,
    }
  }
  