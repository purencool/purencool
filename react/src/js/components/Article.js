import React from "react";

/**
 *  The article component is a template to display 
 *  widgets of information
 * 
 *  @todo This will be renamed in the future to a 
 *  more generic name
 */
export default class Article extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div class="col-md-4">
        <h4>{title}</h4>
      </div>
    );
  }
}
