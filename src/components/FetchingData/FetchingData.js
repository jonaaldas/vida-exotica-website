import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { useMemo } from 'react'
import '../FetchingData/FetchingData.css'
import MapStyles from '../FetchingData/MapStyles'
function FetichData() {
  const center = useMemo(() => ({ lat: -1.3995849, lng: -78.422409 }), [])
  const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true
  }
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDKq0fQYYhfde8qZxBs-8OnmdQaW-vYDzA",
  })
  const onLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }
  if (!isLoaded) return <p>Loading...</p>

  return (
    <GoogleMap
      zoom={15.5}
      center={{ lat: -1.3995849, lng: -78.422409 }} mapContainerClassName='map-container'
      options={options}

    >
      <Marker
        position={center}
        icon={{
          url: 'https://i.imgur.com/Ld3BYi0.png',
          scaledSize: new window.google.maps.Size(60,60)
        }}
      />
 
    </GoogleMap>
  );
}

export default FetichData;
