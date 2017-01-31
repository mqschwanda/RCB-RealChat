// define messages collection in mongo database
Messages = new Mongo.Collection('messages');
// allow methods
Messages.allow({insert: () => false, update: () => false, remove: () => false});
// deny methods
Messages.deny({insert: () => true, update: () => true, remove: () => true});
// create schema for channel model
let MessagesSchema = new SimpleSchema({
  'channel': { // ID of the channel this message belongs to.
    type: String,
    label: 'ID of the channel this message belongs to.',
    optional: true
  },
  'to': { // ID of the user this message was sent directly to.
    type: String,
    label: 'ID of the user this message was sent directly to.',
    optional: true
  },
  'owner': { // ID of the user that created this message.
    type: String,
    label: 'ID of the user that created this message.'
  },
  'timestamp': { // date and time this message was created.
    type: Date,
    label: 'date and time this message was created.'
  },
  'message': { // content of this message.
    type: String,
    label: 'content of this message.'
  }
});
// define message with created schema
Messages.attachSchema(MessagesSchema);
