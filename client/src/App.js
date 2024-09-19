// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import { useSelector,useDispatch } from "react-redux";
import { SetPortfolioData } from "./redux/rootSlice";

function App() {
  const {loading,portfolioData}=useSelector((state)=>state.root);
  const dispatch=useDispatch();
  const getPortfolioData=async()=>{
    try{
      const response=await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
    }catch(error)
    {
      console.log(error);
    }
  }
  const [showLoading, setShowLoading] = useState(false);

 
  useEffect(() => {
    getPortfolioData();
  }, []);

  useEffect(()=>{
    console.log(portfolioData);
  },[portfolioData]);
  return (
    <Router>
      {showLoading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
