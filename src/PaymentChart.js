import React from 'react';
import { Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const PaymentChart = ({ paymentData }) => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (paymentData && paymentData.length > 0) {
      const data = {
        labels: [], // Array to store the payment descriptions (e.g., ['Payment 1', 'Payment 2', ...])
        datasets: [
          {
            label: 'Payment Amount',
            data: [], // Array to store the payment amounts for each payment
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

      // Fill in the data arrays for the chart
      paymentData.forEach((payment) => {
        data.labels.push(payment.description);
        data.datasets[0].data.push(parseFloat(payment.amount.replace('$', '')));
      });

      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [paymentData]);

  return <canvas ref={chartRef} />;
};

export default PaymentChart;
