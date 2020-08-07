import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
//import { invoices } from "../data/invdata";
//import DatePicker from "react-date-picker";
/*let formInfo = [{
  FATURA_NO: "test",
  FATURA_TARIHI: "1982-05-05",
  FIRMA: "test",
  GIDECEGI_ULKE: "test",
  TRANSIT_TIC: "test",
  SBIF_NO: "test",
  SBIF_TARIH: "test",
  NET: "test",
  BRUT: "test",
  DOVIZ: "test",
  FATURA: "test",
  PARITE: "test",
  USD_DOVIZ: "test",
  NOTLAR: "ttest"
}];*/
function MyVerticallyCenteredModal(props) {
  //console.log(props)
  const [formValues, setFormValues] = useState({
    FATURA_NO: "",
    FATURA_TARIHI: "1982-05-05",
    FIRMA: "",
    GIDECEGI_ULKE: "",
    TRANSIT_TIC: "",
    SBIF_NO: "",
    SBIF_TARIH: "",
    NET: "",
    BRUT: "",
    DOVIZ: "",
    FATURA: "",
    PARITE: "",
    USD_DOVIZ: "",
    NOTLAR: ""
  });
  const [currency, setCurrency] = useState([]);

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    let comp = props.customers.map(el => el.currency);

    let unique = [...new Set(comp)];

    setCurrency(unique);
  }, []);

  //console.log(currency);
  //console.log(getCurrencyList());

  //const [invFrom, setinvForm] = useState(formInfo);

  /*  useEffect(() => {
    setFormValues(formInfo)
  }, []); // Only re-run the effect if count changes*/

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      props.handleprops(formValues);
     ;
    }
    setValidated(true);
    //setFormValues([])
  }

  function handleChangeAll(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (name === "FATURA_NO") {
      setFormValues({ ...formValues, FATURA_NO: value });
    } else if (name === "FATURA_TARIHI") {
      setFormValues({ ...formValues, FATURA_TARIHI: value });
    } else if (name === "FIRMA") {
      setFormValues({ ...formValues, FIRMA: value });
    } else if (name === "GIDECEGI_ULKE") {
      setFormValues({ ...formValues, GIDECEGI_ULKE: value });
    } else if (name === "TRANSIT_TIC") {
      setFormValues({ ...formValues, TRANSIT_TIC: value });
    } else if (name === "SBIF_NO") {
      setFormValues({ ...formValues, SBIF_NO: value });
    } else if (name === "NET") {
      setFormValues({ ...formValues, NET: value });
    } else if (name === "BRUT") {
      setFormValues({ ...formValues, BRUT: value });
    } else if (name === "DOVIZ") {
      setFormValues({ ...formValues, DOVIZ: value });
    } else if (name === "FATURA") {
      setFormValues({ ...formValues, FATURA: value });
    } else if (name === "PARITE") {
      setFormValues({ ...formValues, PARITE: value });
    } else if (name === "USD_DOVIZ") {
      setFormValues({ ...formValues, USD_DOVIZ: value });
    } else if (name === "NOTLAR") {
      setFormValues({ ...formValues, NOTLAR: value });
    }
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
          NEW INVOICE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Form.Row>
            <Form.Group as={Col} controlId="invoiceNo">
              <Form.Label>Invoice No</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Invoice No"
                value={formValues.FATURA_NO}
                onChange={handleChangeAll}
                name="FATURA_NO"
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="invoiceDate">
              <Form.Label>Invoice Date</Form.Label>
              <Form.Control
                required
                type="date"
                name="FATURA_TARIHI"
                value={formValues.FATURA_TARIHI}
                onChange={handleChangeAll}
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="company">
              <Form.Label>COMPANY</Form.Label>
              <Form.Control
                as="select"
                onChange={handleChangeAll}
                value={formValues.FIRMA}
                name="FIRMA"
              >
                {props.customers.map(el => (
                  <option>{el.company}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="country">
              <Form.Label>COUNTRY</Form.Label>
              <Form.Control
                required
                as="select"
                name="GIDECEGI_ULKE"
                value={formValues.GIDECEGI_ULKE}
                onChange={handleChangeAll}
              >
                {props.customers.map(el => (
                  <option>{el.country}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="transitCountry">
              <Form.Label>TRANS. COUNTRY</Form.Label>
              <Form.Control
                required
                as="select"
                name="TRANSIT_TIC"
                value={formValues.TRANSIT_TIC}
                onChange={handleChangeAll}
              >
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="sbifNo">
              <Form.Label>SBIF No</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter SBIF No"
                name="SBIF_NO"
                value={formValues.SBIF_NO}
                onChange={handleChangeAll}
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="netKg">
              <Form.Label>NET</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Net Kg"
                name="NET"
                value={formValues.NET}
                onChange={handleChangeAll}
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="grossKg">
              <Form.Label>GROSS</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Gross Kg"
                name="BRUT"
                value={formValues.BRUT}
                onChange={handleChangeAll}
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="doviz">
              <Form.Label>CURRENCY</Form.Label>
              <Form.Control
                required
                as="select"
                name="DOVIZ"
                value={formValues.DOVIZ}
                onChange={handleChangeAll}
              >
                {currency.map(el => (
                  <option>{el}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="fatura">
              <Form.Label>TOT. INV. CUR.</Form.Label>
              <Form.Control
                required
                type="text"
                name="FATURA"
                value={formValues.FATURA}
                onChange={handleChangeAll}
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="parite">
              <Form.Label>PARITY</Form.Label>
              <Form.Control
                required
                type="text"
                name="PARITE"
                value={formValues.PARITE}
                onChange={handleChangeAll}
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="totalInv">
              <Form.Label>TOTAL USD INV.</Form.Label>
              <Form.Control
                required
                type="text"
                name="USD_DOVIZ"
                value={formValues.USD_DOVIZ}
                onChange={handleChangeAll}
              />
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Group as={Col} controlId="notlar">
            <Form.Label>NOTES</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              name="NOTLAR"
              value={formValues.NOTLAR}
              onChange={handleChangeAll}
            />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Mdlinv(props) {
  const [modalShow, setModalShow] = React.useState(false);

  function handleprops(val) {
    props.addInvoice(val);
    //console.log(val)
  }

  return (
    <>
      <Button variant="primary" className="btn btn-primary btn-sm btn-success header-button-top" onClick={() => setModalShow(true)}>
        ADD INVOICE
      </Button>

      <MyVerticallyCenteredModal
        customers={props.customers}
        show={modalShow}
        handleprops={handleprops}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Mdlinv;
