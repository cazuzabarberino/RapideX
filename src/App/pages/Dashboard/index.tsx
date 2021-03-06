import React, { useState } from "react";
import { Container } from "./styles";

import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  StandaloneSearchBox,
} from "@react-google-maps/api";

import { getCoordFromAddress } from "../../../services/geocode";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const origin = { lat: 40.756795, lng: -73.954298 };
const destination = { lat: 41.756795, lng: -78.954298 };
const travelMode = "DRIVING";

function DashBoard() {
  const [destinationResponse, setDestinationResponse] = useState(undefined);
  const [address, setAddress] = useState("");

  const directionsCallback = (response: any) => {
    console.log(response);

    if (response !== null) {
      if (response.status === "OK") {
        setDestinationResponse(response);
      } else {
        console.log("response: ", response);
      }
    }
  };

  // console.log(process.env);

  return (
    // <Container>
    //   <input
    //     value={address}
    //     onChange={(event) => {
    //       setAddress(event.target.value);
    //     }}
    //   />
    //   <button
    //     onClick={() => {
    //       getCoordFromAddress(address).then((res) => {
    //         console.log(res);
    //       });
    //     }}
    //   >
    //     Check
    //   </button>
    // </Container>
    // <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_KEY as string}>
    //   <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
    //     <DirectionsService
    //       options={{
    //         destination: destination,
    //         origin: origin,
    //         travelMode: travelMode,
    //       }}
    //       callback={directionsCallback}
    //     />

    //     {destinationResponse && (
    //       <DirectionsRenderer
    //         options={{
    //           directions: destinationResponse,
    //         }}
    //       />
    //     )}
    //   </GoogleMap>
    // </LoadScript>
  );
}

export default React.memo(DashBoard);
