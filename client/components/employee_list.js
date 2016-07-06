import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

const EmployeesList = () => {
  return (
    <div>
      <div className="employee-list">
        Employee List
      </div>
    </div>
  );
};

export default createContainer(() => {
  // setup suscription
  Meteor.subscribe('employees');

  // return an object. What ever we reaturn will be sent to EmployeesList
  // as props
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
