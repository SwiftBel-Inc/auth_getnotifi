import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import styled from 'styled-components';
const socket = io('https://prod.swiftbel.com');

function TrackingMap() {
  const [map, setMap] = useState(null);
  const [destlat, setDestlat] = useState(null);
  const [destlng, setDestlng] = useState(null);
  const [placename, setPlaceName] = useState(null);
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

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 100,
    });

    setMap(map);
  }, []);

  useEffect(() => {
    if (map) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer({
        map,
      });
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setDestlat(position.coords.latitude)
            setDestlng(position.coords.longitude)
            console.log("Latitude:", position.coords.latitude);
            console.log("Longitude:", position.coords.longitude);
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyDDVROE0bO7yMSpAB9ARPvZG0lrUOCWRMA`)
          .then(response => response.json())
          .then(data => {
            if (data.status === 'OK') {
              setPlaceName(data.results[0].formatted_address);
              console.log('placename',data.results[0].formatted_address)
            } else {
              console.log('Geocode was not successful for the following reason:', data.status);
            }
          })
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
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not available");
      }
      const origin = new window.google.maps.LatLng(coords?.[2], coords?.[3]);
      const destination = new window.google.maps.LatLng(destlat, destlng);

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
    }
  }, [map,setDirections,coords]);

  return (
  <>
  {/* <h1
  //onClick={()=>sendMessage()}
  >hey</h1> */}

    <Details>
    <Destination><span className='left'>Starting point: </span> {placename}</Destination>
    </Details>
    <Details>
    <Destination><span className='left'>Destination:  </span> {placename2}</Destination>
    </Details>
  <div id="map" style={{ height: '100vh' }} />;
  </>
  )
}

export default TrackingMap;

const Details=styled.div`
display:flex;
justify-content:center;
`
const Destination=styled.p`
text-align:start;
.left{
color:darkblue;
font-weight:800;
}
`