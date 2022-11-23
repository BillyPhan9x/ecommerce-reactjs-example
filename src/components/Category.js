import React, { useState } from "react";
import useFetchAPI from "../hooks/use-http";

const Category = () => {
  const { data } = useFetchAPI();
  console.log("data", data);

  const [item, setItem] = useState([]);

  const filterResult = (catItem) => {
    const result = data.filter((curData) => curData.category === catItem);
    // console.log("result", result);
    setItem(result);
  };

  console.log(data);
  return (
    <div className="container">
      <h1 className="text-center text-info">Let's Shop</h1>
      <div className="container mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3 text-start">
            <h3 className="text-dark mb-3">CATEGORIES</h3>
            <div>
              <h4 className="text-light bg-dark ps-3 py-2">APPLE</h4>
              <button
                className="btn btn-light w-100 mb-2"
                onClick={() => setItem(data)}
              >
                All
              </button>
            </div>

            <h5 className="text-muted bg-light ps-5 py-2">IPHONE & MAC</h5>
            <button
              className="btn btn-light w-100 mb-2"
              onClick={() => filterResult("iphone")}
            >
              Iphone
            </button>
            <button
              className="btn btn-light w-100"
              onClick={() => filterResult("ipad")}
            >
              Ipad
            </button>
            <button
              className="btn btn-light w-100 mb-2"
              onClick={() => filterResult("macbook")}
            >
              Macbook
            </button>

            <h5 className="text-muted bg-light ps-5 py-2">WIRELESS</h5>
            <button
              className="btn btn-light w-100 mb-2"
              onClick={() => filterResult("airpod")}
            >
              Airpod
            </button>
            <button
              className="btn btn-light w-100 mb-2"
              onClick={() => filterResult("watch")}
            >
              Watch
            </button>

            <h5 className="text-muted bg-light ps-5 py-2">OTHER</h5>
            <button
              className="btn btn-light w-100 mb-2"
              onClick={() => filterResult("mouse")}
            >
              Mouse
            </button>
            <button
              className="btn btn-light w-100"
              onClick={() => filterResult("keyboard")}
            >
              Keyboard
            </button>
            <button
              className="btn btn-light w-100 mb-2"
              onClick={() => filterResult("other")}
            >
              Other
            </button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {item.map((val) => (
                <div className="col-md-4 mb-4" key={val._id.$oid}>
                  <div className="card border-0">
                    <img
                      src={val.img1}
                      className="card-img-top"
                      alt={val.name}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{val.name}</h4>
                      <p className="card-text">{val.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
