import React from "react";
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
            <img src={this.props.image_url} alt="storefront" onClick={this.onClick} />
            {this.state.visibledetails && this.props.id===this.props.active ? <div class="store-details">{this.props.details}</div> : null}
       </div>

    );
  }
}

export default Store;