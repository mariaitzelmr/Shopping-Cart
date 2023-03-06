function ProductList({ setCart, setItems, setTotal }) {
    const {items, cart} = React.useContext(ProductContext);
    const { Card, Button } = ReactBootstrap;

    const addToCart = (e) => {
        let name = e.target.name;
        let item = items.filter((item) => item.name == name);
        let newCart = [];
        if (item[0].instock > 0) {
            newCart = [...cart, ...item];
            setCart(newCart);
            const itemIndex = items.findIndex((item) => item.name == name);
            const newItems = [...items];
            if (itemIndex >= 0)
                newItems[itemIndex].instock = newItems[itemIndex].instock - 1;
            setItems(newItems);
        } else {
            newCart = [...item];
        }
        let newTotal = newCart.reduce((accu, item) => accu += item.cost, 0);
        setTotal(newTotal);
    };

    let list = items.map((item, index) => {
        let n = index + 1049;
        let url = "https://picsum.photos/id/" + n + "/50/50";

        return (
            <li key={index}>
                <Card style={{ width: "200px", margin: "0.2rem" }}>
                    <Card.Img variant="top" src={url}></Card.Img>
                    <Card.Body>
                        <Card.Title> {item.name} </Card.Title>
                        <Card.Text>
                            Cost per item: ${item.cost} <br />
                            Origin: {item.country} <br />
                            In stock: {item.instock}
                        </Card.Text>
                        <Button
                            name={item.name}
                            type="submit"
                            onClick={addToCart}
                        >
                            Add to cart
                        </Button>
                    </Card.Body>
                </Card>
            </li>
        );
    });

    return list;
}
