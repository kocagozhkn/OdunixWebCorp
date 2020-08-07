import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import Mdlinv from "./Mdlinv";

export default function Invoices({ invoices, newInvoice, customers,upDateInvoice }) {
  //console.log(typeof invoices)

  /*const [allInvoice, setInvices] = useState([]);

  
  useEffect(() => {
 
  setInvices(invoices)
  
  }, [invoices]); // Only re-run the effect if count changes
*/
  //console.log(invoices);
  const [editMode, setEditMode] = useState("");
  const [invoiceList, setInvoiceList] = useState([
    {
      _id: "",
      company: "",
      country: "",
      address: "",
      currency: ""
    }
  ]);
  function addInvoice(val) {
    newInvoice(val);
  }

/* 
invoiceDate: { type: Date },
  company: { type: String },
  country: { type: String },
  transCountry: { type: String },
  sbifNo: { type: Number },
  sbifDate: { type: Date },
  net: { type: Number },
  gross: { type: Number },
  currency: { type: String },
  totalInvoice: { type: Number },
  parity: { type: Number },
  totalUsdInvoice: { type: Number },
  notes: { type: String }
*/
  function openEditMode(val) {
    setEditMode(val);
    const comp = invoices.filter(el => el._id === val);
    //console.log(comp)
    setInvoiceList({
      _id:comp[0]._id,invoiceNo: comp[0].invoiceNo,
      invoiceDate: comp[0].invoiceDate,
      company: comp[0].company,
      country:comp[0].country,
      transCountry: comp[0].currency,
      sbifNo: comp[0].sbifNo,
      net: comp[0].net,
      gross:comp[0].gross,
      currency: comp[0].currency,
      totalInvoice: comp[0].totalInvoice,
      parity: comp[0].parity,
      totalUsdInvoice:comp[0].totalUsdInvoice,
      notes: comp[0].notes
    });
  }
  function cancelEditMode() {
    setEditMode("");
  }
  function saveForm() {
    upDateInvoice(invoiceList)
    //console.log(customerList);
    setEditMode("");
    
  }
function deleteCustomer(){
  
}

  function handleChangeAll(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    //console.log(value);
    if (name === "INVOICE_NO") {
      setInvoiceList({ ...invoiceList, invoiceNo: value });
    } else if (name === "INVOICE_DATE") {
      setInvoiceList({ ...invoiceList, invoiceDate: value });
    } else if (name === "COMPANY") {
      setInvoiceList({ ...invoiceList, company: value });
    } else if (name === "COUNTRY") {
      setInvoiceList({ ...invoiceList, country: value });
    }else if (name === "TRANS_COUNTRY") {
      setInvoiceList({ ...invoiceList, transCountry: value });
    }else if (name === "SBIF_NO") {
      setInvoiceList({ ...invoiceList, sbifNo: value });
    }else if (name === "NET") {
      setInvoiceList({ ...invoiceList, net: value });
    }else if (name === "GROSS") {
      setInvoiceList({ ...invoiceList, gross: value });
    }else if (name === "CURRENCY") {
      setInvoiceList({ ...invoiceList, currency: value });
    }else if (name === "TOTAL_INVOICE") {
      setInvoiceList({ ...invoiceList, totalInvoice: value });
    }else if (name === "PARITY") {
      setInvoiceList({ ...invoiceList, parity: value });
    }else if (name === "TOTAL_USD") {
      setInvoiceList({ ...invoiceList, totalUsdInvoice: value });
    }else if (name === "NOTES") {
      setInvoiceList({ ...invoiceList, notes: value });
    }
  }

  const tableElements = () =>
    invoices.map(el => {
      return (
        <Fragment key={el._id}>
          <tr>
            <td>#</td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="INVOICE_NO"
                  value={invoiceList.invoiceNo}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.invoiceNo}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="INVOICE_DATE"
                  value={invoiceList.invoiceDate}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.invoiceDate}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="COMPANY"
                  value={invoiceList.company}
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
                  name="COUNTRY"
                  value={invoiceList.country}
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
                  name="TRANS_COUNTRY"
                  value={invoiceList.transCountry}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.transCountry}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="SBIF_NO"
                  value={invoiceList.sbifNo}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.sbifNo}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="NET"
                  value={invoiceList.net}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.net}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="GROSS"
                  value={invoiceList.gross}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.gross}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="CURRENCY"
                  value={invoiceList.currency}
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
                  name="TOTAL_INVOICE"
                  value={invoiceList.totalInvoice}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.totalInvoice}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="PARITY"
                  value={invoiceList.parity}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.parity}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="TOTAL_USD"
                  value={invoiceList.totalUsdInvoice}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.totalUsdInvoice}</span>
              )}
            </td>
            <td>
              {editMode === el._id ? (
                <Form.Control
                  type="text"
                  name="NOTES"
                  value={invoiceList.notes}
                  onChange={handleChangeAll}
                />
              ) : (
                <span>{el.notes}</span>
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
        </Fragment>
      );
    });

  //console.log(invoices.length)

  return (
    <Container className="my-2" fluid>
      <Row className=" justify-content-md-center">
        <Col md="auto">
          <Container className="my-3">
            <Mdlinv
              className="my-2"
              customers={customers}
              addInvoice={addInvoice}
            />
          </Container>
          {invoices.length === 0 ? (
            <h1>ADD INOVICE</h1>
          ) : (
            <Table striped bordered hover size="sm" responsive="md">
              <thead>
                <tr>
                  <th>#</th>
                  <th>INV NO</th>
                  <th>INV DATE</th>
                  <th>COMPANY</th>
                  <th>COUNTRY</th>
                  <th>TRANS. COUNTRY</th>
                  <th>SBIF NO</th>

                  <th>NET</th>
                  <th>GROSS</th>
                  <th>CURRENCY</th>
                  <th>TOAC</th>
                  <th>PARITY</th>
                  <th>TOAUSD</th>
                  <th>NOTES</th>
                  <th>EDIT</th>
                </tr>
              </thead>
              <tbody>{tableElements()}</tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
}
/*    
              company: "Motor Odunix Corp"
country: "Turkiye"
currency: "TRY"
gross: 12655
invoiceDate: "2015-05-25T00:00:00.000Z"
invoiceNo: 127588
net: 10525
notes: "hell yaaa"
parity: 1
sbifNo: 12344
totalInvoice: 10522
totalUsdInvoice: 10522
transCountry: "-"
              
              */

/* 
              
              
                          {invoices.map(el => {
                return (
                  <React.Fragment key={el._id}>
                    <tr >
                      <td>#</td>
                      <td>{el.invoiceNo}</td>
                      <td>{el.invoiceDate}</td>
                      <td>{el.company}</td>
                      <td>{el.country}</td>
                      <td>{el.transCountry}</td>
                      <td>{el.sbifNo}</td>
                      <td>{el.SBIF_TARIH}</td>
                      <td>{el.net}</td>
                      <td>{el.gross}</td>
                      <td>{el.currency}</td>
                      <td>{el.totalInvoice}</td>
                      <td>{el.parity}</td>
                      <td>{el.totalUsdInvoice}</td>
                      <td>{el.notes}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
              
              
              */
