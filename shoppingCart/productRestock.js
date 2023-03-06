function ProductRestock({setItems}){
    const { useState } = React;
    const [query, setQuery] = useState("products");
    const { Button } = ReactBootstrap;
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        "http://localhost:1337/api/products",
        {
          data: [],
        }
    );
    const restockProducts = (url) => {
        doFetch(url);
        const mappedData =data.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.name,
            cost: item.attributes.cost,
            country: item.attributes.country,
            instock: item.attributes.instock
          };
        })
        setItems(mappedData);
      };

    return (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            restockProducts(`http://localhost:1337/api/${query}`);
            console.log(`Restock called on ${query}`);
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Button type="submit">ReStock Products</Button>
        </form>
    );
}