function CartList({ setItems, setCart, setTotal }) {
    const { items, cart } = React.useContext(ProductContext);
    const { Accordion, Button } = ReactBootstrap;

    const deleteCartItem = (index) => {
        const newItems = [...items];
        let newCart = cart.filter((item, i) => index != i);
        let newTotal = newCart.reduce((accu, item) => accu += item.cost, 0);
        const itemIndex = items.findIndex(
            (item) => item.name == cart[index].name
        );
        if (itemIndex >= 0) newItems[itemIndex].instock++;
        setItems(newItems);
        setCart(newCart);
        setTotal(newTotal);
    };

    let cartList = cart
        .reduce((accu, item) => {
            const cartIndex = accu.findIndex((accumItem) => accumItem.name == item.name);
            if (cartIndex < 0) {
                return [...accu, { name: item.name, count: 1 }];
            } else {
                accu[cartIndex].count++;
                return accu;
            }
        }, [])
        .map((item, index) => {
            return (
                <li key={index} style={{display: "flex", justifyContent: "space-between", margin: "0.2rem"}}>
                    <div>{item.name} : {item.count}</div>
                    <Button onClick={() => deleteCartItem(index)}>X</Button>
                </li>
            );
        });

    return (
        <Accordion>
            <Accordion.Item key={0} eventKey={0}>
                <Accordion.Header>Cart Contents</Accordion.Header>
                <Accordion.Body>
                    <ul>{cartList}</ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
