import React from "react";
import products from "../products";
import Product from "../components/Product";
import { Col, Row } from "react-bootstrap";

function Home() {
  console.log(products);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
