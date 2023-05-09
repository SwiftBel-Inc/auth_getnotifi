import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import styled from 'styled-components';
import { getLocationDetails } from '../../store/Actions/Auth.action';
import { useDispatch, useSelector } from 'react-redux';
const socket = io('https://prod.swiftbel.com');

function TrackingMap() {
  const [map, setMap] = useState(null);
  const [destlat, setDestlat] = useState(null);
  const [destlng, setDestlng] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [placename2, setPlaceName2] = useState(null);

  let location=useLocation()
  console.log(location.pathname.split('/'))
  let coords=location.pathname.split('/')
  const [
    //directions,
    setDirections] = useState(null);
    useEffect(() => {
      //socket.emit('join_room','hello world')
      // socket.on("join_room", () => {
      //   socket.connect()
      //   console.log('connected');
      // });
      socket.on('join_room', (msg) => {
      console.log(msg, "msg")
      socket.close()
      socket.connect()
    })
      return () => {
        //socket.disconnect('join_room');
        socket.off('join_room');
      };
    }, []);
let refnumber = coords?.[4]
let dispatch=useDispatch()
    const init=async(refno)=>{
      await dispatch(getLocationDetails(refno))
          }
        let start1=  parseFloat(coords?.[2])
        let start2=  parseFloat(coords?.[3])

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat:start1, lng: start2},
      zoom: zoom,
    });
    setMap(map);
    init(refnumber)

  }, [refnumber,start1,start2]);
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
        map,
      });
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${Locationdetails}&key=AIzaSyDDVROE0bO7yMSpAB9ARPvZG0lrUOCWRMA`)
  .then(response => response.json())
  .then(data => {
    const location = data.results[0].geometry.location;
    setDestlat(location.lat.toString())
    setDestlng(location.lng.toString())
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
                directionsRenderer.setDirections(result);
                setDirections(result);
              }
            });

            const destinationMarker = new window.google.maps.Marker({
              position: destination,
              map: map,
            });
          }
          const origin = new window.google.maps.LatLng(coords?.[2], coords?.[3]);
          const originMarker = new window.google.maps.Marker({
            position: origin,
            map: map,
          });
        }
// const originMarker = new window.google.maps.Marker({
      //   position: origin,
      //   map,
      //   icon: {
      //     url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
      //   },
      // });

      // const destinationMarker = new window.google.maps.Marker({
      //   position: destination,
      //   map,
      //   icon: {
      //     url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', // Set the custom marker image
      //   },
      // });
  }, [map,setDirections,coords,destlat,destlng,Locationdetails]);

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
    </Details>
    <Details2></Details2>
    </Segment>
  <div id="map" style={{ height: '100vh' }} />;
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
padding:20px;
display:flex;
justify-content:space-between;
`