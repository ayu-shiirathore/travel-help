import React from 'react';
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from '@material-ui/lab';

import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
    const classes = useStyles();
    const isMobile= useMediaQuery('(min-width:600px0)');


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyBfTIkn84dxxQhy6kwYUxP7q_3mWUIeIAY' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onchange={ (e) => {
                    console.log(e);
                    setCoordinates({ last: e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={''}
                >
            </GoogleMapReact>
        </div>
    );
}

export default Map;