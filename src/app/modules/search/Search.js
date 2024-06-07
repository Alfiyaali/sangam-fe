import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./Search.css"
import HeaderContent from '../../../shared/components/Header/HeaderContent';
import Footer from '../../../shared/components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const SerchPartner = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        age: Yup.number().required('Age is required').min(22, 'Age must be at least 22').max(71, 'Age must be at most 71'),
        height: Yup.number().required('Height is required').positive('Height must be positive'),
        maritalStatus: Yup.string().required('Marital status is required'),
        religion: Yup.string().required('Religion is required'),
        motherTongue: Yup.string().required('Mother tongue is required'),
        country: Yup.string().required('Country is required'),
    });

    const initialValues = {
        age: '',
        height: '',
        gender: '',
        maritalStatus: '',
        haveChildren: '',
        religion: '',
        motherTongue: '',
        country: '',
        photoSettings: [],
    };

    const handleSubmit = (values) => {
        console.log(values);
        navigate('/search/search-result', { state: values });
    };

    return (
        <>

<HeaderContent />
        <section className='search-partner-page' >
        <div className='container'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form style={{width:"100%"}}>
                        <div className='field-div'>
                            <label htmlFor="age">Age</label>
                            <Field as="select" name="age" className="age-field">
                                <option value="">Select Age</option>
                                {[...Array(50)].map((_, i) => (
                                    <option key={i} value={i + 22}>{i + 22}</option>
                                ))}
                                 
                            </Field>
                            {errors.age && touched.age && <div>{errors.age}</div>} <span style={{padding: "0px 20px"}}>To</span>
                            <Field as="select" name="age" className="age-field">
                                <option value="">Select Age</option>
                                {[...Array(50)].map((_, i) => (
                                    <option key={i} value={i + 22}>{i + 22}</option>
                                ))}
                                
                            </Field>
                            {errors.age && touched.age && <div>{errors.age}</div>}
                        </div>

                        <div className='field-div'>
                            <label htmlFor="height">Height</label>
                            <Field name="height" type="number" />
                            {errors.height && touched.height && <div>{errors.height}</div>}
                        </div>

                        <div className='field-div'>
                            <label>Gender:</label>
                                <Field type="radio" name="gender" value="male" />
                                Male
                                <Field type="radio" name="gender" value="female" />
                                Female
                        </div>

                        <div className='field-div'>
                            <label htmlFor="maritalStatus">Marital Status</label>
                            <Field as="select" name="maritalStatus">
                                <option value="">Select</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                            </Field>
                            {errors.maritalStatus && touched.maritalStatus && <div>{errors.maritalStatus}</div>}
                        </div>

                        <div className='field-div'>
                            <label htmlFor="haveChildren">Have Children:</label>
                            <Field type="radio" name="haveChildren" value="yes" />
                            Yes
                            <Field type="radio" name="haveChildren" value="no" />
                            No
                        </div>

                        <div className='field-div'>
                            <label htmlFor="religion">Religion</label>
                            <Field as="select" name="religion">
                                <option value="">Select</option>
                                <option value="christianity">Christianity</option>
                                <option value="islam">Islam</option>
                                <option value="hinduism">Hinduism</option>
                                <option value="buddhism">Buddhism</option>
                                <option value="judaism">Judaism</option>
                                {/* Add more options as needed */}
                            </Field>
                            {errors.religion && touched.religion && <div>{errors.religion}</div>}
                        </div>

                        <div className='field-div'>
                            <label htmlFor="motherTongue">Mother Tongue</label>
                            <Field as="select" name="motherTongue">
                                <option value="">Select</option>
                                <option value="english">English</option>
                                <option value="spanish">Spanish</option>
                                <option value="chinese">Chinese</option>
                                <option value="hindi">Hindi</option>
                                {/* Add more options as needed */}
                            </Field>
                            {errors.motherTongue && touched.motherTongue && <div>{errors.motherTongue}</div>}
                        </div>

                        <div className='field-div'>
                            <label htmlFor="country">Country Living in</label>
                            <Field as="select" name="country">
                                <option value="">Select</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                                <option value="canada">Canada</option>
                                <option value="australia">Australia</option>
                                {/* Add more options as needed */}
                            </Field>
                            {errors.country && touched.country && <div>{errors.country}</div>}
                        </div>

                        <div className='field-div'>
                            <label htmlFor="photoSettings">Photo Settings</label>
                            <div className="checkbox-group">
                                <Field type="checkbox" name="photoSettings" value="public" />
                                <label htmlFor="public" className="check-btn-field">Public</label>
                                <Field type="checkbox" name="photoSettings" value="private" />
                                <label htmlFor="private" className="check-btn-field">Private</label>
                            </div>
                        </div>
                        <div className='field-submit-div'>
                            <button type="submit" className='submit-btn'>Search</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
        </section>
        <Footer />
        </>
    );
};

export default SerchPartner;
