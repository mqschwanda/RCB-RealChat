let template;
// handle password reset for user
let _handleReset = () => {
  // get router token and new password from template's form
  let token = FlowRouter.getParam('token'),
      password = template.find('[name="newPassword"]').value;
  // reset password with token and new password
  Accounts.resetPassword(token, password, (error) => {
    if (error) Bert.alert(error.reason, 'danger');
    else Bert.alert('Password reset!', 'success');
  });
};
// client side validation rules for login form
let validation = () => {
  return {
    // validation rules
    rules: {
      // new password validation
      newPassword: {
        required: true,
        minlength: 6
      },
      // new password repeated validation
      repeatNewPassword: {
        required: true,
        minlength: 6,
        equalTo: '[name="newPassword"]'
      }
    },
    // messages to throw if specific validation case does not pass
    messages: {
      newPassword: {
        required: 'Enter a new password, please.',
        minlength: 'Use at least six characters, please.'
      },
      repeatNewPassword: {
        required: 'Repeat your new password, please.',
        equalTo: 'Hmm, your passwords don\'t match. Try again?'
      }
    },
    // handle submition of form
    submitHandler() { _handleReset(); }
  };
};
// validate form with prebuilt function
let _validate = (form) => {
  $(form).validate(validation());
};

export default function (options) {
  template = options.template;
  _validate(options.form);
}
