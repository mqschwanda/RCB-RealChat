// allow methods
Meteor.users.allow({insert: () => false, update: () => false, remove: () => false});
// deny methods
Meteor.users.deny({insert: () => true, update: () => true, remove: () => true});
