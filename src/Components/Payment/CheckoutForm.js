import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
  import React, { useState } from "react";
import styled from "styled-components";
import { useMemo } from "react";
import countryList from 'react-select-country-list'
import { Select } from "@mui/material";
import { getpaymentIntent } from "../../store/Actions/Auth.action";
import { useDispatch } from "react-redux";

  function CheckoutForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loader,setLoader]=useState(false)

  const [country, setCountry] = useState('CA');
  const [postalCode, setPostalCode] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const options = useMemo(() => countryList().getData(), [])
    let dispatch=useDispatch()
    const createSubscription = async () => {
        // setLoader(true)
        // setLoader(false)
        try {
            const paymentMethod = await stripe.createPaymentMethod({
              card: elements.getElement("card"),
              type: "card",
            //   billing_details: {
            //     name: name,
            //     address: {
            //         postal_code: postalCode,
            //         country: country
            //     }
            // }
            });
            console.log(paymentMethod,'iddd')
            const response = await dispatch(getpaymentIntent({
                "name":name,
                "email":email,
                "paymentMethod":paymentMethod.paymentMethod.id,
                "amount":0
            }))
            console.log(paymentMethod.paymentMethod.id,'idc')
            if (!response.ok) return alert("Payment unsuccessful!");
            const data = await response.json();
            const confirm = await stripe.confirmCardPayment(data.clientSecret);
            if (confirm.error) return alert("Payment unsuccessful!");
            alert("Payment Successful! Subscription active.");
         }
        catch (err) {
            console.error(err);
            alert("Payment failed! " + err.message);
          }
    };

    return (
        <div className="stripe-form">
        <div>
        <Label>Name</Label>
        <Inputbox  fullWidth type="text" id="outlined-basic" label="Enter card holder name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
        <Label>Email</Label>
        <Inputbox  fullWidth type="text" id="outlined-basic" label="Enter your Email address" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      <div >
        <Label htmlFor="cardNumber">Card number</Label>
        <div className="input-element-container">
          <CardNumberElement className="card-element" id="cardNumber" />
          </div>
      </div>
      <Rows>
      <Expirybox>
        <Label htmlFor="expiryDate">Expiry date</Label>
        <div className="input-element-container">
          <CardExpiryElement className="card-element" id="expiryDate" />
        </div>
      </Expirybox>
      <Cvvbox>
        <Label htmlFor="cvv">CVV</Label>
        <div className="input-element-container">
          <CardCvcElement className="card-element" id="cvv" />
        </div>
      </Cvvbox>
      </Rows>
      <div>
        <Label>Country</Label>
                    <Selectbox defaultValue={country} onChange={(event) => setCountry(event.target.value)}>
                        {options.map((item) =>
                        <option value={item.value}>{item.label}</option>
                        )}
                    </Selectbox>
      </div>
      <div >
        <Label htmlFor="postalCode">Postal code</Label>
          <Inputbox  maxLength={6} value={postalCode} id="outlined-basic" label="Postal code" variant="outlined"  onChange={(event) => setPostalCode(event.target.value)} />
      </div>
      <br/>
      <br/>
      <CustomButton variant="contained" type="submit" disabled={loader?true:false}   onClick={()=>createSubscription()}>
      {loader?'loading'
                    :
                "Pay"}
      </CustomButton>
    </div>
  );
};

export default CheckoutForm;

const Inputbox=styled(TextField)`
width:100%;
border-radius:12px;
@media (min-width: 260px) and (max-width: 1311px){
width:90%;
}
`
const Selectbox=styled(Select)`
width:100%;
border-radius:12px;
text-align:start;
@media (min-width: 260px) and (max-width: 1311px){
width:90%;
}
`
const Label=styled.p`
text-align:start;
margin-bottom:12px;
margin-top:20px;
font-weight:500;
`
const CustomButton=styled(Button)`
width:150px;
height:44px;
margin-top:15px;
border-radius:8px;
border:1px solid blue;
`
const Rows=styled.div`
display:flex;
`
const Expirybox=styled.div`
width:55%;
margin-right:30px;

`
const Cvvbox=styled.div`
width:35%;
`