import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Marg from './Marg.JPG';
import RestaurantService from "../../../Services/RestaurantService";
import Spinner from '../../Spinner/spinner';


let HHList = () => {

    let [state, setState] = useState({
        loading: false,
        restaurants: [],
        errorMessage: ''
    });
    const testurl = 'http://localhost:9000/restaurants';
    const fetchRestaurants = async () => {
        const response = await fetch(testurl)
        const data = await response.json()
        setState({ ...state, restaurants: data })
        console.log(data)
    }

    useEffect(() => {
        fetchRestaurants()
    }, []);

    // this is the original code from the video and it's giving a useEffect must not return anything besides a function error.
    //     useEffect(async () => {
    //         try {
    //             let response = await RestaurantService.getAllRestaurants();
    //             console.log(response.data);
    //         }
    //         catch (error) {

    //         }
    // }, []);

    // // this is the suggestion from Dustin Schomburg
    //         useEffect (async () => {
    //             const getResponse = async () => {
    //                 try {
    //                     const apiResponse = await getResponse().then() =>
    //                     console.log(apiResponse);
    //                 }
    //                 catch (error) {

    //             }
    // }, []);

    //this is the suggestion itself from the error in the console. I get a "response is not defined" error.

    // useEffect (() => {
    //     async function fetchData() {
    //         const response = await RestaurantService.getAllRestaurants();
    //         console.log(response)
    //     }
    //         fetchData();
    //     }, []);

    //suggestions from devtrium.com/posts/async-functions-useeffect
    // useEffect (() => {
    //     const fetchData = async () = {
    //         const data = await fetch('http://localhost:9000/restaurants');
    //         const json = await data.json();
    //         return json;
    //     }
    //     const result = fetchData()
    //     .catch(console.error);
    // }, []);

    //suggestion from Natalie -- not getting the data from the API
    // useEffect (() => {
    //     const fetchData = async () => {
    //         try {
    //             let response = await RestaurantService.getAllRestaurants();
    //             setState({
    //                 ...state,
    //                 loading: false,
    //                 restaurants: response.data
    //             });
    //         }
    //         catch(error) {
    //             setState({
    //                 ...state,
    //                 loading: false,
    //                 errorMessage: error.message
    //             });
    //         }
    //     }
    //     fetchData();
    // }, [])

    //let's try what I've done in the past
    // const url = 'http://localhost:9000/restaurants';

    // const get = async () => {
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         return data;
    //         console.log(data)
    //     }
    //     catch (error) {
    //         console.log
    //     }
    // }

    // get();

    let { loading, restaurants, errorMessage } = state;
    console.log(loading);
    console.log(restaurants);
    console.log(errorMessage);


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
                                            <input type='text' className='form-control' placeholder='Search Restaurants' />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type='submit' className='btn btn-dark' value='Search' />
                                            {/* maybe include a yellow outline hover effect */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                loading ? <Spinner /> : <React.Fragment>
                    <section className='restaurant-list'>
                        <div className='container'>
                            {
                                restaurants.length > 0 &&
                                restaurants.map(restaurant => {
                                    return (
                                        <div className='cold-md-6' key={restaurant.id}>
                                            <div className='card my-4'>
                                                <div className='card-body'>
                                                    <div className='row align-items-center d-flex justify-content-around'>
                                                        <div className='col-md-4'>
                                                            <img src={Marg} className='restaurant-img'></img>
                                                        </div>
                                                        <div className='col-md-7'>
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
                                                        <div className='col-md-1 d-flex flex-column align-items-center'>
                                                            <Link to={`/Restaurants/view/${restaurant.id}`} className="btn btn-warning my-1"><img className='fa fa-eye' />
                                                            </Link>
                                                            <Link to={`/Restaurants/edit/:restaurantId`} className="btn btn-info my-1"><img className='fa fa-pen' />
                                                            </Link>
                                                            <Button className="btn btn-danger my-1"><img className='fa fa-trash' />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className='container mt-4'>
                        </div>
                        {/* //need unique key prop */}
                        {/* <div className='test'>
                            {state.map((state) => (
                            <p>{state.state}</p>
                        ))}
                        </div> */}
                    </section>
                </React.Fragment>
            }


        </React.Fragment>
    )
};

export default HHList;