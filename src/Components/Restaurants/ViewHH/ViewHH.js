import React from 'react';
import { Link } from 'react-router-dom';
import Marg from '../HHList/Marg.JPG';

let ViewHH = () => {
    return (
        <React.Fragment>
            <section className='view-hh-intro p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                        <p className='h3'><span className='update'>View</span> Happy Hour</p>
                            <p className='fst-italic'>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='view-hh mt-3'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-4'>
                            <img src={Marg} className='restaurant-img'></img>
                        </div>
                        <div className='col-md-8'>
                        <ul className='list-group'>
                                        <li className='list-group-item list-group-item-action'>
                                            Name: <span className='fw-bold'>La Doña Mezcaleria</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Address: <span className='fw-bold'>13 E. Louisiana Ave., <br></br> Denver, CO 80210</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Happy Hour Days: <span className='fw-bold'>XXXXX</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Happy Hour Times: <span className='fw-bold'>XXXXX</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Menu: <span className='fw-bold'>XXXXX</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Update Date: <span className='fw-bold'>Here is where I want to include the Star Rating and Comments</span>
                                        </li>
                                    </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <Link to={'/Restaurants/HHList'} className='btn btn-warning mt-5'>Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ViewHH;