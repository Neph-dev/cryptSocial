import React from 'react'

import { Link } from 'react-router-dom'

import { GrBitcoin } from 'react-icons/gr'
import logo from '../../assets/ethereum.png'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InfiniteSlide from '../../components/InfiniteSlide'


const PersonalInformation = () => {

    const genderRadio = [
        {
            id: 0,
            title: 'Male',
            genderId: 'customRadioInline1'
        },
        {
            id: 1,
            title: 'Female',
            genderId: 'customRadioInline2'
        }
    ]

    return (
        <div id='pages'>

            <h3 className='header-logo'>
                <Link to='/'>
                    <img src={logo} alt='' style={{ width: 50, height: 50 }} />
                </Link>
            </h3>

            <div className='form-card-container'>
                <div className='form-card'>
                    <h3>Set up your account</h3>
                    <div className='sm-centered-text'>Let your community know about you.</div>

                    <div id='separator1rem' />

                    <Form>
                        <Form.Group className='mb-4' controlId='formBasicEmail'>
                            <div className='row'>
                                <div className='col'>
                                    <input type='text' className='form-control' placeholder='First name' />
                                </div>
                                <div className='col'>
                                    <input type='text' className='form-control' placeholder='Last name' />
                                </div>
                            </div>

                            <div id='separator1rem' />

                            <Form.Label>Gender</Form.Label>
                            <div>
                                {
                                    genderRadio.map((gender) => (
                                        <div className='custom-control custom-radio custom-control-inline'>
                                            <input
                                                type='radio'
                                                id={gender.genderId}
                                                name='customRadioInline1'
                                                className='custom-control-input' />
                                            <label className='custom-control-label' for={gender.genderId}>
                                                {gender.title}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>

                            <div id='separator1rem' />

                            <Form.Label>Date of birth</Form.Label>
                            <div className='form-row'>
                                <div className='form-group col-md-4'>
                                    <select id='inputState' className='form-control'>
                                        <option selected>Day</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className='form-group col-md-4'>
                                    <select id='inputState' className='form-control'>
                                        <option selected>Month</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className='form-group col-md-4'>
                                    <select id='inputState' className='form-control'>
                                        <option selected>Year</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ fontSize: 11 }} className='sm-centered-text'>
                                By clicking Sign Up, you agree to our Terms,
                                Data Policy and Cookie Policy.
                            </div>
                        </Form.Group>


                        <Button variant='primary' type='submit'>
                            Sign Up
                        </Button>
                    </Form>
                </div>
            </div>

            <div className='bottom-icon'>
                <GrBitcoin size={120} />
            </div>

            <InfiniteSlide />
        </div>
    )
}

export default PersonalInformation