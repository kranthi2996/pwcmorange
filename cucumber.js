module.exports = {
  default: {
    parallel: 2,
    require: ['utils/support.js', 'Orange/Smoke/step.js','Orange/regression/regression.step.js'],
    paths: ['Orange/**/*.feature'],
    format: [
      'progress-bar',
      'html:allure-results/cucumber-report.html',
      'json:allure-results/cucumber-report.json',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: { snippetInterface: 'async-await' }
  }
};

