const Price = ({ price, className = "" }) => {
  return (
    <span className={className}>
      PKR {price.toLocaleString()}
    </span>
  );
};

export default Price;
