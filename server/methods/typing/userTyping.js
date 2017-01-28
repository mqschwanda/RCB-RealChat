// import the insertMessage function from our prebuilt modules
import userTyping from '../../modules/insert-message';
// client methods
Meteor.methods({
  // insert message method for client
  'userTyping': function(message) {
    // verify that the message object is formated properly from client
    check(message, {destination: String, isDirect: Boolean, message: String});
    try {
      // add typing attributes on user in database
      isTyping(message);
    } catch (exception) {
      // send erorr to client
      throw new Meteor.Error('500', `${exception}`);
    }
  }
});
