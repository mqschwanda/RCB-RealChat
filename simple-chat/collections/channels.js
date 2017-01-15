// define channels collection in mongo database
Channels = new Mongo.Collection('channels');
// allow methods
Channels.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});
// deny methods
Channels.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});
// create schema for channel model
let ChannelsSchema = new SimpleSchema({
  'name': { // the display name of channel
    type: String,
    label: 'The display name of channel'
  }
});
// define channel with created schema
Channels.attachSchema(ChannelsSchema);
