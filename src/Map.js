import React from "react"
import geojson from './map.json';
import L from 'leaflet';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import { geoMercator, geoPath } from 'd3-geo';
import { select } from 'd3-selection';
import 'leaflet/dist/leaflet.css';
import { findAllByAltText } from "@testing-library/react";


//tbd:  add leaflet layer to show actual street map
// add search bar and display information

  
  class Mapchart extends React.Component {
    render() {
        const width = 500;
        const height = width * 0.5;
        const projection = geoMercator().fitExtent(
          [[0, 0], [width * 0.9, height * 0.9]],
          geojson
        );
        const path = geoPath().projection(projection);
      
        return (
          <div id="map">
         
          <svg width={width} height={height}>
            <g className="geojson-layer">
              {
                geojson.features.map(d => (
                  <path
                    key={d.properties.Name}
                    d={path(d)}
                    fill="#eee"
                    stroke="#0e1724"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                    onMouseEnter={(e) => {
                      select(e.target)
                        .attr('fill', '#000')
                        select('#selections')
                        .html(d.properties.name + '<br>' + 'this will show the history of the place and details about its ownership')
                    }}
                    onMouseOut={(e) => {
                      select(e.target)
                        .attr('fill', '#eee')
                        select('#selections')
                        .html("Did you know that? ")
                      
                    }}
                  />
                ))
              }
            </g>
          </svg>
          <div id="selections">
              <h2>Hover Over The Map To Learn About Your Favorite Places In The Castro</h2>
        
          </div>
          </div>
        )
      }}

      export default Mapchart;