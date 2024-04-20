import { colors } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Emojis = () => {
  const [products, setProducts] = useState([]);

  const [selectedProductId, setSelectedProductId] = useState(0);  // 10

  const [selectedProduct, setSelectedProduct] = useState({});
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // To Load All products at once only
  useEffect(() => {
    GetProducts();
  }, []);

  // Depency array => fires when the dependent state changes
  useEffect(() => {
    setSelectedProduct(products[selectedProductId]);
  }, [selectedProductId]);

  // Sample product item
  const singleProduct = {
    brand: "Product Brand",
    category: "Product category",
    description: "Product Desc",
    discountPercentage: 12.96,
    id: 1,
    price: 549,
    rating: 4.69,
    stock: 94,
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    title: "Product title",
  };

  const GetProducts = async () => {
    try {
      const res = await axios("https://dummyjson.com/products");
      setProducts(res.data.products);
      // console.log(res.data.products[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        {products.length > 0 && (
          <div className="pdetails">

            <div className="images" style={{ width: "100%" }}>
              <img
                style={{ borderRadius: "20px"}}
                width={"25%"}
                src={selectedProduct["thumbnail"]}
                alt={selectedProduct["title"]}
              />
            </div>
            <h1>{selectedProduct["brand"]}</h1>
            <p style={{ color: "gray" }}>{selectedProduct["description"]}</p>
            <p style={{ color: "black" }}>$ {selectedProduct["price"]}</p>

          </div>
        )}
        <div className="button">
          {products.length > 0 &&
            products.map((val, index) => {
              return (
                <button key={index} onClick={() => setSelectedProductId(index)}>
                  {index + 1}
                </button>
              );
            })}
        </div>
      </div>
    </>
  );
};

export { Emojis };
