const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')

async function setupNodeEvents(on, config){
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      return config;
}

module.exports = defineConfig({
  e2e: {
      studentFormUrl: 'https://demoqa.com/automation-practice-form',
      bookStoreUrl: 'https://demoqa.com/books',
      specPattern: "**/*.feature",
      supportFile: false,
      setupNodeEvents,
  },
	env: {
    username: 'TuanAnh_SD4748',
		password: '@Abc1234',
		userId: 'd529af54-c788-4c05-9035-c05f42361480',
    apiUrl: 'https://demoqa.com',
	},
});
