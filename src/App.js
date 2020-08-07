import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Incomes from "./components/Incomes";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Customers from "./components/Customers";
import axios from "axios";
//import { Container } from "react-bootstrap";
import Layout from "./layout/layout";
import NavigBar from "./components/NavigBar";

import Invoices from "./components/Invoices";
//import { invoices, companies } from "./data/invdata";
import { Row, Col } from "react-bootstrap";
//import Sidebar from "./components/sidenavbar"

/*const array = invoices.filter(function(currentObject) {
  if (currentObject.FIRMA in newCom) {
      return false;
  } else {
      newCom[currentObject.FIRMA] = true;
      return true;
  }
}).map(el=>{
  return companies.push({COMPANY:el.FIRMA})
})*/

export default function App() {
  const [allInvoice, setInvices] = useState([]);
  const [allCustomers, setCustomers] = useState([]);
const [allIncomes, setIncomes] = useState([])
  useEffect(() => {
    //setInvices(invoices);
    //setCustomers(companies);
    ///console.log(invoices);
    fetcCustomers();
    fetcInvoices();
    fetcIncomes()
  }, []); // Only re-run the effect if count changes

  const fetcCustomers = async () => {
    const res = await fetch(
      "https://fittingentirebrain--hakankocagoz.repl.co/routes"
    );
    const data = await res.json();
    setCustomers(data);
  // console.log(data);
  };
  const fetcIncomes = async () => {
    const res = await fetch(
      "https://fittingentirebrain--hakankocagoz.repl.co/routes/incomes"
    );
    const data = await res.json();
    setIncomes(data);
  // console.log(data);
  };
  const fetcInvoices = async () => {
    const res = await fetch(
      "https://fittingentirebrain--hakankocagoz.repl.co/routes/invoices"
    )
    const data = await res.json();
    setInvices(data);
    //console.log(data);
  };


  function addNewInvoice(value) {
    //invoices.push(value);
/* 


BRUT: "22"
DOVIZ: "EUR"
FATURA: "222"
FATURA_NO: "testeeeeerer"
FATURA_TARIHI: "1982-05-01"
FIRMA: "ILHAM SEKERLEME SAN. A.S."
GIDECEGI_ULKE: "Germany"
NET: "2222"
NOTLAR: "22"
PARITE: "22"
SBIF_NO: "2222"
SBIF_TARIH: ""
TRANSIT_TIC: "..."
USD_DOVIZ: "22"

*/
   axios
      .post("https://fittingentirebrain--hakankocagoz.repl.co/routes/postinvoice", {
        invoiceNo: value.FATURA_NO,
      invoiceDate: value.FATURA_TARIHI,
      company: value.FIRMA,
      country:value.GIDECEGI_ULKE,
      transCountry: value.GIDECEGI_ULKE,
      sbifNo: value.SBIF_NO,
      net: value.NET,
      gross:value.BRUT,
      currency: value.DOVIZ,
      totalInvoice: value.FATURA,
      parity: value.PARITE,
      totalUsdInvoice:value.USD_DOVIZ,
      notes: value.NOTLAR
      })
      .then(function(response) {
        fetcInvoices();
      })
      .catch(function(error) {
        console.log(error);
      });

    //setInvices([...allInvoice, value]);

    //setInvices(invoices)
    //console.log(allInvoice);
  }

function newIncome(value){
  /* 
  DDRESS: " "
AMOUNT: "6666"
COMPANY: " "
COUNTRY: " "
CURRENCY: "EUR"
ID: "5f2561f605fafe0236cf832e"
  
  */
 console.log(value)
  axios
  .post(
    `https://fittingentirebrain--hakankocagoz.repl.co/routes/postincome/${
      value.ID
    }`,
    {
      
      currency: value.CURRENCY,
      amount: value.AMOUNT,
      incomeDate: value.TARIH,
    
    }
  )
  .then(function(response) {
    fetcCustomers();
  })
  .catch(function(error) {
    console.log(error);
  });
}

  function addNewCustomer(value) {
    axios
      .post("https://fittingentirebrain--hakankocagoz.repl.co/routes/post", {
        company: value.COMPANY,
        address: value.ADDRESS,
        country: value.COUNTRY,
        currency: value.CURRENCY,
        debit: 0,
        credit: []
      })
      .then(function(response) {
        fetcCustomers();
      })
      .catch(function(error) {
        console.log(error);
      });

    //const isAv = value.find(el=>el.COMPANY)

    /*const newC = value.COMPANY;
    const isAv = allCustomers.find(el => el.COMPANY === newC);

    if (!isAv) {
      setCustomers([...allCustomers, value]);
      dana()
    } else {
      alert("already exist");

    }*/
  }

  function deleteCustomer(value) {
    axios
      .delete(
        `https://fittingentirebrain--hakankocagoz.repl.co/routes/delete/${value}`
      )
      .then(function(response) {
        fetcCustomers();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function deleteIncome(value) {

    console.log(value)
    axios
      .delete(
        `https://fittingentirebrain--hakankocagoz.repl.co/routes/deleteincome/${value}`
      )
      .then(function(response) {
        fetcCustomers();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function upDateCustomer(value) {
    axios
      .put(
        `https://fittingentirebrain--hakankocagoz.repl.co/routes/update/${
          value._id
        }`,
        {
          company: value.company,
          address: value.address,
          country: value.country,
          currency: value.currency,
      
        }
      )
      .then(function(response) {
        fetcCustomers();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function upDateInvoice(value) {
/* 

company: "ILHAM SEKERLEME SAN. A.S."
country: "Germany"
currency: "EUR"
gross: 22
invoiceDate: "1982-05-01T00:00:00.000Z"
invoiceNo: "1982-05-01T00:00:00.000Z"
net: 2222
notes: "22"
parity: 22
sbifNo: 2222
totalInvoice: 222
totalUsdInvoice: 22
transCountry: "EUR"
_id: "5f1d10bba86043005825525b"
*/
    console.log(value)
    axios
      .put(
        `https://fittingentirebrain--hakankocagoz.repl.co/routes/updateinvoice/${
          value._id
        }`,
        {
          invoiceNo: value.invoiceNo,
          invoiceDate: value.invoiceDate,
          company: value.company,
          country:value.country,
          transCountry: value.country,
          sbifNo: value.sbifNo,
          net: value.net,
          gross:value.gross,
          currency: value.currency,
          totalInvoice: value.totalInvoice,
          parity: value.parity,
          totalUsdInvoice:value.totalUsdInvoice,
          notes: value.notes
        }
      )
      .then(function(response) {
        fetcInvoices();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Router>
            <Layout>
              <NavigBar />

              <Switch>
                <Route exact path="/" render={props => (
                    <Home
                      {...props}
                      invoices={allInvoice}
                      incomes={allIncomes}
                      
                    />
                  )} />
                <Route path="/Incomes"render={props => (
                  <Incomes
                    {...props}
                    incomes={allIncomes}
                    customers={allCustomers}
                    newIncome={newIncome}
                    deleteIncome={deleteIncome}
                  />
                )} 
              />
                <Route path="/contact" component={Contact} />
                <Route
                  path="/customers"
                  render={props => (
                    <Customers
                      {...props}
                      customers={allCustomers}
                      newCustomer={addNewCustomer}
                      deleteCustomer={deleteCustomer}
                      upDateCustomer={upDateCustomer}
                    />
                  )}
                />
                <Route
                  path="/invoices"
                  render={props => (
                    <Invoices
                      {...props}
                      invoices={allInvoice}
                      customers={allCustomers}
                      newInvoice={addNewInvoice}
                      upDateInvoice={upDateInvoice}
                    />
                  )}
                />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Router>
        </Col>
      </Row>
    </React.Fragment>
  );
}
