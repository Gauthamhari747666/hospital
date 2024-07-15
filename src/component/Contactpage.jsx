
import React from 'react'
import Navbar from './Navbar'

const Contactpage = () => {
    return (
        <div>
            <div className="container">
            <Navbar />
                <br />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="card text-center bg-primary-subtle">
                                    <div className="card-body">
                                        <h2 className="card-text"><i>Contact Us</i></h2>
                                        <p className="card-text"><i></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Message</label>
                                <textarea name="" id="" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Phone No.</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="" id="" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Select the event</label>
                                <select name="" id="" class="form-select">
                                    <option value="Select the event">Select the event</option>
                                    <option value="Wedding Ceremony">Wedding Ceremony</option>
                                    <option value="Birthday Party">Birthday Party</option>
                                    <option value="Music Concert">Music Concert</option>
                                    <option value="Outdoor Camp">DJ</option>
                                    <option value="Engagement Party">Engagement Party</option>
                                    <option value="Theatre Performance">Theatre Performance</option>
                                    <option value="Holiday Party">Holiday Party</option>
                                    <option value="Festival Celebrations">Festival Celebrations</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Specify your event</label>
                                <textarea name="" id="" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Contactpage
