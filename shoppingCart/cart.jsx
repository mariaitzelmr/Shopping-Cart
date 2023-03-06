const Products = (props) => {
  const [items, setItems] = React.useState(products);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const {
    Container,
    Row,
    Col,
  } = ReactBootstrap;
  //  Fetch Data
  const { Fragment, useEffect, useReducer } = React;

  return (
    <Container>
      <h1>React Shopping Cart</h1>
      <ProductContext.Provider value={{items: items, cart: cart}}>
        <Col>
          <Row style={{padding: "0.5rem", justifyContent: "space-between"}}>
            <ProductRestock style={{padding: "0.5rem"}} setItems={setItems} />
            <div>
              <h1 style={{marginRight: "0.5rem"}}>CheckOut {total} </h1>
              <CartList setItems={setItems} setCart={setCart} setTotal={setTotal} />
            </div>
          </Row>
          <Row>
            <h1>Product List</h1>
          </Row>
          <Row>
            <ul style={{ listStyleType: "none", display: "flex", padding: "0rem", flexFlow:"row wrap", justifyContent: "space-between"}}>
              <ProductList setCart={setCart} setItems={setItems} setTotal={setTotal} />
            </ul>
          </Row>
        </Col>
      </ProductContext.Provider>
    </Container>
  );
};
// ========================================
ReactDOM.render(<Products />, document.getElementById("root"));
