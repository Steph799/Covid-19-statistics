import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import { getCountries } from './share/coronaService';
import World from './components/World';
import Country from './components/Country';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [toggleStatistic, setToggleStatistic] = useState(false);
  const history = useHistory();
  const toggleContent = toggleStatistic ? 'Check counts in a specific country' : ' Check Total counts in the world';

  const ToggleContent = () => {
    setToggleStatistic(!toggleStatistic);
    const url = toggleStatistic ? 'country' : 'world';
    history.push(`/${url}`);
  };

  useEffect(() => {
    async function fetchCountries(){
      const countries = await getCountries('countries');
      setCountries(countries);
    }
    fetchCountries()
  }, []);

  return (
    <div className="App">
      <h1 style={{ marginTop: 0 }}>Covid-19, live statistics</h1>

      <Button variant="contained" color="primary" onClick={ToggleContent}>
        {toggleContent}
      </Button>
      
      <Switch>
        <Route
          path="/country"
          render={() => <Country countries={countries} />}
        />
        <Route path="/world" component={World} />
        <Route path="/">
          <Redirect to="/country" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
//comment in feature1
//comment in master