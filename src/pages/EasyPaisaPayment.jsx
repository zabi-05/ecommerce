const EasyPaisaPayment = () => {
  return (
    <div className="easypaisa-payment">
      <h3>Pay with EasyPaisa</h3>
      <p>Please send the payment to this EasyPaisa number:</p>
      <p className="easypaisa-number"><strong>0300-1212121</strong></p>
      <p>Or scan this QR code to pay:</p>
      <img 
        src="/images/easypaisa-qr.png" 
        alt="EasyPaisa QR Code" 
        className="easypaisa-qr" 
      />
      <p>After payment, please complete your order.</p>
    </div>
  );
};
export default EasyPaisaPayment;