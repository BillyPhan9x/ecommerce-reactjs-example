import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { DATA } from "../DATA";
import { addItem, removeItem } from "../redux/actions/cart-actions";
import priceFormat from "../util/priceFormat";

const ProductDetail = () => {
  // To change the text of Button, we can useState Hook
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  //  Now we need a product id which is pass from the product page.
  const productId = useParams();
  // console.log("productId", productId);

  const productDetail = DATA.filter((item) => item._id.$oid === productId.id);
  // console.log("productDetail", productDetail);
  const product = productDetail[0];
  // console.log(product);

  // we need to store useDispatch in a variable
  const dispatch = useDispatch();

  const handleChangeTextButtonCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(removeItem(product));
      setCartBtn("Add to Cart");
    }
  };

  // for (const key in product) {
  //   console.log(key);
  //   const isImgKey = key.find((x) => x === "img1");
  //   console.log("isImgKey", isImgKey);
  //   console.log(product[key]);
  // }

  // const arrKeyProduct = Object.keys(product);
  // console.log("arrKeyProduct", arrKeyProduct);
  // function filterItems(arr, query) {
  //   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  // }

  // const imagesProduct = filterItems(arrKeyProduct, "img");
  // console.log("imagesProduct", imagesProduct);
  // console.log("imagesProduct", imagesProduct[product]);

  const imagesProduct = [
    product.img1,
    product.img2,
    product.img3,
    product.img4,
  ];

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row product">
          <div className="col-md-2 c-flex-c">
            {imagesProduct.map((img, index) => (
              <div className="my-2" key={index}>
                <img src={img} alt={product.name} height={150} width={200} />
              </div>
            ))}
          </div>
          <div className="col-md-5 mt-2">
            <img
              src={product.img1}
              alt={product.name}
              height={650}
              width="100%"
            />
          </div>
          <div className="col-md-5 mt-2">
            <h1 className="display-5 fw-bold">{product.name}</h1>
            <hr />
            <h2 className="my-4">{priceFormat(product.price)}</h2>
            <p className="lead">{product.short_desc}</p>
            <button
              className="btn btn-outline-dark my-5 w-50"
              onClick={() => handleChangeTextButtonCart(product)}
            >
              <i className="fa fa-shopping-cart me-1"></i>
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
