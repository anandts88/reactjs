import React from 'react';

const {
  Component
} = React;

/*
App react component.

To create React Component your class needs to extend `React.Component`.

class <class-name> extends React.Component {

}
*/
class App extends Component {

  /*
  Render function needs to return HTML template corresponding to this component.

  The below method returns a div with 'Hello World'.

  Keep in mind

  1. All html elements needs to be lower cased.
  2. React component needs to start in Upper case.
  3. If you want to add a class to an html element then use `className` <div className="my-class">
  4. If you want to add `for` attribute for an label or anyother tab tag then use `htmlFor` <label htmlFor="my-id">My Label</lable>
  */
   render() {
      return (
         <div>
            Hello World!!!
         </div>
      );
   }
}

export default App;
