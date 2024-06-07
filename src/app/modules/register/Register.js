import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Register.css';

const SignupForm = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showThirdPopup, setShowThirdPopup] = useState(false);
    const [showFourthPopup, setShowFourthPopup] = useState(false);
    const [initialValues, setInitialValues] = useState({ relationship: '', gender: '' });
    const [secondValues, setSecondValues] = useState({ firstName: '', lastName: '', day: '', month: '', year: '' });
    const [thirdValues, setThirdValues] = useState({ religion: '', community: '', livingIn: '' });

    const initialSchema = Yup.object().shape({
        relationship: Yup.string().required('Required'),
        gender: Yup.string().required('Required'),
    });

    const secondSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        day: Yup.number().typeError('Must be a number').required('Required').min(1).max(31),
        month: Yup.number().typeError('Must be a number').required('Required').min(1).max(12),
        year: Yup.number().typeError('Must be a number').required('Required').min(1900).max(new Date().getFullYear()),
    });

    const thirdSchema = Yup.object().shape({
        religion: Yup.string().required('Required'),
        community: Yup.string().required('Required'),
        livingIn: Yup.string().required('Required'),
    });

    const fourthSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().required('Required').matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
    });

    const handleInitialSubmit = (values) => {
        setInitialValues(values);
        setShowPopup(true);
    };

    const handleSecondSubmit = (values, actions) => {
        setSecondValues(values);
        setShowPopup(false);
        setShowThirdPopup(true);
    };

    const handleThirdSubmit = (values, actions) => {
        setThirdValues(values);
        setShowThirdPopup(false);
        setShowFourthPopup(true);
    };

    const handleFourthSubmit = (values, actions) => {
        alert(JSON.stringify({ ...initialValues, ...secondValues, ...thirdValues, ...values }, null, 2));
        actions.resetForm();
        setShowFourthPopup(false);
    };

    return (
        <section className='register-page'>
        <div>
            {!showPopup && !showThirdPopup && !showFourthPopup && (
                <Formik
                    initialValues={initialValues}
                    validationSchema={initialSchema}
                    onSubmit={handleInitialSubmit}
                >
                    {({ values, errors, touched, setFieldValue }) => (
                        <Form className='form-main-div'>
                            <div>
                                <label>Select your relation:</label>
                                <div className="relationship-options">
                                    <p onClick={() => setFieldValue('relationship', 'myself')}>Myself</p>
                                    <p onClick={() => setFieldValue('relationship', 'myson')}>My Son</p>
                                    <p onClick={() => setFieldValue('relationship', 'myfriend')}>My Friend</p>
                                    <p onClick={() => setFieldValue('relationship', 'mydaughter')}>My Daughter</p>
                                    <p onClick={() => setFieldValue('relationship', 'mybrother')}>My Brother</p>
                                </div>
                                {errors.relationship && touched.relationship ? (
                                    <div className="error">{errors.relationship}</div>
                                ) : null}
                            </div>

                            {values.relationship && (
                                <div>
                                    <label>Select gender:</label>
                                    <div className="gender-options">
                                        <p onClick={() => setFieldValue('gender', 'male')}>Male</p>
                                        <p onClick={() => setFieldValue('gender', 'female')}>Female</p>
                                    </div>
                                    {errors.gender && touched.gender ? (
                                        <div className="error">{errors.gender}</div>
                                    ) : null}
                                </div>
                            )}

                            {values.relationship && values.gender && (
                                <button type="submit">Continue</button>
                            )}
                        </Form>
                    )}
                </Formik>
            )}

            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <Formik
                            initialValues={{ firstName: '', lastName: '', day: '', month: '', year: '' }}
                            validationSchema={secondSchema}
                            onSubmit={handleSecondSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className='form-main-div'>
                                    <div>
                                        <label>First Name</label>
                                        <Field name="firstName" />
                                        {errors.firstName && touched.firstName ? <div className="error">{errors.firstName}</div> : null}
                                    </div>

                                    <div>
                                        <label>Last Name</label>
                                        <Field name="lastName" />
                                        {errors.lastName && touched.lastName ? <div className="error">{errors.lastName}</div> : null}
                                    </div>

                                    <div>
                                        <label>Date of Birth</label>
                                        <div className="date-fields">
                                            <Field
                                                type="number"
                                                name="day"
                                                placeholder="DD"
                                                onKeyDown={(e) => {
                                                    if (!(e.key === 'Backspace' || e.key === 'Tab' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || (e.key >= '0' && e.key <= '9'))) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            />
                                            <Field
                                                type="number"
                                                name="month"
                                                placeholder="MM"
                                                onKeyDown={(e) => {
                                                    if (!(e.key === 'Backspace' || e.key === 'Tab' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || (e.key >= '0' && e.key <= '9'))) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            />
                                            <Field
                                                type="number"
                                                name="year"
                                                placeholder="YYYY"
                                                onKeyDown={(e) => {
                                                    if (!(e.key === 'Backspace' || e.key === 'Tab' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || (e.key >= '0' && e.key <= '9'))) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            />
                                        </div>
                                        {errors.day && touched.day ? <div className="error">{errors.day}</div> : null}
                                        {errors.month && touched.month ? <div className="error">{errors.month}</div> : null}
                                        {errors.year && touched.year ? <div className="error">{errors.year}</div> : null}
                                    </div>

                                    <button type="submit">Submit</button>
                                </Form>
                            )}
                        </Formik>
                        {/* <button onClick={() => setShowPopup(false)}>Back</button> */}
                    </div>
                </div>
            )}

            {showThirdPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <Formik
                            initialValues={{ religion: '', community: '', livingIn: '' }}
                            validationSchema={thirdSchema}
                            onSubmit={handleThirdSubmit}
                        >
                            {({ values, errors, touched, setFieldValue }) => (
                                <Form className='form-main-div'>
                                    <div>
                                        <label>Select Religion:</label>
                                        <Field as="select" name="religion">
                                            <option value="">Select</option>
                                            <option value="hindu">Hindu</option>
                                            <option value="muslim">Muslim</option>
                                            <option value="christian">Christian</option>
                                            <option value="sikh">Sikh</option>
                                            <option value="other">Other</option>
                                        </Field>
                                        {errors.religion && touched.religion ? (
                                            <div className="error">{errors.religion}</div>
                                        ) : null}
                                    </div>

                                    {values.religion && (
                                        <div>
                                            <label>Select Community:</label>
                                            <Field as="select" name="community">
                                                <option value="">Select</option>
                                                <option value="community1">Community 1</option>
                                                <option value="community2">Community 2</option>
                                                <option value="community3">Community 3</option>
                                            </Field>
                                            {errors.community && touched.community ? (
                                                <div className="error">{errors.community}</div>
                                            ) : null}
                                        </div>
                                    )}

                                    {values.community && (
                                        <div>
                                            <label>Living In:</label>
                                            <Field as="select" name="livingIn">
                                                <option value="">Select</option>
                                                <option value="city1">City 1</option>
                                                <option value="city2">City 2</option>
                                                <option value="city3">City 3</option>
                                            </Field>
                                            {errors.livingIn && touched.livingIn ? (
                                                <div className="error">{errors.livingIn}</div>
                                            ) : null}
                                        </div>
                                    )}

                                    {values.livingIn && (
                                        <button type="submit">Submit</button>
                                    )}
                                </Form>
                            )}
                        </Formik>
                        {/* <button onClick={() => { setShowThirdPopup(false); setShowPopup(true); }}>Back</button> */}
                    </div>
                </div>
            )}

            {showFourthPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <Formik
                            initialValues={{ email: '', phone: '' }}
                            validationSchema={fourthSchema}
                            onSubmit={handleFourthSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className='form-main-div'>
                                    <div>
                                        <label>Email</label>
                                        <Field type="email" name="email" />
                                        {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
                                    </div>

                                    <div>
                                        <label>Phone Number</label>
                                        <div className="date-fields">
                                            <Field as="select" name="countryCode">
                                                <option value="">Select Country Code</option>
                                                <option value="+1">United States (+1)</option>
                                                <option value="+44">United Kingdom (+44)</option>
                                                <option value="+91">India (+91)</option>
                                                {/* Add more options as needed */}
                                            </Field>
                                            <Field type="text" name="phone" />
                                        </div>
                                        {errors.phone && touched.phone ? <div className="error">{errors.phone}</div> : null}
                                        {errors.countryCode && touched.countryCode ? <div className="error">{errors.countryCode}</div> : null}
                                    </div>

                                    <button type="submit">Submit</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </div>
        </section>
    );
};

export default SignupForm;
