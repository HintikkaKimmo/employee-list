import React from 'react';
import ReactDOM from 'react-dom';

import EmployeesList from './components/employee_list'

const App = () => {
  return (
    <div>
      <EmployeesList />
    </div>
  );
};

// After meteor loads from the browser, render my app to the DOM.
Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.querySelector('.container'));
});
