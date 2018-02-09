import React from "react";

import ContentTiles from "../components/widgets/ContentTiles";
import ApiCalls from "../utils/ApiCalls";

export default class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      newData: null
   }
  }
  
  /**
   *  Received request from server
   */
  componentDidMount(){
    ApiCalls.articleData()
      .then(function(data){
        const newData = data.map(c => {
          return  c.attributes.title;
        })
        const addElement = newData.map((title, i) => <ContentTiles key={i} title={title}/> );
        const newState = Object.assign({}, this.state, {
           newData: addElement
        });

     
        this.setState(newState);
      }.bind(this));
  }
  
  /**
   *  Render request
   */
  render() {
    const contentTiles = this.state.newData
    return (
        <div class="row">{contentTiles}</div>
    );
  }
}