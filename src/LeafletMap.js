import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon, popup } from "leaflet";
import stores from "./businesses.json";
import Search from "./Search";




class LeafMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeStore: null};
    this.SetStore = this.SetStore.bind(this);



  }
  SetStore = (e) => {
    const name = e.target.innerText;
    const store = stores.features.find(store => store.properties.business === name);
    this.setState({ activeStore: store });
    
  }
  render() {


    return (
      
      <div id= "map">
     
      <MapContainer center={[37.7617, -122.4351]} zoom={17} scrollWheelZoom={false}>
        {stores.features.map(store => (
          store.properties.queer=== "true" ? 
          <Marker
            key={store.properties.key}
            position={[store.geometry.coordinates[1], store.geometry.coordinates[0]]}
            eventHandlers={{
              click: (e) => {
                this.setState({ activeStore: store });
              }
            }} 
            icon={icon({
              iconUrl: "https://o.remove.bg/downloads/9e73be4c-1d9f-4d29-b673-f6fcfcc6e96e/Screen_Shot_2023-02-26_at_10.20.04_PM-removebg-preview.png",
              iconSize: [30, 30]
            })}
          >

          </Marker>
          : 
          <Marker
            key={store.properties.key}
            position={[store.geometry.coordinates[1], store.geometry.coordinates[0]]}
            eventHandlers={{
              click: (e) => {
                this.setState({ activeStore: store });
              }
            }} 
            icon={icon({
              iconUrl: "https://o.remove.bg/downloads/9f982cd8-f2e9-4298-a545-e4b3be2c6e27/dooooo-removebg-preview.png",
              iconSize: [30, 30]
            })}
            
          >

          </Marker>

        ))}
        {this.state.activeStore && (
          <Popup
            position={[
              this.state.activeStore.geometry.coordinates[1],
              this.state.activeStore.geometry.coordinates[0]
            ]}
            onClose={() => {
              this.setState({ activeStore: null });
            }}
          >
            <div>
              <h2>{this.state.activeStore.properties.business}</h2>
              <p>lorem ipsum </p>
            </div>
          </Popup>
        )}







        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <Search updateActive={this.SetStore} stores= {stores.features} />
      
      </div>
    )



  }
}
export default LeafMap;