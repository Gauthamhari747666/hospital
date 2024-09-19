import React from 'react'

import Navbar from './Navbar'
const Aboutpage = () => {
    return (
        <div>
            <div className="container">
            <Navbar />
                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                  <label htmlFor="" className="form-label">Name</label>
                  <input type="text" className="form-control" />
                  <label htmlFor="" className="form-label">Username</label>
                  <input type="text" className="form-control" />
                  <label htmlFor="" className="form-label">Email</label>
                  <input type="text" className="form-control" />
                  <label htmlFor="" className="form-label">ph no</label>
                  <input type="text" className="form-control" />
                  <label htmlFor="" className="form-label">Website</label>
                  <input type="text" className="form-control" />
                  <button className="btn btn-primary">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutpage