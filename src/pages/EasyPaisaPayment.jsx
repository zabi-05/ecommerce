import { useState } from 'react';
import { useToast } from '../context/ToastContext';
import Button from '../components/Button';

const EasyPaisaPayment = ({ total }) => {
  const { addToast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState('easypaisa');
  const [isProcessing, setIsProcessing] = useState(false);

  const easypaisaNumber = "0300-123-4567";
  const jazzcashNumber = "0300-765-4321";

  const handlePayment = () => {
    setIsProcessing(true);
    addToast('Payment instructions sent to your phone!', 'success');
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      addToast('Payment completed successfully!', 'success');
    }, 2000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    addToast('Number copied to clipboard!', 'success');
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h3>Complete Your Payment</h3>
        <p>Choose your preferred payment method</p>
      </div>

      <div className="payment-methods">
        <div className="payment-method-tabs">
          <button 
            className={`payment-tab ${paymentMethod === 'easypaisa' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('easypaisa')}
          >
            <span className="payment-icon">📱</span>
            EasyPaisa
          </button>
          <button 
            className={`payment-tab ${paymentMethod === 'jazzcash' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('jazzcash')}
          >
            <span className="payment-icon">💳</span>
            JazzCash
          </button>
        </div>

        <div className="payment-content">
          {paymentMethod === 'easypaisa' && (
            <div className="payment-details">
              <div className="payment-info">
                <h4>Pay with EasyPaisa</h4>
                <p>Send PKR {total.toLocaleString()} to the following number:</p>
                <div className="payment-number">
                  <span className="number">{easypaisaNumber}</span>
                  <Button 
                    variant="outline" 
                    size="small"
                    onClick={() => copyToClipboard(easypaisaNumber)}
                  >
                    Copy
                  </Button>
                </div>
                <div className="qr-section">
                  <p>Or scan this QR code:</p>
                  <div className="qr-placeholder">
                    <div className="qr-code">
                      <div className="qr-pattern"></div>
                      <div className="qr-pattern"></div>
                      <div className="qr-pattern"></div>
                      <div className="qr-pattern"></div>
                    </div>
                    <p className="qr-text">EasyPaisa QR Code</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'jazzcash' && (
            <div className="payment-details">
              <div className="payment-info">
                <h4>Pay with JazzCash</h4>
                <p>Send PKR {total.toLocaleString()} to the following number:</p>
                <div className="payment-number">
                  <span className="number">{jazzcashNumber}</span>
                  <Button 
                    variant="outline" 
                    size="small"
                    onClick={() => copyToClipboard(jazzcashNumber)}
                  >
                    Copy
                  </Button>
                </div>
                <div className="qr-section">
                  <p>Or scan this QR code:</p>
                  <div className="qr-placeholder">
                    <div className="qr-code">
                      <div className="qr-pattern"></div>
                      <div className="qr-pattern"></div>
                      <div className="qr-pattern"></div>
                      <div className="qr-pattern"></div>
                    </div>
                    <p className="qr-text">JazzCash QR Code</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="payment-actions">
          <Button 
            variant="primary" 
            size="large"
            onClick={handlePayment}
            disabled={isProcessing}
            className="payment-btn"
          >
            {isProcessing ? 'Processing...' : 'Complete Payment'}
          </Button>
          <p className="payment-note">
            After payment, you'll receive a confirmation SMS within 2-3 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};
export default EasyPaisaPayment;