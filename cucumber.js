module.exports = {
  default: {
    require: ['Orange/Smoke/step.js'],
    paths: ['Orange/**/*.feature'],
    format: [
      'progress-bar',
      'allure-cucumberjs/reporter'
    ]
  }
};

