import { useLocation, Link } from 'react-router-dom';
import EasyPaisaPayment from './EasyPaisaPayment';

const ConfirmationPage = () => {
  const location = useLocation();
  const total = location.state?.orderTotal || 0;

  return (
    <div className="confirmation-page">
      <h1>Thank You for Your Order!</h1>
      <p>Your total payment was: <strong>{total.toFixed(2)} pkr</strong></p>
          <EasyPaisaPayment />

      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default ConfirmationPage;
