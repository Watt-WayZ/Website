import React from 'react';
import styles from './Button.module.css';


const Button = ({ children, onClick, primary = false, secondary = false, className = '', type = 'button', disabled = false }) => {
 const modeClass = primary ? styles.primary : secondary ? styles.secondary : styles.default;

 const disabledClass = disabled ? styles.disabled : '';

  return (
   <button 
    type={type} 
    onClick={onClick} 
    className={`${styles.btn} ${modeClass} ${disabledClass} ${className}`}
    disabled={disabled}
    data-tooltip={disabled ? "Coming Soon": null}
   >
     {children}
   </button>
 );
};


export default Button;

