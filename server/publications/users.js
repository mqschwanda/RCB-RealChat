Meteor.publish('users', function() {
  return [
    Channels.find(),
    Meteor.users.find( {_id: {$ne: this.userId}}, {fields: {username: 1, 'profile.name': 1, 'status': 1}})
  ];
});
