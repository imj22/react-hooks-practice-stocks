import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [boughtStocks, setBoughtStocks] = useState([])

  const baseUrl = "http://localhost:3001"
  useEffect(() => {
    fetch(baseUrl + "/stocks")
    .then(r => r.json())
    .then(stocksData => setStocks(stocksData))
  }, [])

  const addBoughtStock = (boughtStock) => {
    const updatedBoughtStocks = [...boughtStocks, boughtStock]
    setBoughtStocks(updatedBoughtStocks)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addBoughtStock={addBoughtStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer boughtStocks={boughtStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
