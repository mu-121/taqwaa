import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './OrderModal.css';
import { placeOrder } from '../services/api';

const OrderModal = ({ isOpen, orderDetails, onClose, onBack }) => {
  // ✅ ALL hooks first
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('CASH ON DELIVERY');
  const [notes, setNotes] = useState('');

  // ✅ AFTER hooks → safe early return
  if (!isOpen || !orderDetails) return null;

  const { product, quantity, totalItemPrice, style, drink, name, phone, address } = orderDetails;

  const PAYMENT_METHODS = [
    { id: 'COD', label: 'CASH ON DELIVERY', icon: '/Images/HeroSection/cod.svg' },
    { id: 'BANK', label: 'BANK TRANSFER', icon: '/Images/HeroSection/debit.svg' }
  ];

  const handleBackdropClick = (e) => {
    if (e.target.className === 'order_modal__overlay') {
      onClose();
    }
  };

  const handlePlaceOrder = async () => {
    try {
      setIsSubmitting(true);

      const payload = {
        customerInfo: { name: name || "", phone: phone || "", address: address || "" },
        items: [
          {
            productId: product._id || product.id,
            name: product.name,
            category: product.category || "General",
            quantity,
            price: totalItemPrice / quantity,
            style: style?.label || null,
            drink: drink?.name || null
          }
        ],
        totalAmount: totalItemPrice,
        paymentMethod: selectedPayment,
        notes: notes || ""
      };

      const response = await placeOrder(payload);
      
      const orderId = response?.order?._id || response?._id || Math.floor(1000 + Math.random() * 9000);
      const shortId = orderId.toString().slice(-6).toUpperCase();

      const messageContent = `🍕 *New Order from ${name}!*\n\n` +
        `📋 *Order ID:* #${shortId}\n` +
        `🛒 *Items:* ${quantity}x ${product.name} ${style?.label ? `(${style.label})` : ''}\n` +
        `💰 *Total:* Rs. ${totalItemPrice.toLocaleString()}\n` +
        `📍 *Address:* ${address}\n` +
        `📞 *Phone:* ${phone}\n` +
        `💳 *Payment:* ${selectedPayment}\n` +
        (notes ? `📝 *Notes:* ${notes}\n` : '') +
        (selectedPayment === 'BANK TRANSFER' ? '\n🏦 _I will share the bank transfer screenshot shortly!_' : '');

      const whatsappNumber = '923331449995'; // Replace with exact business number if different
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageContent)}`;

      window.open(whatsappUrl, '_blank');
      
      if (selectedPayment === 'BANK TRANSFER') {
        toast.success('Order Placed! Please transfer and share receipt on WhatsApp.', { duration: 6000 });
      } else {
        toast.success('Order Placed! Redirecting to WhatsApp...', { duration: 4000 });
      }
      
      onClose();
    } catch (error) {
      console.error(error);
      toast.error('Failed to place order.');
    } finally {
      setIsSubmitting(false);
    }
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

          {selectedPayment === 'BANK TRANSFER' && (
            <div className="order_modal__bank_details">
              <div className="order_modal__bank_info_card">
                <h4>MEEZAN BANK</h4>
                <div className="order_modal__bank_row">
                  <span>Account Title:</span>
                  <strong>TAQWA FOODS</strong>
                </div>
                <div className="order_modal__bank_row">
                  <span>Account No:</span>
                  <strong>0114802287</strong>
                </div>
                <div className="order_modal__bank_row">
                  <span>IBAN:</span>
                  <strong>PK69 MEZN 0003 3801 1480 2287</strong>
                </div>
                <p className="order_modal__bank_instruction">
                  Please transfer the total amount and share a screenshot of the receipt on WhatsApp (0333-1449995) for faster verification.
                </p>
              </div>
            </div>
          )}
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
          <button 
            className="order_modal__place_order_btn" 
            onClick={handlePlaceOrder}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'PLACING...' : 'PLACE ORDER'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;