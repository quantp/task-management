import React, { Component } from 'react';
import Nav from './components/Nav';
import Accordions from './components/Accordions';
import Addform from './components/Addform';
import Editform from './components/EditForm';
import {connect} from 'react-redux';
class App extends Component {

  showEditForm = () => {
    if(this.props.isEdit) {
      return <Editform />
    }
    return;
  }
  showAddForm() {
    console.log(this.props.canAdd);
    if(this.props.canAdd) {
      return <Addform />
    }
    return;
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
                <Accordions />
            </div>
            <div className="cols-sm-4">
              {this.showEditForm()}
              {this.showAddForm()}
            </div>
          </div>
        </div>      
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
    canAdd: state.showAddForm
  }
}

export default connect(mapStateToProps)(App);
