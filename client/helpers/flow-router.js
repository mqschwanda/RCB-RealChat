Template.registerHelper('pathFor', (path, view) => {
  if (path.hash) {
    view = path;
    path = view.hash.route;
    delete view.hash.route;
  }
  let query = view.hash.query ? FlowRouter._qs.parse(view.hash.query) : {};
  return FlowRouter.path(path, view.hash, query);
});
// set the aplications url for a given path and view
Template.registerHelper('urlFor', (path, view) => {
  return Meteor.absoluteUrl(pathFor(path, view).substr(1));
});
// check if a route is equal to the current route
Template.registerHelper('currentRoute', (route) => {
  // reactively watch the changes in the path
  FlowRouter.watchPathChange();
  // if equal to current route return 'active'
  return FlowRouter.current().route.name === route ? 'active' : '';
});
