import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base:'/f2e-react-sign-system/',
  plugins: [react()],
  define:{
    'process.env':{}
  },
  resolve:{
    alias:{
      '@':resolve(__dirname,'src'),
    }
  }
})
