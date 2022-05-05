import React from "react";

function BoughtStock({boughtStock, boughtStock:{id, name, ticker, price, type}}) {

    const handleDeleteClick = () => {
        console.log("delete!")
    }

    return (
        <div>
          <div className="card" onClick={e => handleDeleteClick(e)}>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{price}</p>
            </div>
          </div>
        </div>
      );

}

export default BoughtStock;