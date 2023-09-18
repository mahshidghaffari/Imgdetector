// AIzaSyC6G15dW7vlmyaPn0d7sV4BSknMKA6zaRU
import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Room } from '@material-ui/icons'



const LocationPin = ({ text }) => (
    <div className="pin">
        <Room className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)

const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB3leBO5SmyJ8W6g0JjAXkwGy_zKWV9RdY' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)

export default Map