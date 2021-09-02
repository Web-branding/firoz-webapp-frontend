import React, { useState, useEffect } from "react";
import axios from 'axios'

const ApplicationSearchPage = () => {
    const[state, setState]=useState([])
    
    useEffect(() => {
        axios.get('https://firoz.thewebbranding.com/api/search/ID-00002').then((response)=>{
            console.log(response.data)
            setState(response.data)
            })
        
    }, [])
    const submit=(e)=>{
        // e.preventDefault();
        // const newdata={...state}
        // newdata[e.target.id]=e.target.value
        // setState(newdata)
        // console.log(newdata)
        // // console.log(state)
        // // setState(response.data)
    }
          
    return(
        <div className="search">
            
                
                <div className="row mt-5 d-flex justify-content-center" >
                    <section className="row d-flex justify-content-center">
                        <div className="col col-lg-2  mt-5 ">
                            <input type="text" className="form-control " placeholder="Application Id" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </div>
                        <div className="col-auto  mb-3 mt-5">
                            {/* <span className="input-group-text btn btn-primary bg-white ps-2" id="basic-addon2">Search</span> */}
                            <button  onClick={submit} type="button" class="btn btn-light btn-outline-success"
                            >Search</button>
                        </div>
                    </section>
        
                </div>
            </div>
      
    )
}


export default ApplicationSearchPage