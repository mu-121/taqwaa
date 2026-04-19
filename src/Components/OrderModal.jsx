import React, { useState } from 'react';
import './OrderModal.css';

const OrderModal = ({ isOpen, orderDetails, onClose, onBack }) => {
  if (!isOpen || !orderDetails) return null;

  const { product, quantity, totalItemPrice } = orderDetails;
  const [selectedPayment, setSelectedPayment] = useState('CASH ON DELIVERY');
  const [notes, setNotes] = useState('');

  const PAYMENT_METHODS = [
    { id: 'COD', label: 'CASH ON DELIVERY', icon: '/Images/HeroSection/cod.svg' },
    { id: 'CARD', label: 'DEBIT/CREDIT CARD', icon: '/Images/HeroSection/debit.svg' },
    { id: 'JAZZCASH', label: 'JAZZCASH', icon: '/Images/HeroSection/jazzcash.svg' },
    { id: 'EASYPAISA', label: 'EASYPAISA', icon: '/Images/HeroSection/easypaisa.svg' }
  ];

  const handleBackdropClick = (e) => {
    if (e.target.className === 'order_modal__overlay') {
      onClose();
    }
  };

  const handlePlaceOrder = () => {
    console.log('Final Order Submitted:', {
      ...orderDetails,
      paymentMethod: selectedPayment,
      notes: notes
    });
    alert('Order Placed Successfully!');
    onClose();
  };

  return (
    <div className="order_modal__overlay" onClick={handleBackdropClick}>
      <div className="order_modal__container">
        <div className="order_modal__section_group">
          <h3 className="order_modal__section_title">DROP ZONE NOTES</h3>
          <div className="order_modal__notes_container">
            <textarea
              className="order_modal__textarea"
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        <div className="order_modal__section_group">
          <h3 className="order_modal__section_title">PAYMENT METHOD</h3>
          <p className="order_modal__section_subtitle">
            By choosing payment, you agree to the refund transfer policy.
          </p>
          <div className="order_modal__payment_list">
            {PAYMENT_METHODS.map((method) => (
              <label key={method.id} className="order_modal__payment_option">
                <input
                  type="radio"
                  name="payment"
                  value={method.label}
                  checked={selectedPayment === method.label}
                  onChange={() => setSelectedPayment(method.label)}
                />
                <span className="order_modal__radio_custom"></span>
                <span className="order_modal__payment_label">{method.label}</span>
                <div className="order_modal__payment_icon_wrapper">
                  <img src={method.icon} alt={method.label} className="order_modal__payment_icon" />
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="order_modal__section_group">
          <h3 className="order_modal__section_title">TOTAL</h3>
          <p className="order_modal__delivery_time">Estimated Delivery Time 45 Mins</p>
          <div className="order_modal__summary_row">
            <span>{quantity} x {product.name.toUpperCase()}</span>
            <span className="order_modal__price">Rs. <span className="order_modal__price_val">{totalItemPrice.toLocaleString()}</span></span>
          </div>
          <div className="order_modal__summary_row">
            <span>DISCOUNT</span>
            <span className="order_modal__price">Rs. <span className="order_modal__price_val">0</span></span>
          </div>
          <hr className="order_modal__divider" />
        </div>

        <div className="order_modal__due_payment_row">
          <span className="order_modal__due_label">DUE PAYMENT</span>
          <span className="order_modal__due_amount">Rs. <span className="order_modal__due_amount_val">{totalItemPrice.toLocaleString()}</span></span>
        </div>

        <div className="order_modal__footer">
          <button className="order_modal__place_order_btn" onClick={handlePlaceOrder}>
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
