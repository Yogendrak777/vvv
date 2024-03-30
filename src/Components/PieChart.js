import React,{useState, useEffect} from 'react'
import ReactApexChart from "react-apexcharts";
import './Style.css'

export default function PieChart() {
  var data = []
 
    if(window.location.pathname === '/QuarkU'){
      data = [90, 87, 70, 94]
     
    }
    else if(window.location.pathname === '/nxp500'){
      data = [80, 81, 85, 65]
    
    }
    else if(window.location.pathname === '/Irrway'){
      data = [60, 61, 95, 74]
     
    }
    else if(window.location.pathname === '/Moptro'){
      data = [60, 81, 75, 81]
      
    }
    else if(window.location.pathname === '/nxp700'){
       data = [70, 61, 75, 81]
      
    }

    const [random, setRandom] = useState(data)
    
    
    const changeUI = () => {
      setState({
        series: random,
      options: {
        chart: {
          foreColor: "#fff",
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            inverseOrder: false,
            hollow: {
              margin: 5,
              size: "48%",
              background: "transparent"
            },
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                
              }
            },
            track: {
              show: true,
              background: "#40475D",
              strokeWidth: "10%",
              opacity: 1,
              margin: 3 // margin is in pixels
            }
          }
        },
        title: {
          text: ' Current Performance',
          align: 'left',
          style: {
            color:  '#ffffff'
          },
          
        },
        
        fill: {
          type: "gradient",
          gradient: {
            gradientToColors: ["#F55555", "#6078ea", "#6094ea"]
          }
        },
        labels: ['Powertrain', 'Battery', 'Motor', 'Accessories'],
      },
      })
    }

    useEffect(()=>{
        const interval = setInterval(() => {
          if(window.location.pathname === '/QuarkU'){
          
            const randomNum = Math.floor(Math.random() * (88 - 75)) + 70;
            const randomNum1 = Math.floor(Math.random() * (88 - 75)) + 75;
            const randomNum2 = Math.floor(Math.random() * (88 - 75)) + 70;
            const randomNum3 = Math.floor(Math.random() * (88 - 75)) + 70;
           
            data.push(randomNum)
            data.push(randomNum1)
            data.push(randomNum2)
            data.push(randomNum3)
            data.shift()
            data.shift()
            data.shift()
            data.shift()
            setRandom(data)
            changeUI();
          }
        }, 3000);
        return () => {
          clearInterval(interval);
        };
    },[data, random,changeUI])

    const [state, setState] = useState({
      series: data,
      options: {
        chart: {
          foreColor: "#fff",
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            inverseOrder: false,
            hollow: {
              margin: 5,
              size: "48%",
              background: "transparent"
            },
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                
              }
            },
            track: {
              show: true,
              background: "#40475D",
              strokeWidth: "10%",
              opacity: 1,
              margin: 3 // margin is in pixels
            }
          }
        },
        title: {
          text: ' Current Performance',
          align: 'left',
          style: {
            color:  '#ffffff'
          },
          
        },
        
        fill: {
          type: "gradient",
          gradient: {
            gradientToColors: ["#F55555", "#6078ea", "#6094ea"]
          }
        },
        labels: ['Powertrain', 'Battery', 'Motor', 'Accessories'],
      },
     
    
   
    })

   

  return (
    <div id="chart" className='container PieChart'>
   <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />
</div>
    
   
  )
}
