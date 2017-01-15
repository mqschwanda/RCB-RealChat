// set up a authenticated route for channel use
const authenticatedRoutes = FlowRouter.group({name: 'authenticated'});
// send user to a dynamic channel route
authenticatedRoutes.route('/messages/:channel',{
  name: 'channel',
  action() {
    BlazeLayout.render('default',{yield: 'channel'});
  }
});
