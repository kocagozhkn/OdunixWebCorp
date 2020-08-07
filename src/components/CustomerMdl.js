import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { country_list } from "../data/invdata";
//import { invoices } from "../data/invdata";
//import DatePicker from "react-date-picker";
/*let formInfo = [{
  ID: 1,
    COMPANY: "FULYA",
    ADDRESS: "DUISBURG GERMANY",
    COUNTRY: "GERMANY",
    CURRENCY: "USD",
    DEBIT: "0",
    CREDIT: "0"
}];*/

function MyVerticallyCenteredModal(props) {
  const [formValues, setFormValues] = useState({
    COMPANY: "",
    ADDRESS: "",
    COUNTRY: "",
    CURRENCY: ""
  });

  //console.log(props.showx.showx);

  const [validated, setValidate] = useState(false);
  //const [invFrom, setinvForm] = useState(formInfo);
  //company: " x", address: " x", country: " x", currency: "GBP", …}
  useEffect(() => {

  }, []); // Only re-run the effect if count changes*/

  function handleSubmit(e) {
    //setFormValues({ ...formValues, ID: randomGen() });

    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      props.handleprops(formValues);
      //setFormValues([]);
    }
    setValidate(true);

    // console.log(formValues);
  }

  function handleChangeAll(e) {
    e.preventDefault()
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (name === "COMPANY") {
      setFormValues({ ...formValues, COMPANY: value });
    } else if (name === "ADDRESS") {
      setFormValues({ ...formValues, ADDRESS: value });
    } else if (name === "COUNTRY") {
      setFormValues({ ...formValues, COUNTRY: value });
    } else if (name === "CURRENCY") {
      setFormValues({ ...formValues, CURRENCY: value });
    }
    console.log(formValues)
  }
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          NEW COMPANY
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="companyName">
              <Form.Label>COMPANY NAME</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Company Name"
                value={formValues.COMPANY}
                onChange={handleChangeAll}
                name="COMPANY"
                className="text-uppercase"
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="companyAddress">
              <Form.Label>COMPANY ADDRESS</Form.Label>
              <Form.Control
                required
                placeholder="Enter Company Address"
                type="text"
                name="ADDRESS"
                value={formValues.ADDRESS}
                onChange={handleChangeAll}
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="country">
              <Form.Label>COUNTRY</Form.Label>
              <Form.Control
                required
                as="select"
                name="COUNTRY"
                onChange={handleChangeAll}
                value={formValues.COUNTRY}
              >
                
                {country_list.map(el => (
                  <option key={el} >
                    {el}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="currency">
              <Form.Label>CURRENCY</Form.Label>
              <Form.Control
                required
                as="select"
                name="CURRENCY"
                value={formValues.CURRENCY}
                onChange={handleChangeAll}
              >
                <option> </option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>TRY</option>
              </Form.Control>
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Mdlinv(props) {
  const [modalShow, setModalShow] = React.useState(false);
 
  function handleprops(val) {
    props.addCustomer(val);
    //console.log(val)
  }



  return (
    <React.Fragment>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        ADD COMPANY
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        
        handleprops={handleprops}
        onHide={() => setModalShow(false) }
      />
    </React.Fragment>
  );
}

export default Mdlinv;

/* 

<Form.Group as={Col} controlId="debit">
              <Form.Label>DEBIT</Form.Label>
              <Form.Control
                required
                type="text"
                name="DEBIT"
                value={formValues.DEBIT}
                onChange={handleChangeAll}
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="Credit">
              <Form.Label>CREDIT</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter"
                name="CREDIT"
                value={formValues.CREDIT}
                onChange={handleChangeAll}
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>

*/
