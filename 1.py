# npm create vite@latest av_filmograf 
# Framework — React
# Variant — JavaScript


# npm install   

# npm run dev
# http://localhost:5173/

# npm run build
# Запуск сборки проекта. Результат будет помещён в папку dist/
# Что бы при билде vite устанавливал относительные пути, необходимо
# исправить файл vite.config.js
#
# import { defineConfig } from 'vite'
# import react from '@vitejs/plugin-react'
# // https://vite.dev/config/
# export default defineConfig({
#   base: './',                             // ← Это важно! av
#   plugins: [react()],
# })

#Установка chakra-ui
# @emotion/react -> основной пакет для стилизации
# @emotion/styled -> для создания стилизованных компонентов (аналог styled-components)
# framer-motion -> Библиотека для анимаций
# npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

# Установка иконок от chakra-ui
# npm install @chakra-ui/icons



# axios -> Это HTTP-клиент для работы с API (отправка запросов к серверу).
# react-hook-form -> Библиотека для управления формами в React
# react-icons -> Коллекция популярных иконок
# npm install axios react-hook-form 

# Установка иконок от react-icons
# npm install react-icons


# Установка зависимостей для chakra-ui версии 2 !!!
# npm install @chakra-ui/react @chakra-ui/input @chakra-ui/color-mode @emotion/react @emotion/styled framer-motion
# npm install @chakra-ui/icons