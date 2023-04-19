import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../Components/Payment/CheckoutForm';
import styled from '@emotion/styled';
  const stripePromise = loadStripe('pk_live_51KnIv3IP0V9hIrNScYkpMaRMBSzGwDekxHvEgBoXBo2iTlzOQ13rL927tddCs5JcnWMfVJeC6JJxRcrNtdKz70wY00DcDIUxhf');
 //const stripePromise = loadStripe('pk_test_51KnIv3IP0V9hIrNSw4VA2vFo9XGgmyt5TJzczscmtofOWavGCuogRSjSavFrBi8QWtE9H5BfXHNznbABpet5hvTv00tvzkvYlF');

const Payment = () => {
let subtype= localStorage.getItem('type')
let price= localStorage.getItem('price')

  return (
    <Main>
    <Left>
    <PriceSection>
    <p>Pay Notifi </p>
    <MainPrice>US ${price}</MainPrice>
    <Subsection>
    <p>Subscription type</p>
    <p>{subtype}</p>
    </Subsection>
    <Subsection>
    <p>Package</p>
    <p>Standard</p>
    </Subsection>
    <hr/>
    <Subsection>
    <p>Total amount due </p>
    <p>${price}</p>
    </Subsection>
    </PriceSection>
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
height:620px;
@media (min-width: 260px) and (max-width: 1311px){
display:none;
}
`
const Right = styled.div`
width:40%;
overflow:hidden;
margin-right:200px;
padding-top:20px;
@media (min-width: 260px) and (max-width: 1311px){
display:none;
}
`
const PriceSection=styled.div`
width:400px;
text-align:start;
`
const MainPrice=styled.p`
font-size:44px;
font-weight:500;
text-align:start;
`
const Subsection=styled.div`
display:flex;
justify-content:space-between;
`