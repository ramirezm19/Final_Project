import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import Marg from '../HHList/Marg.JPG';

let EditHH = () => {
    return (
        <React.Fragment>
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
                            <Form>
                                <Form.Group className="mb-3" controlId="restaurantName">
                                    {/* <Form.Label>Name of Restaurant</Form.Label> */}
                                    <Form.Control type="text" placeholder="Enter Restaurant Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="restaurantAddress">
                                     <Form.Control type="text" placeholder="Enter Address" />
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
                                     <Form.Control type="text" placeholder="Enter Happy Hour Times" />
                                     <Form.Text className="text-muted">
                                        Example: 2pm-6pm
                                    </Form.Text>
                                </Form.Group>

                                <InputGroup controlId="restaurantMenu">
                                    {/* <InputGroup.Text>With textarea</InputGroup.Text> */}
                                    <Form.Control as="textarea" placeholder="Enter Happy Hour Menu" aria-label="With textarea" />
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
    )
};

export default EditHH;