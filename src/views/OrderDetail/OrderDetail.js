import React from "react";
import FAKEDATA from "../../utils/fakeData";
import "./OrderDetail.scss";

const OrderDetail = () => {
  const data = FAKEDATA.FEATURED_PRODUCTS;
  return (
    <div className="OrderDetail">
      <div className="orderDetailHeader">
        <h3>Your Order Details</h3>
        <p>Order No : 102665</p>
        <span>
          A copy of your order summary has been emailed to you at
          john.doe@example.com
        </span>
      </div>
      <div className="orderDetailContent">
        <div className="orderDetailLeft">
          <h3>Order details</h3>
          <div className="orderDetailCard">
            <div className="cardLeft">
              <div className="imageContainer">
                <img src={data[0].imageUrl} alt="" />
              </div>
              <div className="detailContent">
                <div className="nameDate">
                  <p className="orderName">{data[0].name}</p>
                  <p>15-03-2021</p>
                </div>
                <p>QTY: 1</p>
              </div>
            </div>
            <div className="cardRight">
              <p>₹ {data[0].price}</p>
            </div>
          </div>
          <br />
          <hr />
          <div className="orderTotal">
            <div className="totalGroup">
              <p>Subtotal:</p>
              <p>₹ {data[0].price}</p>
            </div>
            <div className="totalGroup">
              <p>Tax:</p>
              <p>₹ {data[0].price * 0.18}</p>
            </div>
            <div className="totalGroup">
              <p>Subtotal:</p>
              <p>₹ {data[0].price + data[0].price * 0.18}</p>
            </div>
          </div>
        </div>
        <div className="orderDetailRight">
          <h3>Order Review</h3>
          <div className="orderRightContent">
            <h4>Personal Details</h4>
            <div className="nameEmail">
              <h5>Name</h5>
              <p>John Doe</p>
              <h5>Email</h5>
              <p>john.doe@gmail.com</p>
              <h5>Phone</h5>
              <p>7045525879</p>
            </div>
            <h4>Shipping</h4>
            <p className="shippingAddress">
              Zielinskiego 30 – 41, 53-345 Wroclaw, Poland
            </p>
            <h4>Payment Method</h4>
            <p>Cash on Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
