Template.sidebar.onCreated(() => {
  let template = Template.instance();
  template.subscribe('sidebar');
});

Template.sidebar.helpers({
  // check if current channel is the same as the funtions parameter
  checkIfActive(channel) {
    // get current channel name from router
    let current = FlowRouter.getParam('channel');
    // set `active` html class if true and nothing if false
    if (current) return current === channel || current === `@${channel}` ? 'active' : false;
  },
  // return all channels in database
  channels() {
    // find channels in database
    let channels = Channels.find();
    // return channels if they exist
    if (channels) return channels;
  },
  // return all users (except for client user) from the database
  users() {
    // find all users from the database that are not the current user
    let users = Meteor.users.find({_id: {$ne: Meteor.userId()}});
    // return users if they exist
    if (users) return users;
  }
});
