import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl ="https://raw.githubusercontent.com/coumbaK/castrovisualstory/master/src/map.geojson?token=GHSAT0AAAAAAB54OFY34SJZDCGNABIFBPQ2Y7TBSOA"
  
  function MapChart() {
    return (
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />

            ))
          }
        </Geographies>
      </ComposableMap>
    )
  }
export default MapChart;
