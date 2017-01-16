import recoverPassword from '../../modules/recover-password';


Template.recoverPassword.onRendered(() => {
  recoverPassword({
    form: '#recover-password',
    template: Template.instance()
  });
});

Template.recoverPassword.events({ // prevent default
  'submit form': (event) => event.preventDefault()
});
