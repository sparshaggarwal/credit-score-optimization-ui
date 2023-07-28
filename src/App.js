import React from 'react';
import PaymentChart from './PaymentChart';
import PaymentTable from './PaymentTable';
import PaymentData from './PaymentData'; 

const App = () => {
  // Sample payment data (replace this with your actual payment table data)

  return (
    <div>
      <h1>Payment Data Table</h1>
      <PaymentTable paymentData={PaymentData} />
      <h1>Payment Data Chart</h1>
      <PaymentChart paymentData={PaymentData} />
    </div>
  );
};

export default App;
