import handleChannelSwitch from '../../modules/handle-channel-switch';
import sortMessages from '../../modules/sort-messages';
import handleMessageInsert from '../../modules/handle-message-insert';

// set up reactive variables when a template is created
Template.channel.onCreated( () => {
  handleChannelSwitch(Template.instance());
});

Template.channel.helpers({
  // check if template is loading
  isLoading() {
    return Template.instance().loading.get();
  },
  // check if channel or chatroom
  isDirect() {
    return Template.instance().isDirect.get();
  },
  // get the name of the channel or username the messages are being sent to
  channel() {
    return FlowRouter.getParam('channel');
  },
  // messages object
  messages() {
    // get messages from database
    let messages = Messages.find({}, {sort: {timestamp: 1}});
    // return the display properties of the messages
    if (messages) return sortMessages(messages);
  },
  // handle users typing
  usersTyping() {
    return null;
  }
});

Template.channel.events({
  // keyup handler inside message input
  'keyup [name="message"]' (event, template) {
    // run validation and insertion on event from template
    handleMessageInsert(event, template);
  }
});
