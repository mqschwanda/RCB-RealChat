Meteor.publish( 'sidebar', function() {
  return [
    Channels.find({}, {sort: {name: 1}}),
    Meteor.users.find({_id: {$ne: this.userId}}, {fields: {username: 1, 'profile.name': 1, 'status': 1}})
  ];
});
