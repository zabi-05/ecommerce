import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "medium", 
  onClick, 
  disabled = false, 
  className = "",
  type = "button",
  as: Component = "button",
  ...props
}, ref) => {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    danger: "btn-danger"
  };
  const sizeClasses = {
    small: "btn-small",
    medium: "",
    large: "btn-large"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  return (
    <Component
      ref={ref}
      type={Component === "button" ? type : undefined}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Button;
