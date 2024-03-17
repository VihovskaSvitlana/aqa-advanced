import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  chromeWebSecurity: false,
  e2e: {
    experimentalStudio:true,
    
    // retries: {
    //   openMode: 1
    // },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

