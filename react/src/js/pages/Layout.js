import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      newData: 'Decoupled Drupal8'
   }
  }
  
  /**
   *  Received request from server add it to 
   *  react component so that it can be rendered
   *  @todo need to add title from server
   */
  componentDidMount(){
    /*
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
      */
  }
  
  /**
   *  Render request
   */
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    const title = this.state.newData;
    return (
      <div>
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>{title}</h1>
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
