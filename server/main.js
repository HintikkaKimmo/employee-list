// Only executes on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // Great place to generate data

  // Check ot see if data exists in collection
  // See if the collection has any records
  const numberRecords = Employees.find({}).count();
  if (!numberRecords) {
    // Generate some data...
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      })
    });
  }
  // Fat arrow function cannot be used in Meteor.publish
  // See http://stackoverflow.com/questions/33056884/es6-arrow-function-is-changing-the-scope-of-this-in-meteor-publish
  Meteor.publish('employees', function(per_page) {
    return Employees.find({}, { limit: per_page });
  });
});
