import React from "react";

import ApiCalls from "../utils/ApiCalls";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      newData: null
   }
  }
  
  /**
   *  Received request from server this is going to 
   *  display the content from the home page
   *  @todo build custom page request 
   */
  componentDidMount(){
    /*
    ApiCalls.articleData()
      .then(function(data){
        const newData = data.map(c => {
          return  c.attributes.title;
        })
        const addElement = newData.map((title, i) => <Article key={i} title={title}/> );
        const newState = Object.assign({}, this.state, {
           newData: addElement
        });

     
        this.setState(newState);
      }.bind(this));
      */
  }
  
  /**
   *  Render request
   */
  render() {
    //const  = this.state.newData
    return (
        <div class="row">Testing</div>
    );
  }
}
