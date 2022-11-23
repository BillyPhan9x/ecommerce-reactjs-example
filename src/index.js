import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// ❗ Cài đặt Redux
// ❗ Thêm gói react-redux cho UD
// - Đây là gói giúp React app kết nối đến Reducer Function và Store trong Redux 1 cách đơn giản hơn.
// VD: Giúp cho việc đăng ký các thành phần vào Redux store trở nên đơn giản hơn.
