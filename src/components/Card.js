import { BsFillBagFill } from "react-icons/bs";
import { useState } from "react";
import "./modal.css";

const Card = ({ img, title,star, reviews, prevPrice, newPrice,description,usescases}) => {
  const [modal, setmodal] = useState(false)
  const toggleModal=() =>{
    setmodal(!modal);
  }
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
    <div className="MODAL">
      {modal && (
          <div className="modal">
            <div className="overlay"
            onClick={toggleModal}></div>
            <div className="modal-content">
              <h2>Description</h2>
              <p>{description}</p>
              <br></br>
              <h2>Use Cases</h2>
              <p>{usescases}</p>
              <button className="close-modal"
              onClick={toggleModal}>
                CLOSE
              </button>
            </div>
        </div>
        )}
    </div>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="total-reviews">
            <span>{description}</span>
          </section>
          <section className="button-a">
          <span onClick={toggleModal}>Read More</span>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
