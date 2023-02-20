import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl ="map.json"
  
  function MapChart() {
    return (
      <ComposableMap
        width={800}
  height={800}
  projection="geoAlbers"
  projectionConfig={{
    center: [0, 55.4],
    rotate: [4.4, 0, 0],
    parallels: [50, 60],
    scale: 4000,
  }}>
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
