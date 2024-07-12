"use client";

import React, { useState } from "react";

function GetQuikrDomain() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: btoa(JSON.stringify(position.coords.latitude)),
            longitude: btoa(JSON.stringify(position.coords.longitude)),
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Spam alert, please try again after 7 days");
    }
  };

  return (
    <div className="dF fdC jcC" style={{ padding: "32px" }}>
      <button
        style={{
          border: "1px solid grey",
          padding: "12px",
          borderRadius: "4px",
          width: "190px",
          marginBottom: "24px",
        }}
        onClick={getLocation}
      >{`Get Quikr Domain`}</button>
      {location && (
        <div>
          <p>Domain Name: {location.latitude}</p>
          <p>Domain URL: {location.longitude}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default GetQuikrDomain;
