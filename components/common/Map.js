"use client"
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import {GoogleMap, useLoadScript} from "@react-google-maps/api";


function Map() {
    const libraries = useMemo(() => ['places'], []);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBDAit_21ZT1Wdu95dfDAYEnIqz8lwMa2o",
        libraries: libraries,
    });
    const mapCenter = useMemo(
        () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
        []
    );
    if (!isLoaded) {
        return <p>Loading...</p>;
    }
    return (
        <GoogleMap
            zoom={14}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            onLoad={() => console.log('Map Component Loaded...')}
        />
    );

}export default Map;