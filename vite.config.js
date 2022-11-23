import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcss from 'postcss'

const production = !(process.env.NODE_ENV == 'development' || process.env.NODE_ENV == '' || process.env.NODE_ENV === undefined);
console.log("MODE: " + process.env.NODE_ENV);
console.log("var production = " + production);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production
      }
    }),
    postcss(),
  ],
  //clearScreen: false,
});
