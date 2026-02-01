#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const jsonFile = 'allure-results/result.json';
const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

data.forEach((feature, idx) => {
  feature.elements.forEach((scenario, sIdx) => {
    const allureResult = {
      name: scenario.name,
      status: scenario.steps.every(s => s.result.status === 'passed') ? 'passed' : 'failed',
      fullName: `${feature.name} - ${scenario.name}`,
      description: scenario.description,
      descriptionHtml: `<p>${scenario.description}</p>`,
      timeline: {
        startTime: Date.now(),
        duration: scenario.steps.reduce((sum, s) => sum + s.result.duration, 0),
        endTime: Date.now() + scenario.steps.reduce((sum, s) => sum + s.result.duration, 0)
      },
      steps: scenario.steps.map(step => ({
        name: step.name,
        status: step.result.status,
        attachments: [],
        parameters: [],
        hasContent: false
      })),
      attachments: [],
      parameters: [],
      labels: [
        { name: 'feature', value: feature.name },
        { name: 'story', value: scenario.name }
      ],
      links: [],
      shouldDisplayFile: false,
      hasContent: false
    };

    fs.writeFileSync(
      path.join('allure-results', `${Date.now()}-${Math.random().toString(36).substr(2, 9)}-result.json`),
      JSON.stringify(allureResult),
      'utf8'
    );
  });
});

console.log('✅ Converted Cucumber JSON to Allure format');
