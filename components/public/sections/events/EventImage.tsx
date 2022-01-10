import React from 'react'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

interface Image {
  src: string;
  alt: string;
}

function EventImage({
  images
}: {
  images: Array<Image>;
}) {

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ))

  return (
    <Wrapper>
      <Grid>
        <ImageWrapper>
          <MainImage
            src={images[0].src}
            alt={images[0].alt}
            layout="fill"
          />
        </ImageWrapper>
        <MapWrapper>
          <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `436px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </MapWrapper>
      </Grid>
    </Wrapper>
  )
}

export default EventImage

const Wrapper = tw.div`
  mt-6 max-w-2xl mx-auto sm:px-6 lg:px-8 lg:max-w-7xl
`

const Grid = tw.div`
  grid lg:grid-cols-2
`

const ImageWrapper = tw.div`
  relative h-436 lg:rounded-l-md lg:rounded-r-none rounded-md overflow-hidden lg:mr-0.5 mb-1
`

const MainImage = tw(Image)`
  w-full h-full object-center object-cover
`

const MapWrapper = tw.div`
  lg:rounded-r-md lg:rounded-l-none rounded-md overflow-hidden lg:ml-0.5 mb-1
`
