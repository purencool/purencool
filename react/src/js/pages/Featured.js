import React from "react";

import Article from "../components/Article";
import Helpers from "../utils/helpers";

export default class Featured extends React.Component {
  
  
  /**
   *  Received request from server
   */
  componentDidMount(){
    Helpers.serverData()
      .then(function(data){
      }.bind(this));
  }
  
  
  /**
   *  Render request
   */
  render() {
    this.componentDidMount();
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
        <div class="row">{Articles}</div>
    );
  }
}
