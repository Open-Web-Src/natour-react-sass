import React from 'react';
import './styles.scss';

const Button = ({href, text, className}) => {
    return (
        <a href={href} className={`btn ${className}`}>{text}</a>
    );
}

export default Button;