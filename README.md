# cms-go-frontend

Frontend resmi untuk **CMS-Go**, dibangun menggunakan **Nuxt.js 3** dan terintegrasi langsung dengan backend CMS-Go berbasis Golang.

---

## 🚀 Tujuan Proyek

Menyediakan antarmuka pengguna modern untuk sistem manajemen konten CMS-Go, meliputi:

- Halaman publik seperti daftar artikel, halaman statis (about, contact, dll)
- Halaman detail artikel berdasarkan `slug`
- Halaman login & dashboard admin (hanya untuk user yang terautentikasi)
- Antarmuka CRUD untuk artikel, kategori, tag, halaman statis (opsional bertahap)

---

## 🛠️ Teknologi yang Digunakan

| Teknologi       | Deskripsi |
|------------------|-----------|
| [Nuxt 3](https://nuxt.com/)        | Framework Vue modern dengan SSR/SPA hybrid |
| [Vue 3](https://vuejs.org/)        | Library inti UI |
| [Pinia](https://pinia.vuejs.org/)  | Manajemen state (user login, token) |
| [TailwindCSS](https://tailwindcss.com/) | Utilitas styling cepat & responsif |
| [useFetch()](https://nuxt.com/docs/api/composables/use-fetch) | API call native Nuxt, ringan dan efisien |
| [JWT](https://jwt.io/)             | Autentikasi token dari backend CMS-Go |
| [Nuxt Middleware](https://nuxt.com/docs/guide/directory-structure/middleware) | Proteksi route berdasarkan role |
| [FormKit / VeeValidate] (opsional) | Validasi input pengguna |

---

## 🌐 Arsitektur

| Layer       | Port             | Deskripsi |
|-------------|------------------|-----------|
| Backend     | `localhost:8080` | CMS-Go (API REST - Echo + PostgreSQL) |
| Frontend    | `localhost:3000` | Nuxt 3 Client App |

---

## 📂 Struktur Direktori (rencana)

```bash
cms-go-frontend/
├── pages/
│   ├── index.vue               # Daftar artikel (publik)
│   ├── articles/
│   │   └── [slug].vue          # Halaman detail artikel
│   ├── about.vue               # Halaman statis
│   ├── login.vue               # Halaman login
│   └── admin/
│       ├── index.vue           # Dashboard ringkasan
│       ├── articles.vue        # CRUD artikel (admin/editor)
│       ├── categories.vue      # CRUD kategori
│       ├── tags.vue            # CRUD tag
│       ├── pages.vue           # CRUD static pages (admin/operator)
│       └── users.vue           # Manajemen user & role (admin only)
├── composables/
│   └── useAuth.ts              # login(), logout(), checkAuth()
├── middleware/
│   └── auth.ts                 # Proteksi halaman admin
├── plugins/
│   └── api.ts                  # Setup runtimeConfig & fetch wrapper
├── nuxt.config.ts
└── .env.local
```

---

## ⚙️ Setup Awal (Dev)

```bash
npx nuxi init cms-go-frontend
cd cms-go-frontend

npm install
# atau gunakan yarn / pnpm

npm run dev
```

Tambahkan file `.env.local`:

```env
NUXT_PUBLIC_API_BASE=http://localhost:8080
```

---

## 🔐 Integrasi Token

- Token JWT akan disimpan di `localStorage`
- Setiap request ke API backend akan otomatis menyertakan `Authorization: Bearer <token>`
- Middleware Nuxt akan memproteksi route admin/editor/operator

---

## 🎯 Status Pengembangan

- [x] Setup Nuxt 3 project
- [ ] Halaman publik (artikel, static page)
- [ ] Halaman login
- [ ] Middleware proteksi token
- [ ] Dashboard admin: user, artikel, halaman
- [ ] Upload gambar (integrasi form-data)
- [ ] CRUD kategori & tag

---

## 📘 Lisensi

Proyek ini bersifat terbuka dan dikembangkan untuk mendampingi backend CMS-Go.

---

Frontend ini akan menjadi antarmuka utama yang sepenuhnya mengonsumsi API dari CMS-Go. Seluruh halaman dikembangkan dengan standar modern untuk performa, keamanan, dan UX.
