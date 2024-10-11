import React from 'react';
import './LoadingPage.css'; // You can create this file for styling

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="custom-desc">Loading, please wait...</p>
    </div>
  );
};

export default LoadingPage;