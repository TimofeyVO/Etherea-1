# 🚀 Deployment Guide для Etherea Token Creator

## 📦 Подготовка к деплою

### 1. **Создайте папку для assets**
```bash
mkdir public/assets
```

### 2. **Скачайте изображения из Figma**
Сохраните следующие файлы в `public/assets/`:
- Логотип: `logo.png` (из figma:asset/d00e2b5924d98f768e2c28c871fa0a8cd6652c9e.png)

### 3. **Установка зависимостей**
```bash
npm install
```

### 4. **Структура файлов должна быть:**
```
project-root/
├── public/
│   └── assets/
│       └── logo.png
├── src/
│   ├── components/
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── postcss.config.js
```

### 5. **Команды для деплоя**
```bash
# Разработка
npm run dev

# Продакшн build
npm run build

# Preview build
npm run preview
```

### 6. **Деплой на Vercel**
```bash
npm install -g vercel
vercel --prod
```

### 7. **Деплой на Netlify**
```bash
npm run build
# Затем drag & drop папки dist в Netlify
```

## ⚠️ Важные изменения

1. **Tailwind v3 вместо v4** - для совместимости
2. **Figma assets заменены** - на обычные файлы в public/assets/
3. **CSS исправлен** - для работы с bundler'ами
4. **Framer-motion** - вместо motion/react

## ✅ Что исправлено

- ✅ Полная структура проекта
- ✅ Правильные конфигурации (vite, tailwind, postcss)
- ✅ Совместимость с bundler'ами
- ✅ Исправлены все импорты
- ✅ Готов для деплоя на любой платформе

## 🔧 Troubleshooting

**Если стили не загружаются:**
```bash
npm run build
npm run preview
```

**Если анимации не работают:**
```bash
npm install framer-motion@^10.16.16
```

**Если Tailwind не работает:**
Проверьте что `src/styles/globals.css` импортируется в `src/main.tsx`