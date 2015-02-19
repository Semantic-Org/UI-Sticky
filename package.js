var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-sticky',
  summary : 'Semantic UI - Sticky (official): Single component release of sticky',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Sticky.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
