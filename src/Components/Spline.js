import React,{useState, useEffect} from 'react'
import ReactApexChart from "react-apexcharts";

export default function Spline() {
  var data = []
  var data1 = []
  var Time = []
 
    if(window.location.pathname === '/QuarkU'){
      data = [70, 75, 66, 74, 72, 71, 73, 71, 66]
      data1 = [38, 38,39, 30, 37, 37, 36, 36, 40]
      Time = ['10:00:00', '10:00:03', '10:00:06', '10:00:09', '10:00:12', '10:00:15', '10:00:18', '10:00:21', '10:00:24']
    }
    else if(window.location.pathname === '/nxp500'){
      data = [40, 45, 46, 44, 42, 41, 53, 51, 36]
      data1 = [38, 38,39, 30, 37, 37, 36, 36, 40]
      Time = ['10:00:00', '10:00:03', '10:00:06', '10:00:09', '10:00:12', '10:00:15', '10:00:18', '10:00:21', '10:00:24']
    }
    else if(window.location.pathname === '/Irrway'){
      data = [50, 55, 46, 44, 52, 41, 53, 41, 56]
      data1 = [35, 35,36, 36, 34, 36, 36, 36, 34]
      Time = ['10:00:00', '10:00:03', '10:00:06', '10:00:09', '10:00:12', '10:00:15', '10:00:18', '10:00:21', '10:00:24']
    }
    else if(window.location.pathname === '/Moptro'){
      data = [60, 65, 56, 64, 52, 51, 53, 51, 56]
      data1 = [33, 33,34, 34, 35, 34, 32, 36, 34]
      Time = ['10:00:00', '10:00:03', '10:00:06', '10:00:09', '10:00:12', '10:00:15', '10:00:18', '10:00:21', '10:00:24']
    }
    else if(window.location.pathname === '/nxp700'){
       data = [40, 45, 46, 44, 42, 41, 43, 41, 46]
       data1 = [35, 35,38, 35, 35, 36, 38, 36, 34]
       Time = ['10:00:00', '10:00:03', '10:00:06', '10:00:09', '10:00:12', '10:00:15', '10:00:18', '10:00:21', '10:00:24']
    }
    const [random, setRandom] = useState(data)
    const [random1, setRandom1] = useState(data1)
    const [time, setTime] = useState(Time)
    
    useEffect(()=>{
        const interval = setInterval(() => {
          if(window.location.pathname === '/QuarkU'){
           const TimeSecond = date => date.toTimeString().slice(0, 8);
            const randomNum = Math.floor(Math.random() * (75 - 65)) + 65;
            const randomNum1 = Math.floor(Math.random() * (38 - 35)) + 35;
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
            name: "Range",
            data: data, 
        },
        {
          name: "Temperature",
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
            type: 'area',
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
            text: 'Battery Efficiency',
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
        name: "Range",
        data: random,
    },
    {
      name: "Temperature",
      data: random1,
  }],
    options: {
      chart: {
        height: 350,
        type: 'area',
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
        text: 'Battery Efficiency',
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
    <div id="chart" className='container'>
    <ReactApexChart options={state.options} series={state.series} type="area" height={350} width={630}/>
    </div>

  )
}

  

   

  