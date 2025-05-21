// plugins/api.ts
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
  
    const api = $fetch.create({
      baseURL: config.public.apiBase,
      onRequest({ options }) {
        const token = localStorage.getItem('token')
        if (token) {
          options.headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`,
          }
        }
      },
      onResponseError({ response }) {
        if (response.status === 401) {
          console.warn('Unauthorized, mungkin token expired.')
        }
      },
    })
  
    return {
      provide: {
        api,
      },
    }
  })
  