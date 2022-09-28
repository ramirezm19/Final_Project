import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/esm/Spinner';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useParams, useNavigate } from 'react-router-dom';
import RestaurantService from '../../../Services/RestaurantService';
import Marg from '../HHList/Marg.JPG';

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

    useEffect(async () => {
        try {
            setState({ ...state, loading: true });
            let response = await RestaurantService.getRestaurant(restaurantId);
            setState({
                ...state,
                loading: false,
                contact: response.data
            });
        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
    }, [restaurantId]);

    let updateInput = (event) => {
        setState({
            ...state,
            restaurant: {
                ...state.restaurant,
                [event.target.name]: event.target.value
            }
        })
    };

    let submitForm = async (event) => {
        event.preventDefault();
        try {
            let response = await RestaurantService.updateRestaurant(state.restaurant, restaurantId);
            if (response) {
                navigate('/Restaurants/HHList', { replace: true });
            }
        }
        catch (error) {
            setState({ ...state, errorMessage: error.message });
            navigate(`/Restaurants/edit/${restaurantId}`, { replace: false });
        }
    };

    let { loading, restaurant, errorMessage } = state;

    return (
        <React.Fragment>
            {
                loading ? <Spinner /> : <React.Fragment>
                    <pre>{JSON.stringify(restaurant)}</pre>
                    <section className='add-hh p-3'>
                        <div className='container-fluid'>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <p className='h3'><span className='update'>Update</span> Happy Hour</p>
                                    <p className='fst-italic'>lorem lorem lorem lorem ipsum ipsum tah dah dah dah</p>
                                </div>
                            </div>
                            <div className='row'>
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

                                        <Button className='submitHH mt-3' variant="warning" type="submit">Update</Button>

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