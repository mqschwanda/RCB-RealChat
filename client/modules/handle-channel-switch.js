import setScroll from './set-scroll';

// allow user acces to view of messegas from the channel in database
let _establishSubscription = (template, isDirect, channel) => {
  // subscribe to channel publication
  template.subscribe('channel', isDirect, channel, () => {
    // scroll the messages container to the bottom
    setScroll('messages');
    // timeout for loading channel
    setTimeout(() => { template.loading.set(false); }, 300);
  });
};
// handle a change in channel or direct message
let _handleSwitch = (template) => {
  // get the channel name from the router
  let channel = FlowRouter.getParam('channel');
  if (channel) {
    // test to see if the channel is a chat room or direct message
    let isDirect = channel.includes('@');
    // set a template instance for channel or chatroom boolean
    template.isDirect.set(isDirect);
    // set a loading instance on template
    template.loading.set(true);
    // allow user acces to view of messegas from the channel in database
    _establishSubscription(template, isDirect, channel);
  }
};
// build template instances with reactive variable constructor
let _setupReactiveVariables = (template) => {
  // boolean for dirrect message or channel
  template.isDirect = new ReactiveVar();
  // boolean for if template is loading
  template.loading  = new ReactiveVar(true);
};

export default function(template) {
  // build template instances with reactive variable constructor
  _setupReactiveVariables(template);
  // listen for change to template
  Tracker.autorun(() => {_handleSwitch(template);});
}
