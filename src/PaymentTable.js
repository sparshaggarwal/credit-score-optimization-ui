import React from 'react';

const PaymentTable = ({ payments }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment, index) => (
          <tr key={index}>
            <td>{payment.date}</td>
            <td>{payment.amount}</td>
            <td>{payment.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentTable;
