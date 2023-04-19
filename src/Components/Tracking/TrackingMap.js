import { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io('https://prod.swiftbel.com');

function TrackingMap() {
  const [map, setMap] = useState(null);
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

      const origin = new window.google.maps.LatLng(37.7749, -122.4194);
      const destination = new window.google.maps.LatLng(37.8716, -122.2727);

      const request = {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      };
      directionsService.route(request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
          setDirections(result);

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
        }
      });
    }
  }, [map,setDirections]);

  return (
  <>
  <h1
  //onClick={()=>sendMessage()}
  >hey</h1>
  <div id="map" style={{ height: '100vh' }} />;
  </>
  )
}

export default TrackingMap;

