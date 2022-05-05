import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addBoughtStock}) {
  const stocksToDisplay = stocks.map(stock => {
    // console.log("stock:", stock)
    return (<Stock stock={stock} key={stock.id} addBoughtStock={addBoughtStock}/>)})
  
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
