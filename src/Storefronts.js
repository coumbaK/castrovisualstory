import React from "react";
import Store from "./Store";
class Storefronts extends React.Component {
 constructor(props){
        super(props);
        this.images = ["https://o.remove.bg/downloads/9f65b234-f323-4e53-807c-70680ccdb13e/Screen_Shot_2023-02-18_at_6.57.54_PM-removebg-preview.png","https://o.remove.bg/downloads/6455ecb8-5625-4a8f-811b-96bdc062f5c4/Screen_Shot_2023-02-18_at_6.57.42_PM-removebg-preview.png", "https://o.remove.bg/downloads/a7793821-7435-438a-8a8d-4e579f939f32/Screen_Shot_2023-02-18_at_6.57.37_PM-removebg-preview.png"]
        this.text = ["Opened in 2003, Closed Down March 2022 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Vitae congue mauris rhoncus aenean vel elit.", "Opened in 2003, Closed Down March 2022 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Vitae congue mauris rhoncus aenean vel elit.", "Opened in 2003, Closed Down March 2022 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Vitae congue mauris rhoncus aenean vel elit.",
        "Opened in 2003, Closed Down March 2022 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Vitae congue mauris rhoncus aenean vel elit.",
    ]
    }
  render() {
    return (
        <div id="storefronts">
            <h2>Shuttered Businesses In The Castro</h2>
            <div id="storefronts-container">
                <Store image_url={this.images[0]} details= {this.text[0]}/>
                <Store image_url={this.images[1]} details= {this.text[1]}/>
                <Store image_url={this.images[2]} details= {this.text[2]}/>
                <Store image_url={this.images[0]} details= {this.text[0]}/>
                <Store image_url={this.images[1]} details= {this.text[1]}/>
                <Store image_url={this.images[2]} details= {this.text[2]}/>
                <Store image_url={this.images[0]} details= {this.text[0]}/>
                <Store image_url={this.images[1]} details= {this.text[1]}/>
                <Store image_url={this.images[2]} details= {this.text[2]}/>

                
                
            </div>
            
            


        </div>
    );
  }
}

export default Storefronts;