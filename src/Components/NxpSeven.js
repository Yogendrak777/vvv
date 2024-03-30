import React from 'react'
import ReatTime from './ReatTime'
import NavButton from './NavButton'
import ColumnChart from './ColumnChart'
import PieChart from './PieChart'
import Spline from './Spline'
import ErrorLogTable from './ErrorLogTable'


export default function NxpSeven() {
  return (
    <div>
        <NavButton/>
        <div class="d-flex justify-content-center">
        <ReatTime/>
        <ColumnChart/>
        </div>
        <div class="d-flex justify-content-center">
        <Spline/>
        <PieChart/>
        </div>
        <div className='ErrorsLogs'>
       <ErrorLogTable/>
       </div>
       
    </div>
  )
}
