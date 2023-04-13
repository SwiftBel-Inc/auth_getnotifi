import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../Components/Payment/CheckoutForm';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
// const stripePromise = loadStripe('pk_live_51KnIv3IP0V9hIrNScYkpMaRMBSzGwDekxHvEgBoXBo2iTlzOQ13rL927tddCs5JcnWMfVJeC6JJxRcrNtdKz70wY00DcDIUxhf');
 const stripePromise = loadStripe('pk_test_51KnIv3IP0V9hIrNSw4VA2vFo9XGgmyt5TJzczscmtofOWavGCuogRSjSavFrBi8QWtE9H5BfXHNznbABpet5hvTv00tvzkvYlF');

const Payment = () => {
    let location=useLocation()
console.log(location,'load')
let subtype= localStorage.getItem('type')
let price= localStorage.getItem('price')

  return (
    <Main>
    <Left>
    <div style={{width:'400px',textAlign:'start'}}>
    <p>Pay Notifi </p>
    <p style={{fontSize:'44px',fontWeight:'500',textAlign:'start'}}>US ${price}</p>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <p>Subscription type</p>
    <p>{subtype}</p>
    </div>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <p>Package</p>
    <p>Standard</p>
    </div>
    <hr/>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <p>Total amount due </p>
    <p>${price}</p>
    </div>
    </div>
    </Left>
    <Right>
    <Elements stripe={stripePromise} >
    <CheckoutForm/>
  </Elements>
  </Right>
  </Main>
  );
};

export default Payment;

const Main=styled.div`
display:flex;
justify-content:center;
overflow:hidden;
`
const Left = styled.div`
background:#12151a;
width:60%;
color:white;
overflow:hidden;
margin-right:100px;
padding:80px;
padding-left:200px;
height:570px;
@media (min-width: 260px) and (max-width: 1311px){
display:none;
}
`
const Right = styled.div`
width:40%;
overflow:hidden;
margin-right:200px;
padding-top:80px;
@media (min-width: 260px) and (max-width: 1311px){
display:none;
}
`