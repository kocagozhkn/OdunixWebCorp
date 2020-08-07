import React, {  useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import CustomerMdl from "./CustomerMdl";

const Customers = ({ customers, newCustomer, deleteCustomer,upDateCustomer }) => {
  //console.log(newCustomer)

  /*const [allInvoice, setInvices] = useState([]);

  
  useEffect(() => {
 
  setInvices(invoices)
  
  }, [invoices]); // Only re-run the effect if count changes
*/ const [
    isLoading,
    setLoading
  ] = useState(true);

  const [editMode, setEditMode] = useState("");
  const [customerList, setCustomerList] = useState([{
    _id:"",
    company:"",
    country:"",
    address:"",
    currency:""
  }]);
  useEffect(() => {
    if (customers) {
      setLoading(false);
    }

    // editCustomer()
  }, []);
  //console.log(customerList);
  //console.log(isLoading);

  function addCustomer(val) {
    newCustomer(val);
  }

  function openEditMode(val) {
    setEditMode(val);
    const comp = customers.filter(el => el._id === val);
    //console.log(comp)
    setCustomerList({
      _id:comp[0]._id,
      company:comp[0].company,
      country:comp[0].country,
      address:comp[0].address,
      currency:comp[0].currency
    });
  }
  function cancelEditMode() {
    setEditMode("");
  }
  function saveForm() {
    upDateCustomer(customerList)
    //console.log(customerList);
    setEditMode("");
    
  }

  const Loading = () => (
    <div>
      <h1>LOADING......</h1>
    </div>
  );

  function handleChangeAll(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    //console.log(value);
    if (name === "COMPANY") {
      setCustomerList({ ...customerList, company:value });
    } else if (name === "ADDRESS") {
      setCustomerList({ ...customerList, address:value });
    } else if (name === "COUNTRY") {
      setCustomerList({ ...customerList, country:value });
    } else if (name === "CURRENCY") {
      setCustomerList({ ...customerList, currency:value });
    }

    console.log(setCustomerList)
  }

  /*const EditInput = ({ element }) => (
    <Form.Control
      required
      placeholder="Enter Company Address"
      type="text"
      name="ADDRESS"
      value={element}
      onChange={handleChangeAll}
    />
  );*/
  /* 
<EditInput element={el.company} />
              <EditInput element={el.address} />
              <EditInput element={el.country} />
              <EditInput element={el.currency} />
              <EditInput element={el.debit} />
              <EditInput element={el.credit} />
*/
  const tableElements = () =>
    customers.map(el => {
      return (
        <React.Fragment key={el._id}>
          <tr>
            <td>#</td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="COMPANY"
                  value={customerList.company}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.company}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="ADDRESS"
                  value={customerList.address}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.address}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="COUNTRY"
                  value={customerList.country}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.country}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="CURRENCY"
                  value={customerList.currency}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.currency}</span>
              )}
            </td>

            <td>{el.debit}</td>
            <td> {el.credit
              .map((x) => x.amount)
              .reduce(function (accu, y) {
                return accu + y;
              }, 0)
              .toLocaleString(undefined, {
                style: "currency",
                currency: "USD",
              })}</td>
            <td>
              {editMode === el._id ? (
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => cancelEditMode()}
                >
                  Cancel
                </Button>
              ) : (
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteCustomer(el._id)}
                >
                  Del
                </Button>
              )}{" "}
              {editMode === el._id ? (
                <Button variant="success" size="sm" onClick={() => saveForm()}>
                  Save
                </Button>
              ) : (
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => openEditMode(el._id)}
                >
                  Edit
                </Button>
              )}
            </td>
          </tr>
        </React.Fragment>
      );
    });

  return (
    <Container className="my-2" fluid>
      <Row className=" justify-content-md-center">
        <Col md="auto">
          <Container className="my-3 ">
            <CustomerMdl className="my-2" addCustomer={addCustomer} />
          </Container>
          {!isLoading ? (
            <Table striped bordered hover size="sm" responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>COMPANY</th>
                  <th>ADDRESS</th>
                  <th>COUNTRY</th>
                  <th>CURRENCY</th>
                  <th>DEBIT</th>
                  <th>CREDIT</th>
                  <th>EDIT</th>
                </tr>
              </thead>
              <tbody>{tableElements()}</tbody>
            </Table>
          ) : (
            <Loading />
          )}
        </Col>
      </Row>
    </Container>
  );
};
/*    
         COMPANY: "NT AMMARI",
    ADDRESS: "KOSOVA",
    COUNTRY: "KOSOVA",
    CURRENCY: "EUR",
    DEBIT: "0",
    CREDIT: "0"      
              
              */
export default Customers;
