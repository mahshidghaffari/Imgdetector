import {Person} from "@material-ui/icons"

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

export default function Contact(){
    return(
        <div>
            This is contact Page <Person/>
        </div>
    )
}