import React, { Component } from 'react'
import NoteItem from './noteitems';
import firebaseData from './firebase';
class Accordions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getData = this.getData.bind(this);
  }

  componentWillMount (){
    var that = this;
    firebaseData.on('value', function(notes) {      
      var temp = [];
      notes.forEach(element => {
        const key = element.key;
        temp.push({
          key: key,
          title: element.val().title,
          content:  element.val().content
        })
      });
      that.setState({data: temp});
    });
  }
  
  getData = () => {
    if(this.state.data) {
      return this.state.data.map((el, key) => {
        return (
          <NoteItem key = {key} title={el.title} content={el.content} id={el.key}/>
        )
      })      
    }
  }
  render() {

    return (
        <div id="accordianId" role="tablist" aria-multiselectable="true">
         {this.getData()}
      </div>
    )
  }
}
export default Accordions;
