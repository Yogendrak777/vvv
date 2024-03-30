import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function NavButton() {
    const navigate = useNavigate()
    const [quark, setQuark] = useState("btn btn-secondary")
    const [nxp500, setNxp500] = useState("btn btn-secondary")
    const [nxp700, setNxp700] = useState("btn btn-secondary")
    const [moptro, setMoptro] = useState("btn btn-secondary")
    const [trrway, setTrrway] = useState("btn btn-secondary")


    const handelQuarkU = () => {
        setQuark("btn btn-success")
        setNxp500("btn btn-secondary")
        setNxp700("btn btn-secondary")
        setMoptro("btn btn-secondary")
        setTrrway("btn btn-secondary")
        navigate('/QuarkU')
    }
    const handelNXPF = () => {
      setQuark("btn btn-secondary")
      setNxp500("btn btn-success")
      setNxp700("btn btn-secondary")
      setMoptro("btn btn-secondary")
      setTrrway("btn btn-secondary")
        navigate('/nxp500')
    }
    const handelNXPS = () => {
      setQuark("btn btn-secondary")
      setNxp500("btn btn-secondary")
      setNxp700("btn btn-success")
      setMoptro("btn btn-secondary")
      setTrrway("btn btn-secondary")
        navigate('/nxp700')
    }
    const handelMoptro = () => {
      setQuark("btn btn-secondary")
      setNxp500("btn btn-secondary")
      setNxp700("btn btn-secondary")
      setMoptro("btn btn-success")
      setTrrway("btn btn-secondary")
        navigate('/Moptro')
    }
    const handelTrrway = () => {
      setQuark("btn btn-secondary")
      setNxp500("btn btn-secondary")
      setNxp700("btn btn-secondary")
      setMoptro("btn btn-secondary")
      setTrrway("btn btn-success")
        navigate('/Irrway')
    }

  return (
    <div className='buttons'>
      <button type="button" className={`${quark}`} onClick={handelQuarkU}>Quark U</button>
      &nbsp; &nbsp; 
    <button type="button" className={`${nxp500}`} onClick={handelNXPF}>NXP 500</button>  
    &nbsp; &nbsp; 
    <button type="button" className={`${nxp700}`} onClick={handelNXPS}>NXP 700</button>  
    &nbsp; &nbsp; 
    <button type="button" className={`${moptro}`} onClick={handelMoptro}>Moptro</button> 
    &nbsp; &nbsp; 
    <button type="button" className={`${trrway}`} onClick={handelTrrway}>Irrway</button>  
    </div>
  )
}
