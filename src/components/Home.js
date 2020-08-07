import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";

export default function Home({ invoices, incomes }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (invoices.length !== 0) return setLoading(false);
  }, [invoices]);
  console.log(loading);
  return (
    <Container className="mx-auto my-5">
      <Row className="justify-content-center">
        <Col md="auto">
          <Card
            bg={"primary"}
            text={"white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Total Invoice</Card.Header>
            <Card.Body>
              <Card.Title> 2020 </Card.Title>
              {loading === true ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <Card.Text>
                  <span>
                    <h1>
                      {invoices
                        .map((el) => el.totalUsdInvoice)
                        .reduce(function (accu, el) {
                          return accu + el;
                        }, 0)
                        .toLocaleString(undefined, {
                          style: "currency",
                          currency: "USD",
                        })}
                    </h1>
                  </span>
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card
            bg={"success"}
            text={"white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Total Income</Card.Header>
            <Card.Body>
              <Card.Title> 2020 </Card.Title>
              {loading === true ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <Card.Text>
                  <span>
                    <h1>
                      {incomes
                        .map((el) => el.amount)
                        .reduce(function (accu, el) {
                          return accu + el;
                        }, 0)
                        .toLocaleString(undefined, {
                          style: "currency",
                          currency: "USD",
                        })}
                    </h1>
                  </span>
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

/* 

<Card.Text>
                  {invoices
                    .map(el => el.totalUsdInvoice)
                    .reduce(function(accu, el) {
                      return accu + el;
                    }, 0)}
                </Card.Text>


*/
