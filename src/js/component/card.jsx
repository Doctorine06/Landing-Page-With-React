import React from "react";

const Card =() => {
    return (
        <div className="card" h-40>
  <img src="https://picsum.photos/70/100.jpg" className="card-img-top" alt="https://picsum.photos/70/100" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
)
    }
    export default Card;