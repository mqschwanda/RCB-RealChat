Template.message.helpers({
  // find username name for message header
  name(userId) {
    if (userId) {
      // find user from user id
      let user = Meteor.users.findOne(userId, {fields: {'username': 1}});
      // return username
      return user ? `@${user.username}`: '';
    }
  }
});

Template.message.events({
  // make any link open in new window by default
  'click a' (event) {
    event.preventDefault();
    window.open(event.target.href, '_blank');
  }
});
