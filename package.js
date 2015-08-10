
Package.describe({
  name    : 'semantic:ui-sticky',
  summary : 'Semantic UI - Sticky: Single component release',
  version : '2.0.8',
  git     : 'git://github.com/Semantic-Org/UI-Sticky.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'sticky.css',
    'sticky.js'
  ], 'client');
});
