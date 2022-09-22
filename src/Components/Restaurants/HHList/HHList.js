import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Marg from './Marg.JPG';
import {RestaurantService} from "../../../Services/RestaurantService";


let HHList = () => {

    let [state, setState] = useState({
        loading: false,
        restaurants: [],
        errorMessage: ''
    });

    useEffect( async () => {
        try {
            let response = await RestaurantService.getAllRestaurants();
            console.log(response.data);
        }
        catch (error) {

        }
    }, []);


    return (
        <React.Fragment>
            <section className='restaurant-search'>
                <div className='container'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col'>
                                <p className='h3'>Happy Hour List
                                <Link to={'/Restaurants/add'}>
                                <Button variant='warning m-3'> <i className='fa fa-plus-circle'></i> New Happy Hour</Button>
                                </Link>
                                </p>
                                <p className="fst-italic">Some Lorem is supposed to go in here but for whatever reason it won't do it for me right now but I will put something in here to include information about the search and the list of restaurants.</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <form className='row'>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type='text' className='form-control' placeholder='Search Restaurants'/>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type='submit' className='btn btn-dark' value='Search'/> 
                                            {/* maybe include a yellow outline hover effect */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='restaurant-list'>
                <div className='container'>
                    <div className='cold-md-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row align-items-center d-flex justify-content-around'>
                                <div className='col-md-4'>
                                    <img src={Marg} className='restaurant-img'></img>
                                </div>
                                <div className='col-md-7'>
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
                                <div className='col-md-1 d-flex flex-column align-items-center'>
                                    <Link to={`/Restaurants/view/:restaurantId`} className="btn btn-warning my-1"><image className='fa fa-eye'/>
                                    </Link>
                                    <Link to={`/Restaurants/edit/:restaurantId`} className="btn btn-info my-1"><image className='fa fa-pen'/>
                                    </Link>
                                    <Button className="btn btn-danger my-1"><image className='fa fa-trash'/>
                                    </Button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-4'>
                    <div className='cold-md-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row align-items-center d-flex justify-content-around'>
                                <div className='col-md-4'>
                                    <img src={Marg} className='restaurant-img'></img>
                                </div>
                                <div className='col-md-7'>
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
                                <div className='col-md-1 d-flex flex-column align-items-center'>
                                    <Link to={`/Restaurants/view/:restaurantId`} className="btn btn-warning my-1"><image className='fa fa-eye'/>
                                    </Link>
                                    <Link to={`/Restaurants/edit/:restaurantId`} className="btn btn-info my-1"><image className='fa fa-pen'/>
                                    </Link>
                                    <Button className="btn btn-danger my-1"><image className='fa fa-trash'/>
                                    </Button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default HHList;