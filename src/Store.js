import React from "react";
class Store extends React.Component {

    constructor(props){
        super(props);
        this.state = {visibledetails: false};
        this.toggleDetails = this.toggleDetails.bind(this);
    }
    toggleDetails()  {
        
        this.setState({visibledetails: !this.state.visibledetails});
        
        console.log("clicked")
    }

    

  render() {
    return (
        <div class="store">
            <img src={this.props.image_url} alt="storefront" onClick={this.toggleDetails} />
            {this.state.visibledetails ? <div class="store-details">{this.props.details}</div> : null}
       </div>

    );
  }
}

export default Store;