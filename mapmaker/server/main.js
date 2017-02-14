import { Meteor } from 'meteor/meteor';
import { BrowserPolicy } from 'meteor/browser-policy-common';
import { HTTP } from 'meteor/http'

Meteor.startup(() => {
  BrowserPolicy.content.allowOriginForAll('*')
  // code to run on server at startup
});
