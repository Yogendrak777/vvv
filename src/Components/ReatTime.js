import React, { useEffect, useState } from 'react'
import ReactApexChart from "react-apexcharts";

export default function ReatTime() {
  var data = []
  var data1 = []
  var Time = []
 
    if(window.location.pathname === '/QuarkU'){
      data = [80, 87, 80, 84, 72, 71, 83, 71, 76]
      data1 = [70, 60,70, 70, 76, 77, 80, 96, 97]
      Time = ['10:00:00', '10:00:03', '10:00:06', '10:00:09', '10:00:12', '10:00:15', '10:00:18', '10:00:21', '10:00:24']
    }
    else if(window.location.pathname === '/nxp500'){
      data = [72, 77, 86, 84, 72, 71, 73, 66, 61]
      data1 = [70, 71, 60, 63, 76, 77, 80, 96, 97]
      Time = ['10:00:00', '10:00:03', '10:00:06', '10:00:09', '10:00:12', '10:00:15', '10:00:18', '10:00:21', '10:00:24']
    }
    else if(window.location.pathname === '/Irrway'){
      data = [75, 77, 87, 84, 78, 79, 75, 69, 66]
      data1 = [72, 73, 62, 63, 74, 75, 83, 92, 95]
      Time = ['09:00:00', '09:00:03', '09:00:06', '09:00:09', '09:00:12', '09:00:15', '09:00:18', '09:00:21', '09:00:24']
    }
    else if(window.location.pathname === '/Moptro'){
      data = [65, 67, 67, 74, 68, 59, 65, 69, 66]
      data1 = [82, 83, 82, 99, 94, 85, 93, 82, 95]
      Time = ['10:00:00', '10:00:03', '10:00:06', '10:00:09', '10:00:12', '10:00:15', '10:00:18', '10:00:21', '10:00:24']
    }
    else if(window.location.pathname === '/nxp700'){
       data = [75, 72, 83, 84, 71, 76, 77, 62, 68]
       data1 = [79, 74, 69, 63, 72, 76, 88, 92, 90]
       Time = ['10:00:00', '10:00:03', '10:00:06', '10:00:09', '10:00:12', '10:00:15', '10:00:18', '10:00:21', '10:00:24']
    }
    const [random, setRandom] = useState(data)
    const [random1, setRandom1] = useState(data1)
    const [time, setTime] = useState(Time)
    
    useEffect(()=>{
        const interval = setInterval(() => {
          if(window.location.pathname === '/QuarkU'){
           const TimeSecond = date => date.toTimeString().slice(0, 8);
            const randomNum = Math.floor(Math.random() * (88 - 75)) + 70;
            const randomNum1 = Math.floor(Math.random() * (120 - 60)) + 60;
            data.push(randomNum)
            data1.push(randomNum1)
            data.shift()
            data1.shift()
            setRandom(data)
            setRandom1(data1)
            Time.push(String(TimeSecond(new Date())))
            Time.shift()
            setTime(Time)
            changeUI();
          }
        }, 3000);
        return () => {
          clearInterval(interval);
        };
    },[])

    const [state, setState] = useState({
        series: [{
            name: "Efficiency",
            data: data, 
        },
        {
          name: "Load",
          data: data1, 
      },
      ],
        options: {
          chart: {
            foreColor: "#fff",
            animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 50,
              animateGradually: {
                  enabled: true,
                  delay: 10
              },
              dynamicAnimation: {
                  enabled: true,
                  speed: 50
              }
          },
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
            
          },
          dataLabels: {
            enabled: true
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Motor Efficiency',
            align: 'left',
            style: {
              color:  '#ffffff'
            },
            
          },
          tooltip: {
            theme: "dark",
          },
          xaxis: {
            categories: Time,
            labels: {
            style: {
              colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
          },
        },
        },
        yaxis: {
          show: true,
          showAlways: true,
          labels: {
              show: true,
              style: {
                colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
                  
              },
          },
         
      },
      grid: {
        show: true,
        borderColor: "#40475D",
        
    },
  }
    })








    const changeUI=()=>{

    setState({  series: [{
        name: "Efficiency",
        data: random,
    },
    {
      name: "Load",
      data: random1,
  }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Motor Efficiency',
        align: 'left',
        style: {
          color:  '#ffffff'
        },
        
      },
     
      xaxis: {
        categories: time,
        labels: {
        style: {
          colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
      },
    },
      }
    },
    })
}

  return (
    <div id="chart" className='container my-4'>
    <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
    </div>

  )
}

  

   

  