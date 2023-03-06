import React from "react";
import sign from "./sign.png";
class Store extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {visibledetails: false};
       
    }
  

  onClick = (e) => {
    console.log(this.props.details)
    this.props.setActive(this.props.id);
    this.setState({visibledetails: !this.state.visibledetails})

  }



  render() {
    return (
        <div class="store"  >
            <img class="store" src={this.props.image_url} alt="storefront" onClick={this.onClick} />
            {this.state.visibledetails && this.props.id===this.props.active ? <div class="store-details">
            <img src={sign} alt="sign" />
            <p>{this.props.details}</p>
            </div> : null}
       </div>

    );
  }
}

export default Store;