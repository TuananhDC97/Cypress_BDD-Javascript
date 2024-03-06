const reporter = require('cucumber-html-reporter')
const options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports',
    output: 'cypress/reports/cucumber-report.html',
    brandTitle: "Regression Test Report",
    storeScreenshots: true,
    screenshotsDirectory: 'cypress/screenshots',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    ignoreBadJsonFile: true,
    metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'STAGING',
        Browser: 'Chrome  91.0.4472.124',
        Platform: 'Windows 10',
        Executed: 'Remote',
    },
}
reporter.generate(options)