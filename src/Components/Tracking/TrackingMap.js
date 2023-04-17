import { useState, useEffect } from 'react';
import io from 'socket.io-client';
//const SOCKET_SERVER_URL = 'https://prod.swiftbel.com';


function TrackingMap() {
  const [map, setMap] = useState(null);
  const [
    //directions,
    setDirections] = useState(null);
 // const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   const newSocket = io(SOCKET_SERVER_URL,{
  //     cors: {
  //       origin: 'http://localhost:3000',
  //       methods: ['GET', 'POST'],
  //       allowedHeaders: ['my-custom-header'],
  //       credentials: true
  //     }
  //   });
  //   newSocket.on('connect', () => {
  //     console.log('Socket connected');
  //   });
  //   newSocket.on('error', (error) => {
  //     console.error('Socket error:', error);
  //   });
  //   newSocket.on('connect_error', (error) => {
  //     console.error('Socket connection error:', error);
  //   });
  //   setSocket(newSocket);
  //   return () => {
  //     newSocket.close();
  //   };
  // }, []);
  // console.log(socket,'locationn')

    useEffect(() => {
      const socket = io('https://prod.swiftbel.com');

      socket.on('connect', () => {
        console.log('Connected to Socket.io server');
      });

      socket.on('conversation', (data) => {
        console.log('Received conversation:', data);
      });

      return () => {
        socket.disconnect();
      };
    }, []);

    const handleClick = () => {
      const socket = io('https://prod.swiftbel.com');
      socket.emit('message', { text: 'Hello, server!' });
      socket.disconnect();
    };

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
  <h1 onClick={()=>handleClick()}>hey</h1>
  <div id="map" style={{ height: '100vh' }} />;
  </>
  )
}

export default TrackingMap;



// import { useState, useEffect } from 'react';

// function TrackingMap() {
//   const [map, setMap] = useState(null);
//   const [directions, setDirections] = useState(null);
//   const [driverMarker, setDriverMarker] = useState(null);

//   useEffect(() => {
//     const map = new window.google.maps.Map(document.getElementById('map'), {
//       center: { lat: 37.7749, lng: -122.4194 },
//       zoom: 8,
//     });

//     setMap(map);
//   }, []);

//   useEffect(() => {
//     if (map) {
//       const directionsService = new window.google.maps.DirectionsService();
//       const directionsRenderer = new window.google.maps.DirectionsRenderer({
//         map,
//       });

//       const destination = new window.google.maps.LatLng(37.8716, -122.2727);

//       // Get the user's current location
//       navigator.geolocation.getCurrentPosition((position) => {
//         const { latitude, longitude } = position.coords;
//         const origin = new window.google.maps.LatLng(latitude, longitude);

//         const request = {
//           origin,
//           destination,
//           travelMode: window.google.maps.TravelMode.DRIVING,
//         };
//         directionsService.route(request, (result, status) => {
//           if (status === window.google.maps.DirectionsStatus.OK) {
//             directionsRenderer.setDirections(result);
//             setDirections(result);

//             const driverMarker = new window.google.maps.Marker({
//               position: origin,
//               map,
//               icon: {
//                 url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//               },
//             });

//             setDriverMarker(driverMarker);

//             // Watch for changes in the driver's location
//             navigator.geolocation.watchPosition((position) => {
//               const { latitude, longitude } = position.coords;
//               const newLocation = new window.google.maps.LatLng(latitude, longitude);
//               driverMarker.setPosition(newLocation);
//             });
//           }
//         });
//       });
//     }
//   }, [map]);

//   return <div id="map" style={{ height: '100vh' }} />;
// }

// export default TrackingMap;
