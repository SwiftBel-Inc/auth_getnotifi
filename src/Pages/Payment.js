// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import StripeCheckout from 'react-stripe-checkout';

// const PaymentPage = () => {
//   const [paymentComplete, setPaymentComplete] = useState(false);
// let dispatch=useDispatch()
//   const handleToken = async(token) => {
//     // Send the token to your server to process the payment
//     // You can also handle the payment on the client side using Stripe.js
//     // Set the paymentComplete state to true if the payment is successful

//     console.log(token)
//     setPaymentComplete(true);
//   };

//   return (
//     <div>
//       {!paymentComplete && (
//         <StripeCheckout
//           stripeKey='pk_live_51KnIv3IP0V9hIrNScYkpMaRMBSzGwDekxHvEgBoXBo2iTlzOQ13rL927tddCs5JcnWMfVJeC6JJxRcrNtdKz70wY00DcDIUxhf'
//           token={handleToken}
//           amount={1000}
//           currency="USD"
//           name="My Store"
//           description="Example Payment"
//         />
//       )}
//       {paymentComplete && <p>Payment Successful!</p>}
//     </div>
//   );
// };

// export default PaymentPage;
