import { Template } from 'meteor/templating';
import './body.html';
 import './message.js';
Template.body.helpers({
  messages: [
    { text: 'Hello,' },
    { text: 'Nice to meet you!' },
    { text: '<3' },
  ],
});