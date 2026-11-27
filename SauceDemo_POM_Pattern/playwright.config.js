import {defineConfig } from '@playwright/test';
export default defineConfig({
    testDir: './TestScript',
    reporter: [['html', {open : 'never'}]],
    

  

})