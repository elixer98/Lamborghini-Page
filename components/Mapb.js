import { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '90vh',
      latitude: 19.267105,
      longitude: -99.707958,
      zoom: 15
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZWxpeGVyOTgiLCJhIjoiY2ttZWJ6ampzMnRxejJ3cXJnbGtiaTQweCJ9.kmQQE9cGwurijrFqJ_V3eA"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      >
          <Marker latitude={19.267105} longitude={-99.707958} offsetLeft={-20} offsetTop={-10}>
        <div><img src="/logo.webp" width="100%"/></div>
      </Marker>
          </ReactMapGL>
    );
  }
}

export default Map;