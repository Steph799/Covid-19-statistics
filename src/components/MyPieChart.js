import React from 'react';
import { Pie } from 'react-chartjs-2';

function MyPieChart({ data }) {
 function isEmpty() {
   for (var key in data) {
     if (data.hasOwnProperty(key)) return false;
   }
   return true;
 }
  return (
    <div>
      {!isEmpty() ? (
        <Pie
          data={{
            labels: [
              'Deaths',
              'Actives',
              'Critical',
              'Recovered',
              'Total cases',
            ],
            datasets: [
              {
                data: [
                  data.deaths.total,
                  data.cases.active,
                  data.cases.critical,
                  data.cases.recovered,
                  data.cases.total,
                ],
                backgroundColor: [
                  'rgba(0,0,0, 0.8)', //black
                  'rgb(255,223,0, 0.8)', //yellow
                  'rgba(255, 8, 0, 0.8)', //red
                  'rgb(50, 205, 50)', //green
                  'rgb(0, 0, 255)', //blue
                ],
              },
            ],
          }}
          height={400}
          width={400}
          options={{
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontSize: 20,
              },
            },
          }}
        />
      ) : null}
    </div>
  );
}

export default MyPieChart;
