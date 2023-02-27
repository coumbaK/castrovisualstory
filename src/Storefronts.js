import React from "react";
import Store from "./Store";
import storedetails from "./stores.json";


//tbd media queries for responsiveness on mobile
class Storefronts extends React.Component {
 constructor(props){
        super(props);
        this.images = []
        this.text = []
        this.state= {activeStore: null} 
        this.GetDetails()
    }

  SetActiveStore = (id) => {
    this.setState({activeStore: id})
  }
  GetDetails(){
    for (let i = 0; i < 10; i++){
        console.log(i)
        this.images.push(require("./storeimages/house" + i + ".svg"))
        this.text.push(storedetails[i])
    }
    
  }
   
  render() {
    
    return (
     
        <div id="storefronts">
            <h2>Shuttered Businesses In The Castro</h2>
            <div id="storefronts-container">
                {this.images.map((image, index) => (
                    <Store key={index} id={index} image_url={image} details={this.text[index]} active={this.state.activeStore} setActive={this.SetActiveStore} />
                ))}
            

                
                 
                      
            </div>
            
            


        </div>
    );
  }
}

export default Storefronts;