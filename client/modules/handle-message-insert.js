import setScroll from './set-scroll';

// insert message into the database
let _handleInsert = (message, event, template) => {
  // use meteor method to insert message into database
  Meteor.call('insertMessage', message, (error) => {
    // show error to user
    if (error) Bert.alert(error.reason, 'danger');
      // reset input value after insert
      else event.target.value = '';
  });
};

// build the message based on template instance and message content
let _buildMessage = (template, text) => {
  return {
    // replace the @ from the username
    destination: FlowRouter.getParam('channel').replace('@', ''),
    // get the isFirect instance from the template
    isDirect: template.isDirect.get(),
    // the message content
    message: text
  };
};

// check if input isnt blank and the enter key was pressed
let _checkIfInsert = (message, event) => {
  return message !== '' && event.keyCode === 13;
};
// get value of message input from template
let _getMessage = (template) => {
  return template.find('[name="message"]').value.trim();
};

export default function(event, template) {
  // get message content
  let text = _getMessage(template);
  // check if user is entering a message with value of input from template
  if (_checkIfInsert(text, event)) {
    // scroll the messages container to the bottom
    setScroll('messages');
    // build and insert
    _handleInsert(_buildMessage(template, text), event, template);
  }
}
