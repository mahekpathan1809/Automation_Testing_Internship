
import { defineConfig } from '@playwright/test';

export default defineConfig({

    testDir: './TestScript',

    timeout: 60000,

    reporter: [['html', { open: 'never' }]],

    use: {
        headless: false,
        launchOptions: {
            slowMo: 1000
        }
    }

});
