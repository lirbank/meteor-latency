Package.describe({
  name: 'mikael:latency',
  version: '0.0.2',
  summary: 'Simulate latency in Meteor apps',
  git: 'https://github.com/lirbank/meteor-latency.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('latency.js');
});
