// TextDirection.js
import React from 'react';

const TextDirection = ({ language, children }) => {
    const textDirection = language === 'ar' ? 'rtl' : 'ltr';
    return <div className={`text-box ${textDirection}`}>{children}</div>;
};

export default TextDirection;
