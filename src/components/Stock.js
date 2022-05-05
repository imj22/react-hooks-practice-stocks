import React, {useState} from "react";

function Stock({stock, stock: {id, ticker, name, type, price}, addBoughtStock,}) {
 
  const handleStockClick = (e) => {
    addBoughtStock(stock)
  }
  
  return (
    <div>
      <div className="card" onClick={e => handleStockClick(e)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
