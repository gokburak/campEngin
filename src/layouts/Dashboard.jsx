import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";
function Dashboard() {
  return (
    <div>
  
      <Categories/>
      <ProductList/>
    </div>
  );
}

export default Dashboard;
