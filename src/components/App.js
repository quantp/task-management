import React, { Component } from 'react';
import Addform from '../containers/AddFormContainer'
import Editform from '../containers/EditFormContainer'
import Nav from '../containers/NavContainer'
import Notelist from './NoteListComponent'
class App extends Component {
  showAddForm() {
    if(this.props.showAddForm) {
      return <Addform />
    }
    return
  }
  showEditForm() {
    if(this.props.showEditForm) {
      return <Editform />
    }
    return
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
                <Notelist />
            </div>
            <div className="col-sm-4">
              {this.showAddForm()}
              {this.showEditForm()}
            </div>
          </div>
        </div>      
      </div>
    );
  }
}

export default App;
