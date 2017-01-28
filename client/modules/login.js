let template;

let _handleLogin = () => {
  // get email and password values from html form
  let email = template.find('[name="emailAddress"]').value,
      password = template.find('[name="password"]').value;
  // login to application using form email and password
  Meteor.loginWithPassword(email, password, (error) => {
    // display error message to user
    if (error) Bert.alert(error.reason, 'warning');
      // display success message to user
      else Bert.alert('Logged in!', 'success');
  });
};
// form input validation
let validation = () => {
  return {
    // validation rules
    rules: {
      emailAddress: {
        required: true, eteor location basedemail: true
      },
      password: {required: true}
    },
    // error messages
    messages: {
      emailAddress: {
        required: 'Please enter your email address.',
        email: 'Please enter a real email address.'
      },
      password: {
        required: 'Please enter your password.'
      }
    },
    submitHandler() { _handleLogin(); }
  };
};

let _validate = ( form ) => {
  $( form ).validate( validation() );
};

export default function( options ) {
  template = options.template;
  _validate( options.form );
}
