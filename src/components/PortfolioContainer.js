import React from "react";
import BoughtStock from "./BoughtStock";

function PortfolioContainer({boughtStocks}) {
  console.log("boughtstocks: ", boughtStocks)
  const boughtStocksToDisplay = boughtStocks.map(boughtStock => {
    console.log("bought stock:", boughtStock, boughtStock.id)
    return (<BoughtStock boughtStock={boughtStock} key={boughtStock.id}/>)
  })
  console.log("stocks  to display: ", boughtStocksToDisplay)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        // {boughtStocksToDisplay}
      }
    </div>
  );
}

export default PortfolioContainer;
