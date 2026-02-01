module.exports = {
  default: {
    require: ['utils/support.js', 'Orange/Smoke/step.js'],
    paths: ['Orange/**/*.feature'],
    format: [
      'html:allure-results/cucumber-report.html',
      'json:allure-results/cucumber-report.json',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: { snippetInterface: 'async-await' }
  }
};

