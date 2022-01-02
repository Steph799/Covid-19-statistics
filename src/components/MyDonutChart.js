import React from 'react'
import { Doughnut } from 'react-chartjs-2';

function MyDonutChart({data}) {
    return (
      <div>
        <Doughnut
          data={{
            labels: ['Deaths', 'Actives', 'Recovered', 'Total cases'],
            datasets: [
              {
                data: [
                  data.deaths,
                  data.active,
                  data.recovered,
                  data.confirmed,
                ],
                backgroundColor: [
                  'rgba(0,0,0, 0.8)', //black
                  'rgb(255,223,0, 0.8)', //yellow
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
      </div>
    );
}

export default MyDonutChart
