import React, { useEffect, useState } from "react";

function Tempapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchapi = async () => {
      const url = ` https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=22a634ae4514c362480562b8a3417eb1`;
      const response = await fetch(url);
      // console.log(response)
      const resJson = await response.json();
      // console.log(resJson )
      setCity(resJson);
    };
  }, []);
  return (
    <>
      <div className="box">
        <div>
          <input type="search" onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      {!city? (
        <p>No Data Found</p>
      ) : (
        <div>
          <h2>{search}</h2>
          <h1>{city.main.temp}</h1>
          <h3>
            Min : 5.25<sup>o</sup>Cel | Max : 5.25<sup>o</sup>Cel 
          </h3>
        </div>
      )}
    </>
  );
}
export default Tempapp;
