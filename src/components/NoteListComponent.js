import React, { Component } from 'react'
import NoteItem from '../containers/NoteItemContainer';
import firebase from '../api/firebase'
class Notelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount = () => {
    var that = this;
    firebase.on('value', function(notes) {      
      let noteListData = [];
      notes.forEach(element => {
        const key = element.key;
        noteListData.push({
          key: key,
          title: element.val().title,
          content:  element.val().content
        })
      });
      that.setState({data: noteListData})
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
export default Notelist;
