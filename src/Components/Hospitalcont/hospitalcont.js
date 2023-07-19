import Hospitallist from "../Hospitallist/hospitallist"

import { useState,useEffect } from "react"


function HospitalCont() {
    const [name,setName]=useState([])
    useEffect(()=>{
        names()
    },[])

    const names=async ()=>{
        const res=await fetch("http://localhost:4000/hospitals")
        console.log(res)
    setName(await res.json())
    }

    console.log(name)

    return(
    <div>
        <Hospitallist hlist={name}/>
    
    </div>
    )

    }
export default HospitalCont