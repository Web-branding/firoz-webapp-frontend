import React from "react" 

const ApplicationSearchPage = () => {
    return(
        <div className="search">
            
                
                <div className="row mt-5 d-flex justify-content-center" >
                    <section className="row d-flex justify-content-center">
                        <div className="col col-lg-2  mt-1 ">
                            <input type="text" className="form-control " placeholder="Application Id" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </div>
                        <div className="col-auto  mb-3">
                            {/* <span className="input-group-text btn btn-primary bg-white ps-2" id="basic-addon2">Search</span> */}
                            <button type="button" class="btn btn-light btn-outline-success">Search</button>
                        </div>
                    </section>
        
                </div>
            </div>
      
    )
}


export default ApplicationSearchPage