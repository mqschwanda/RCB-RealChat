let template;
// build userobject from form template
let _handleSignup = () => {
  // user object
  let user = {
    username: template.find('[name="username"]').value,
    email: template.find('[name="emailAddress"]').value,
    password: template.find('[name="password"]').value,
    profile: {
      name: {
        first: template.find('[name="firstName"]').value,
        last: template.find('[name="lastName"]').value
      }
    }
  };
  // create an account record in the database with user object
  Accounts.createUser(user,(error) => {
    if (error) {
      Bert.alert(error.reason,'danger');
    } else {
      Bert.alert('Welcome!','success');
    }
  });
};
// validation rules function
let validation = () => {
  return {
    // rule for each input
    rules: {
      firstName: {
        required: true
      },
      lastName: {
        required: true
      },
      username: {
        required: true,
        minlength: 6,
        maxlength: 20
      },
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    // error messages for each input validation type
    messages: {
      firstName: {
        required: 'Please enter a first name.'
      },
      lastName: {
        required: 'Please enter a last name.'
      },
      username: {
        required: 'Please enter a username.'
      },
      emailAddress: {
        required: 'Please enter an email address.',
        email: 'Please enter a valid email address.'
      },
      password: {
        required: 'Please enter a password here.',
        minlength: 'Password must be at least six characters.'
      }
    },
    // because we're using a Bootstrap Input Group to add the @ symbol onto our field, we need to consider error placement.
    errorPlacement(error,element) {
      // check to see that the field getting an error attached to it is the username field.
      if (element.attr('name') === 'username') {
        // use the jQuery Validation API to move the error to be beneath the input group to prevent any weird layout quirks.
        error.insertAfter('.input-group.username');
      }
    },
    submitHandler() { _handleSignup(); }
  };
};
// apply the validations function to the form object
let _validate = (form) => {
  $(form).validate(validation());
};
// build an export that uses the above functions to manipulate a parameter
export default function(options) {
  template = options.template;
  _validate(options.form);
}
