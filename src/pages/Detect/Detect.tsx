import MapSection from "../../components/Map/Map"

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

export default function Detect(){
    return(
        <div>
            Detect page
            <MapSection location={location} zoomLevel={17} />
        </div>
    )
}