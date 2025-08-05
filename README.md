# Laravel Inertia ReactJS - CRUD

## 📋 Deskripsi Sistem
Ini adalah penerapan simpel aplikasi (CRUD) web modern yang dibangun menggunakan kombinasi **Laravel** sebagai backend framework dan **ReactJS** dengan **Inertia.js** sebagai frontend.

### 🎯 Tujuan Sistem

-   Mengelola konten post dengan operasi CRUD lengkap
-   Memberikan pengalaman pengguna yang modern dengan SPA (Single Page Application)
-   Menggunakan teknologi terbaru untuk performa optimal

## 🛠️ Teknologi yang Digunakan

### Backend (Laravel 9)

-   **PHP 8.0.2+** - Bahasa pemrograman utama
-   **Laravel Framework 9.19** - Framework PHP modern
-   **Laravel Sanctum 2.14.1** - Authentication system
-   **Inertia Laravel 0.6.3** - Server-side adapter untuk Inertia.js
-   **MySQL/PostgreSQL** - Database management system

### Frontend (ReactJS)

-   **React 17.0.2** - JavaScript library untuk UI
-   **React DOM 17.0.2** - React rendering untuk web
-   **Inertia.js 0.11.0** - Modern monolith approach
-   **Inertia React 0.8.1** - React adapter untuk Inertia.js
-   **Inertia Progress 0.2.7** - Progress bar untuk navigasi

### Development Tools

-   **Vite 3.0.0** - Build tool dan development server
-   **Laravel Vite Plugin 0.5.0** - Plugin untuk integrasi Vite dengan Laravel
-   **Axios 0.27** - HTTP client untuk API requests
-   **Lodash 4.17.19** - Utility library
-   **PostCSS 8.1.14** - CSS processing tool

## ✨ Fitur yang Tersedia

### 🎨 Manajemen Post (CRUD)

-   **Create** - Membuat post baru
-   **Read** - Menampilkan daftar semua post
-   **Update** - Mengedit post yang sudah ada
-   **Delete** - Menghapus post
  
### 🔧 Fitur Teknis

-   **Single Page Application (SPA)** - Navigasi tanpa reload halaman
-   **Form Validation** - Validasi input di sisi server dan client
-   **Flash Messages** - Notifikasi sukses/error yang informatif
-   **Responsive Design** - Tampilan yang optimal di berbagai perangkat

## 🚀 Cara Instalasi

### Prerequisites

Sebelum menginstal, pastikan sistem Anda memiliki:

-   **PHP 8.0.2** atau lebih tinggi
-   **Composer** - Package manager untuk PHP
-   **Node.js 16+** dan **npm** - Package manager untuk JavaScript
-   **MySQL/PostgreSQL** - Database server
-   **Git** - Version control system

### Langkah-langkah Instalasi

#### 1. Clone Repository

```bash
git clone <repository-url>
cd laravel-inertia-reactjs
```

#### 2. Install Dependencies PHP

```bash
composer install
```

#### 3. Install Dependencies JavaScript

```bash
npm install
```

#### 4. Setup Environment

```bash
# Copy file environment
cp .env.example .env

# Generate application key
php artisan key:generate
```

#### 5. Konfigurasi Database

Edit file `.env` dan sesuaikan konfigurasi database:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=username_database
DB_PASSWORD=password_database
```

#### 6. Jalankan Migration

```bash
php artisan migrate
```

#### 7. Build Assets (Development)

```bash
# Development mode
npm run dev

# Production build
npm run build
```

#### 8. Jalankan Server

```bash
# Laravel development server
php artisan serve

# Atau menggunakan Vite untuk development
npm run dev
```

### 🔧 Konfigurasi Tambahan

#### Virtual Host (Opsional)

Untuk production, disarankan menggunakan web server seperti Apache atau Nginx:

**Apache (.htaccess sudah tersedia)**

```apache
<VirtualHost *:80>
    ServerName blog.local
    DocumentRoot /path/to/laravel-inertia-reactjs/public

    <Directory /path/to/laravel-inertia-reactjs/public>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

**Nginx**

```nginx
server {
    listen 80;
    server_name blog.local;
    root /path/to/laravel-inertia-reactjs/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.0-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

## 📁 Struktur Project

```
laravel-inertia-reactjs/
├── app/
│   ├── Http/Controllers/
│   │   └── PostController.php      # Controller untuk manajemen post
│   └── Models/
│       └── Post.php               # Model Post
├── database/
│   └── migrations/
│       └── create_posts_table.php # Migration untuk tabel posts
├── resources/
│   └── js/
│       ├── Pages/
│       │   └── Posts/
│       │       ├── Index.jsx      # Halaman daftar post
│       │       ├── Create.jsx     # Halaman buat post
│       │       └── Edit.jsx       # Halaman edit post
│       ├── Layouts/               # Layout components
│       └── app.jsx                # Entry point React
├── routes/
│   └── web.php                    # Definisi routes
├── public/                        # Public assets
├── storage/                       # File storage
└── vendor/                        # Composer dependencies
```

## 🎯 Cara Penggunaan

### Mengakses Aplikasi

1. Buka browser dan akses `http://localhost:8000/posts`
2. Anda akan melihat halaman daftar post

### Menjalankan Development Server

```bash
# Terminal 1 - Laravel server
php artisan serve

# Terminal 2 - Vite development server
npm run dev
```

## 🚀 Deployment

### Production Build

```bash
# Install dependencies
composer install --optimize-autoloader --no-dev
npm install
npm run build

# Set environment
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Environment Variables

Pastikan semua environment variables sudah dikonfigurasi dengan benar:

-   `APP_ENV=production`
-   `APP_DEBUG=false`
-   `APP_URL=https://your-domain.com`

## 📝 License

Project ini menggunakan license MIT. Lihat file `LICENSE` untuk informasi lebih lanjut.

**Dibuat dengan ❤️ menggunakan Laravel, Inertia.js, dan ReactJS**
