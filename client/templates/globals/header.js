Template.header.helpers({
  brand() {
    return "RealChat";
  },
  slogan() {
    return "for real people...";
  }
});

Template.header.events({
  'click .logout' ( event ) {
    event.preventDefault();

    Meteor.logout( ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      } else {
        Bert.alert( 'Logged out!', 'success' );
      }
    });
  }
});
