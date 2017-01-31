let template;
// handle log in of user
let _handleLogin = () => {
  // get eamil and password from template's form
  let email = template.find('[name="emailAddress"]').value,
      password = template.find('[name="password"]').value;
  // log the user in with a password
  Meteor.loginWithPassword(email, password, (error) => {
    if (error) Bert.alert(error.reason, 'warning');
    else Bert.alert('Logged in!', 'success');
  });
};
// client side validation rules for login form
let validation = () => {
  return {
    // validation rules
    rules: {
      // email address validation
      emailAddress: {
        required: true,
        email: true
      },
      // password validation
      password: {
        required: true
      }
    },
    // messages to throw if specific validation case does not pass
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      },
      password: {
        required: 'Need a password here.'
      }
    },
    // handle submition of form
    submitHandler() { _handleLogin(); }
  };
};
// validate form with prebuilt function
let _validate = (form) => {
  $(form).validate(validation());
};

export default function(options) {
  template = options.template;
  _validate(options.form);
}
