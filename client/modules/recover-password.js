let template;
// handle password recovery for user
let _handleRecovery = () => {
  // get email from template's form
  let email = template.find('[name="emailAddress"]').value;
  // email acount recovery protocol
  Accounts.forgotPassword({email: email}, (error) => {
    if (error) Bert.alert(error.reason, 'warning');
    else Bert.alert('Check your inbox for a reset link!', 'success');
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
      }
    },
    // messages to throw if specific validation case does not pass
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      }
    },
    // handle submition of form
    submitHandler() { _handleRecovery(); }
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
