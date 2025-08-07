module.exports = {
  default: [
    '--require features/step_definitions/**/*.js',
    '--format json:cucumber-report/report.json',
    '--format html:cucumber-report/index.html'
  ].join(' ')
};
