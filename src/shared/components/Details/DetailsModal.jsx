import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import "./DetailsModal.css"
function DetailsModal({handleClose,show}) {
    const [step, setStep] = useState(1);
    const nextStep = () => {
        setStep(prevStep => prevStep + 1);
      };
      const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  const submission = () => {
    setStep(1);
    handleClose();
  };
  return (
    <div>
         <Modal centered show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {step === 1 && ( 

<Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Profile For</Form.Label>
  <Form.Select aria-label="Default select example">
<option>Open this select menu</option>
<option value="1">My Self</option>
<option value="2">My Son</option>
<option value="3">My Daughter</option>
<option value="4">My Brother</option>
<option value="5">My Sister</option>
<option value="6">My Friend</option>
<option value="7">My Relative</option>
</Form.Select>
</Form.Group>
<Form.Group className='mb-4'>
    <Form.Label>Gender</Form.Label>
    <div className="d-flex">
      <Form.Check
        type="radio"
        label="Male"
        name="gender"
        value="male"
        checked={selectedGender === 'male'}
        onChange={handleGenderChange}
        className="custom-checkbox me-3"
      />
      <Form.Check
        type="radio"
        label="Female"
        name="gender"
        value="female"
        checked={selectedGender === 'female'}
        onChange={handleGenderChange}
        className="custom-checkbox"
      />
    </div>
  </Form.Group>
  <Button className='step-btn' variant="primary"onClick={nextStep}>
     Next
    </Button>
</Form>
        )
    }
        {step === 2 && ( 
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control type="date" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile no</Form.Label>
              <Form.Control type="number" placeholder="Enter your mobile no" />
            </Form.Group>
            <Button variant="primary" className='step-btn' onClick={submission} type="submit">
              Submit
            </Button>
          </Form>
        )
    }
       
        </Modal.Body>
        
       
      </Modal>
    </div>
  )
}

export default DetailsModal