import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/esm/Spinner';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useParams, useNavigate } from 'react-router-dom';
import RestaurantService from '../../../Services/RestaurantService';
import Marg from '../HHList/Marg.JPG';
import axios from 'axios';

let EditHH = () => {

    let navigate = useNavigate();

    let { restaurantId } = useParams();

    let [state, setState] = useState({
        loading: false,
        restaurant: {
            name: '',
            address: '',
            hhtimes: '',
            menu: ''
        },
        errorMessage: ''
    });

    const serverURL = `http://localhost:9000`;
    const fetchRestaurant = async () => {
        let dataURL = `${serverURL}/restaurants/${restaurantId}`;
        return axios.get(dataURL);
    }

    useEffect(() => {
        console.log('hey')
        setState({ ...state, loading: true });
        let response = fetchRestaurant().then(response => {
            console.log(response.data)
            setState({
                ...state,
                loading: false,
                restaurant: response.data
            })
        }).catch(response => {
            
        });
        console.log(response);
        
    }, []);

    let updateInput = (event) => {
        setState({
            ...state,
            restaurant: {
                ...state.restaurant,
                [event.target.name]: event.target.value
            }
        })
    };

    let submitForm = (event) => {
        console.log('hey')
        event.preventDefault();
            // static updateRestaurant(restaurant, restaurantId) {
                let dataURL = `${serverURL}/restaurants/${restaurantId}`;
            // }
            axios.put(dataURL, restaurant).then(response => {
                if (response) {
                    navigate('/Restaurants/HHList', { replace: true });
                }
            }).catch(error => {
                setState({ ...state, errorMessage: error.message });
            navigate(`/Restaurants/edit/${restaurantId}`, { replace: false });
            console.log(error)
        });
    };

    let { loading, restaurant, errorMessage } = state;

    return (
        <React.Fragment>
            {
                loading ? <Spinner /> : <React.Fragment>
                    <section className='add-hh p-3'>
                        <div className='container align-items-center'>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <p className='h3 text-center mt-4'><span className='update'>Update</span> Happy Hour</p>
                                    <p className='fst-italic text-center mt-4'>Provide the following details to update the Happy Hour at this restaurant.</p>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-md-6'>
                                    <Form onSubmit={submitForm}>
                                        <Form.Group className="mb-3" controlId="restaurantName">
                                            {/* <Form.Label>Name of Restaurant</Form.Label> */}
                                            <Form.Control type="text" placeholder="Enter Restaurant Name"
                                                required={true}
                                                name="name"
                                                value={restaurant.name}
                                                onChange={updateInput} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="restaurantAddress">
                                            <Form.Control type="text" placeholder="Enter Address"
                                                required={true}
                                                name="address"
                                                value={restaurant.address}
                                                onChange={updateInput} />
                                            <Form.Text className="text-muted">
                                                Example: 123 E. Some Way, Little Town, XX 12345
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="hhDays">
                                            <Form.Label>Enter Happy Hour Days</Form.Label>

                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="M"
                                                        name="monday"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="T"
                                                        name="tuesday"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="W"
                                                        name="wednesday"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Th"
                                                        name="thursday"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="F"
                                                        name="friday"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Sat"
                                                        name="saturday"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Sun"
                                                        name="sunday"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                    />
                                                </div>
                                            ))}
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="restaurantTimes">
                                            <Form.Control type="text" placeholder="Enter Happy Hour Times"
                                                required={true}
                                                name="hhtimes"
                                                value={restaurant.hhtimes}
                                                onChange={updateInput} />
                                            <Form.Text className="text-muted">
                                                Example: 2pm-6pm
                                            </Form.Text>
                                        </Form.Group>

                                        <InputGroup controlId="restaurantMenu">
                                            <Form.Control as="textarea" placeholder="Enter Happy Hour Menu" aria-label="With textarea"
                                                required={true}
                                                name="menu"
                                                value={restaurant.menu}
                                                onChange={updateInput} />
                                        </InputGroup>

                                        <Button className='submitHH mt-3' variant="warning" type="submit" onClick={submitForm}>Update</Button>

                                        <Link to={'/Restaurants/HHList'} className="btn btn-dark ms-2 mt-3">Cancel</Link>

                                    </Form>
                                </div>
                                <div className='col-md-6'>
                                    <img src={Marg} className='restaurant-img'></img>
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            }

        </React.Fragment>
    )
};

export default EditHH;