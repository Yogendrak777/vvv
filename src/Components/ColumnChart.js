import React,{useState} from 'react'
import ReactApexChart from "react-apexcharts";

export default function ColumnChart() {
  var data = []
  var data1 = []
 
  if(window.location.pathname === '/QuarkU'){
    data = [70, 67, 70, 74, 71, 78, 73, 70, 76]
    data1 = [80, 87, 80, 84, 72, 71, 83, 71, 76]
   
  }
  else if(window.location.pathname === '/nxp500'){
    data = [40, 44, 45, 45, 42, 41, 43, 41, 46]
    data1 = [70, 77, 70, 74, 72, 71, 73, 71, 76]
  
  }
  else if(window.location.pathname === '/Irrway'){
    data = [50, 61, 55, 54, 52, 51, 53, 51, 56]
    data1 = [77, 77, 70, 74, 72, 71, 73, 71, 76]
   
  }
  else if(window.location.pathname === '/Moptro'){
    data = [60, 61, 65, 61, 62, 61, 63, 61, 66]
    data1 = [80, 87, 80, 84, 72, 71, 83, 71, 76]
    
  }
  else if(window.location.pathname === '/nxp700'){
     data = [40, 41, 45, 41, 42, 41, 43, 41, 46]
     data1 = [80, 87, 80, 84, 72, 71, 83, 71, 76]
    
  }

    const [state, setState] = useState({
        series: [{
            name: 'Temperature',
            data: [30, 35, 37, 36, 31, 38, 33, 30, 36]
          }, {
            name: 'Range',
            data: data
          }, {
            name: 'Efficiency',
            data: data1
          }],
          options: {
            chart: {
              foreColor: "#fff",
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            title: {
              text: 'Day Performance',
              align: 'left',
              style: {
                color:  '#ffffff'
              },
              
            },
            tooltip: {
              theme: "dark",
            },
            xaxis: {
              categories: ['14 may', '15 may', '16 may', '17 may', '18 may', '19 may', '20 may', '21 may', '22 may'],
            },
            grid: {
              show: true,
              borderColor: "#40475D",
          },
            
            fill: {
              opacity: 1
            },
            
          },
    })
  return (
    <div id="chart" className='container my-4'>
    <ReactApexChart options={state.options} series={state.series} type="bar" height={350} width={600}/>
    </div>
  )
}

