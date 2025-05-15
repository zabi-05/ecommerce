// pages/ConfirmationPage.js
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const { state } = useLocation();
  const orderDetails = state?.orderDetails || {};

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  return (
    <div className="confirmation-page">
      <h1>Order Confirmed!</h1>
      <div className="confirmation-details">
        <p>Thank you for your purchase, {orderDetails.name}!</p>
        <p>Estimated delivery date: {deliveryDate.toLocaleDateString()}</p>
        <div className="shipping-info">
          <h3>Shipping Address:</h3>
          <p>{orderDetails.address}</p>
          <p>{orderDetails.city}, {orderDetails.postalCode}</p>
        </div>
      </div>
    </div>
  );
};
export default ConfirmationPage