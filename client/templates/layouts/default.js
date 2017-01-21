const handleRedirect = ( routes, redirect ) => {
  let currentRoute = FlowRouter.getRouteName();
  if ( routes.indexOf( currentRoute ) > -1 ) {
    FlowRouter.go( redirect );
    return true;
  }
};
/*
Because the layout of our channels template will be full-width (meaning the template will extend the full-width of the page), we need to account for moving between a channel and one of our public views (where they layout is centered in the page). To do this, here, we rely on FlowRouter's reactive getParam() method in conjunction with a Tracker.autorun() block.
*/
Template.default.onRendered( () => {
  Tracker.autorun( () => {
    let isChannel   = FlowRouter.getParam( 'channel' ),
        bodyClasses = document.body.classList;
    // What we're saying here is that when the channel parameter becomes visible in the URL, we want to add a class to our <body></body> tag called is-channel. If there isn't a channel parameter, we want to remove that class from the body.
    return isChannel ? bodyClasses.add( 'is-channel' ) : bodyClasses.remove( 'is-channel' );
  });
});

Template.default.helpers({
  loggingIn() {
    return Meteor.loggingIn();
  },
  authenticated() {
    return !Meteor.loggingIn() && Meteor.user();
  },
  redirectAuthenticated() {
    return handleRedirect([
      'login',
      'signup',
      'recover-password',
      'reset-password'
    ], '/messages/general' );
  },
  redirectPublic() {
    return handleRedirect( [ 'channel' ], '/login' );
  }
});
