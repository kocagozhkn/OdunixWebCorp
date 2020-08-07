import React, {  useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import IncomesMdl from "./IncomesMdl";

const Incomes = ({ newIncome,customers,deleteIncome }) => {
//console.log(newIncome)
  /*const [allInvoice, setInvices] = useState([]);

  
  useEffect(() => {
 
  setInvices(invoices)
  
  }, [invoices]); // Only re-run the effect if count changes
*/ const [
    isLoading,
    setLoading
  ] = useState(true);

  const [editMode, setEditMode] = useState("");
  const [incomeList, setIncomeList] = useState([{
    _id: "",
    company: "",
    country: "",
    address: "",
    currency: ""
  }]);
  useEffect(() => {
    if (customers.length!==0) {
      setLoading(false);
    }

    // editCustomer()
  }, [customers]);
  //console.log(customers.length);
  //console.log(isLoading);

  function addIncome(val) {
    //console.log(val)
    newIncome(val);
  }

 /* function openEditMode(val) {
    setEditMode(val);
    const comp = customers.filter(el => el._id === val);
    //console.log(comp)
    setIncomeList({
      _id:comp[0]._id,
      company: comp[0].company,
      country: comp[0].country,
      address:comp[0].address,
      currency: comp[0].currency
    });
  }*/
  function cancelEditMode() {
    setEditMode("");
  }
  function saveForm() {
    //upDateCustomer(incomeList)
    //console.log(incomeList);
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
      setIncomeList({ ...incomeList, company: value });
    } else if (name === "CURRENCY") {
      setIncomeList({ ...incomeList, currency: value });
    } else if (name === "INCOMEDATE") {
      setIncomeList({ ...incomeList, incomeDate: value });
    } else if (name === "AMOUNT") {
      setIncomeList({ ...incomeList, amount: value });
    }
  }


  function openEditMode(val) {

    //console.log(val)
    setEditMode(val);
    const comp = customers.map(el=>el.credit.map(el=>el).filter(el => el._id === val))
    console.log(comp)
    setIncomeList({
      _id:comp[0]._id,
      company: comp[0].company,
      currency: comp[0].currency,
      incomeDate:comp[0].incomeDate,
      amount: comp[0].amount    })
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
  //console.log(customers.map(el=>el.credit.map(el=>el)))
  
    customers.map(el => {
      return (
        el.credit.filter(el=>el.amount!==null).map(el=>(

        <React.Fragment key={el._id}>
          <tr>
            <td>#</td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="COMPANY"
                  value={el.company}
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
                  name="CURRENCY"
                  value={el.currency}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.currency}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="INCOMEDATE"
                  value={el.incomeDate}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.incomeDate}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="AMOUNT"
                  value={el.amount}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.amount}</span>
              )}
            </td>

            
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
                  onClick={() => deleteIncome(el._id)}
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
        </React.Fragment>))
      );
    });

  return (
    <Container className="my-2" fluid>
      <Row className=" justify-content-md-center">
        <Col md="auto">
          <Container className="my-3 ">
          <IncomesMdl className="my-2" addIncome={addIncome} customers={customers}/>
          </Container>
          {isLoading ?  
            <Loading />: 
              <Table striped bordered hover size="sm" responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>COMPANY</th>
                  
                    <th>CURRENCY</th>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>EDIT</th>
                  </tr>
                </thead>
                <tbody>{tableElements()}</tbody>
              </Table>
            
          }
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
export default Incomes;


/**/