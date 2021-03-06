import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import useStyles from "./styles";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  weatherData,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  function handleChange(e) {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  }

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={handleChange}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place) => (
          <div
            className={classes.markerContainer}
            lat={place.latitude}
            lng={place.longitude}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img
              height="100px"
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="Weather icon"
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
