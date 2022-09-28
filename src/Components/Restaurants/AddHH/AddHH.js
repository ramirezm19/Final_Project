import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useNavigate } from 'react-router-dom';
import RestaurantService from '../../../Services/RestaurantService';

let AddHH = () => {

    let navigate = useNavigate();

    let [state , setState] = useState({
        loading: false,
        restaurant: {
            name: '',
            address: '',
            hhtimes: '',
            menu: ''
        },
        errorMessage: ''
    });

    let updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.restaurant,
                [event.target.name] : event.target.value
            }
        });
    };

    let submitForm = async (event) => {
        event.preventDefault();
        try {
            let response = await RestaurantService.createRestaurant(state.restaurant);
            if(response){
                navigate('/Restaurants/HHList', {replace: true} );
            }
        }
        catch (error) {
            setState( {...state, errorMessage: error.message});
            navigate('/Restaurants/add', {replace: false} );
        }
    };

    let {loading, restaurant, errorMessage} = state;

    return (
        <React.Fragment>
            <pre>{JSON.stringify(state.restaurant)}</pre>
            <section className='add-hh p-3'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                        <p className='h3'><span className='update'>Add</span> Happy Hour</p>
                            <p className='fst-italic'>lorem lorem lorem lorem ipsum ipsum tah dah dah dah</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Form onSubmit={submitForm}>
                                <Form.Group className="mb-3" controlId="restaurantName">
                                    <Form.Control type="text" placeholder="Enter Restaurant Name"   
                                    required={true} 
                                    name="name" 
                                    value={restaurant.name} 
                                    onChange={updateInput}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="restaurantAddress">
                                     <Form.Control type="text" placeholder="Enter Address" 
                                    required={true} 
                                    name="address" 
                                    value={restaurant.address} 
                                    onChange={updateInput}/>
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
                                    onChange={updateInput}/>
                                </InputGroup>

                                <Button className='submitHH mt-3' variant="warning" type="submit">Submit</Button>

                                <Link to={'/Restaurants/HHList'} className="btn btn-dark ms-2 mt-3">Cancel</Link>

                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default AddHH;