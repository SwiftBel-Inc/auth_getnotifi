import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import styled from 'styled-components';
import { getLocationDetails
  //, getTrackingDetails
} from '../../store/Actions/Auth.action';
import { useDispatch, useSelector } from 'react-redux';
import DetailsPopup from './DetailsPopup';
import mapStyles from './mapStyles';

const socket = io('https://prod.swiftbel.com');


function TrackingMap() {
  const [map, setMap] = useState(null);
  const [destlat, setDestlat] = useState(null);
  const [destlng, setDestlng] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [placename2, setPlaceName2] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [livelat, setlivelat] = useState(null);
  const [livelng, setlivelng] = useState(null);
    let location=useLocation()
  console.log(location.pathname.split('/'))
  let coords=location.pathname.split('/')
  const [
    //directions,
    setDirections] = useState(null);
    useEffect(() => {
      socket.connect()
      // socket.emit('join_room','hello worldddd')
      socket.on('join_room', (msg) => {
      console.log(msg, "msg")
      setlivelat(msg?.latitude)
      setlivelng(msg?.longitude)
      socket.close()
      socket.connect()
    })
     return () => {
        socket.off('join_room');
      };
    }, []);

let refnumber = coords?.[4]
let dispatch=useDispatch()
        let start1=  parseFloat(coords?.[2])
        let start2=  parseFloat(coords?.[3])

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat:start1, lng: start2},
      zoom: zoom,
      disableDefaultUI: true,
      //styles: mapStyles
    });
    setMap(map);
    dispatch(getLocationDetails(refnumber))
  }, [refnumber,start1,start2,zoom,dispatch]);
  const handleResize = () => {
    const width = window.innerWidth;
    let newZoom;
    if (width < 500) {
      newZoom = 8;
    } else if (width < 1000) {
      newZoom = 10;
    } else {
      newZoom = 12;
    }
    setZoom(newZoom);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const Locationdetails = useSelector(state => state?.auth?.locationdetails?.customerAddress)
  useEffect(() => {
    if (map) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer({
        suppressMarkers: true,
        map,
          polylineOptions: {
            strokeColor: "black"
          }
      });
      new window.google.maps.Marker({
        position: { lat: start1, lng: start2 },
        map: map,
        icon: {
          url: 'https://s3.amazonaws.com/swiftbel.com/home-address+(1).png',
          size: new window.google.maps.Size(32, 32),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(16, 32),
        },
      });
       new window.google.maps.Marker({
        position: { lat: destlat, lng: destlng },
        map: map,
        icon: {
          url: 'https://s3.amazonaws.com/swiftbel.com/tracking+(1).png',
          size: new window.google.maps.Size(32, 32),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(16, 32),
        },
      });
      //setMarkers([markerA, markerB]);
  console.log(start1,start2,destlat,destlng)
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${Locationdetails}&key=AIzaSyDDVROE0bO7yMSpAB9ARPvZG0lrUOCWRMA`)
  .then(response => response.json())
  .then(data => {
    const location = data.results[0].geometry.location;
    setDestlat(location.lat)
    setDestlng(location.lng)
  });
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords?.[2]},${coords?.[3]}&key=AIzaSyDDVROE0bO7yMSpAB9ARPvZG0lrUOCWRMA`)
          .then(response => response.json())
          .then(data => {
            if (data.status === 'OK') {
              setPlaceName2(data.results[0].formatted_address);
              console.log('placename2',data.results[0].formatted_address)
            } else {
              console.log('Geocode was not successful for the following reason:', data.status);
            }
          })
          if (destlat && destlng) {
            const origin = new window.google.maps.LatLng(coords?.[2], coords?.[3]);
            const destination = new window.google.maps.LatLng(destlat, destlng);
            const request = {
              origin,
              destination,
              travelMode: window.google.maps.TravelMode.DRIVING,
            };
            directionsService.route(request, (result, status) => {
              if (status === window.google.maps.DirectionsStatus.OK) {
                const distance = result.routes[0].legs[0].distance.text;
                const duration = result.routes[0].legs[0].duration.text;
                setDistance(distance)
                setDuration(duration)
                console.log("Distance: ", distance);
                console.log("Duration: ", duration);
                directionsRenderer.setDirections(result);
                setDirections(result);
              } else {
                console.error("Directions request failed due to " + status);
              }
            });
          }

        }

  }, [map,setDirections,coords,destlat,destlng,Locationdetails,start1,start2]);

  return (
  <>
  {/* <h1
  //onClick={()=>sendMessage()}
  >hey</h1> */}
    <Segment>
     <Details2></Details2>
    <Details>
    <Destination><span className='left'>Starting point: </span> {placename2}</Destination>
    <Destination><span className='left'>Destination:</span> {Locationdetails?Locationdetails:'N/A'}</Destination>
    <Destination><span className='left'>Distance: </span> {distance}</Destination>
    <Destination><span className='left'>Duration: </span> {duration}</Destination>
    </Details>
    <Details2></Details2>
    </Segment>
  <div id="map" style={{ height: '100vh' }} />
  {window.innerWidth<800?
    <DetailsPopup startingpoint={placename2} destination={Locationdetails?Locationdetails:'N/A'} distance={distance} duration={duration}/>
    :''}
  </>
  )
}

export default TrackingMap;

const Details=styled.div`
width:500px;
text-align:start;
@media (min-width: 260px) and (max-width: 821px){
  width:100%;
  }
`
const Details2=styled.div`
width:500px;
text-align:start;
@media (min-width: 260px) and (max-width: 821px){
  display:none;
  }
`
const Destination=styled.p`
text-align:start;
.left{
color:darkblue;
font-weight:800;
}
`
const Segment=styled.div`
padding-left:20px;
padding-right:20px;
padding-top:5px;
padding-bottom:5px;
display:flex;
justify-content:space-between;
@media (min-width: 260px) and (max-width: 820px){
display:none;
}
`
// const BlackAndWhiteMap = styled.div`
// #map {
//   filter: grayscale(100%) brightness(100%);
//   .mapboxgl-marker {
//     color: blue;
//   }
// }
// `;

