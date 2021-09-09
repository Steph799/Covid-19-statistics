import React, { useState, useEffect } from 'react';
import MyDonutChart from './MyDonutChart';
import { getTotalNumber } from '../share/coronaService';
function World() {
  const [worldData, setWorldData] = useState(0);

  useEffect(async () => {
    const Total = await getTotalNumber();
    setWorldData(Total);
  }, []);

  useEffect(() => {
    
    return () => {
        console.log('unmount world');
    }
  }, [])

  return (
    <div>
      <h2>Total counts in the world</h2>
      <MyDonutChart data={worldData} />
      <h3>
        Note: The definition of "Active" can be misleading according to the
        severity of the disease.
        <br /> In other sources, the number can be different
      </h3>
    </div>
  );
}

export default World;
