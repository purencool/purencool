import React from "react";

/**
 *  This component is a template to display 
 *  widgets in video format
 */
export default class ContentVideo extends React.Component {
  render() {
    const { video } = this.props;
    return (
      <div class="col-md-6">
        <iframe width="100%"   src="{video}"  allow="autoplay; encrypted-media" >
         </iframe>
      </div>
    );
  }
}
