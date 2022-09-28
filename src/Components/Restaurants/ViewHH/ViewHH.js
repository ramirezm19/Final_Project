import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RestaurantService from '../../../Services/RestaurantService';
import Marg from '../HHList/Marg.JPG';
import Spinner from '../../Spinner/spinner';

let ViewHH = () => {

    let { restaurantId } = useParams();

    let [state, setState] = useState({
        loading: false,
        restaurant: {},
        errorMessage: ''
    });

    //from the video --which we know it doesn't work
    //useEffect(async () => {
    //     try {
    //setState({...state, loading: true});
    //let response = await RestaurantService.getRestaurant(restaurantId);
    //console.log(response.data); -- need to have it print out the data for the individual restaurant
    //setState({
    //...state,
    //loading: false;
    //restaurant: response.data
    //})
    //     }
    //     catch (error)
    //setState({
    //...state,
    //loading: false,
    //errorMessage: error.message
    //});
    // }
    //}, [restaurantId]);

    //let {loading, restaurant, errorMessage } = state;

    //suggestion from Ben

    const testurl = 'http://localhost:9000/restaurants';
    const fetchRestaurant = async () => {
        const response = await fetch(testurl)
        const data = await response.json()
        setState({ ...state, restaurants: data })
        console.log(data);
    }

    useEffect((restaurantId) => {
        fetchRestaurant();
    }, [restaurantId])

    let {loading, restaurant, errorMessage } = state;

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

            {
                loading ? <Spinner /> : <React.Fragment>
                    {
                        Object.keys(restaurant).length > 0 &&
                        <section className='view-hh mt-3'>
                            <div className='container'>
                                <div className='row align-items-center'>
                                    <div className='col-md-4'>
                                        <img src={Marg} className='restaurant-img'></img>
                                    </div>
                                    <div className='col-md-8'>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                Name: <span className='fw-bold'>{restaurant.name}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Address: <span className='fw-bold'>{restaurant.address}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Happy Hour Days: <span className='fw-bold'>XXXXX</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Happy Hour Times: <span className='fw-bold'>{restaurant.hhtimes}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Menu: <span className='fw-bold'>{restaurant.menu}</span>
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
                    }

                </React.Fragment>
            }
        </React.Fragment>
    )
};

export default ViewHH;