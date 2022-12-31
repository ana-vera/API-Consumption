import { useState, useEffect } from "react"


function Docs() {

const [number, setNumber] = useState(0)
const [isView, setIsView] = useState(false)

const sumar = ()=>{
  setNumber(9_000 + 1)
}

useEffect(()=> {
  sumar()
})

  return (
    <div className='app text-white'>
      <h1 className='text-danger'>Consumo de APIS</h1>
      <h2>{number}</h2>
      <button  onClick={()=>setNumber(number + 1)} 
        className='btn btn-primary'>
        Sumar
      </button>
      <button className="btn btn-primary" onClick={()=>setIsView(!isView)}>CLICK</button>
      {
        isView && <p>Visible</p>
      }


    </div>
  )
}

export default Docs
