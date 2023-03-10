import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon, popup } from "leaflet";
import stores from "./map.json";
import Search from "./Search";
import iconimg1 from "./iconrainbow.png";
import iconimg2 from "./icongray.png";




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
    const iconrainbow = icon({
      iconUrl: iconimg1,
      iconSize: [30, 30],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    const icongray = icon({
      iconUrl: iconimg2,
      iconSize: [30, 30],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    return (
      <div id="map">
      <div id= "mapin">
      
      <MapContainer center={[37.761, -122.435]} zoom={17} scrollWheelZoom={false}>
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
            icon= {iconrainbow}
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
            icon= {icongray}
            
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
             
              { <p>{this.state.activeStore.properties.description}</p> }
            </div>
          </Popup>
        )}







        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <Search updateActive={this.SetStore} stores= {stores.features} active={this.state.activeStore} />
      
      </div>
      <div class="instructions">The map above depicts businesses currently open in the Castro. Use the map above to explore which businesses in the area are queer-owned and/or small businesses.</div>
      </div>
      

    )



  }
}
export default LeafMap;