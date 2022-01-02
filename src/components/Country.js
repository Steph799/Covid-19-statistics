import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getCountries } from '../share/coronaService';
import MyPieChart from './MyPieChart';

function Country({ countries }) {
  const [country, setCountry] = useState(null);
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    let unmounted=false

    async function fetchMyApi(){
      if (country) {
        const statistics = await getCountries('statistics');
        const chosenCountry = statistics.find((element) => element.country === country);
        setCountryData(chosenCountry);
      }
    }
    if (!unmounted) fetchMyApi();
  
    return () => {unmounted=true};
  }, [country]);


  return (
    <div>
      <h2>Total counts in a specific country</h2>
      <Autocomplete
        id="combo-box-demo"
        autoComplete={true}
        options={countries}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select a country" variant="outlined" />
        )}
        onChange={(event, newInputValue) => setCountry(newInputValue)}
      />
      {country ? (
        <div>
          <h2 style={{ margin: 0 }}>Data about {country}</h2>
          <MyPieChart data={countryData} />
        </div>
      ) : null}
    </div>
  );
}

export default Country;
