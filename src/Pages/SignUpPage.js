import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
// import signpic from '../assets/signup.png';
import BuyNumber from "../Components/Auth/BuyNumber";
import SignUp from "../Components/Auth/SignUp";
import Loginright from '../assets/loginright.webp'
import logo from '../assets/notifilogo.png'
function SignUpPage(){
    const [buy,setBuy]=useState(false)
    const handleClose = () => {
      window.open('http://www.getnotifi.com/pricing')
      };
return(
            <Dialougediv>
            {buy===true?<BuyNumber/>:
            <SignUp
            setBuy={setBuy}/>
             }
            <Right>
             <CloseIcondiv>
              <CloseIcon onClick={()=>handleClose()} />
              </CloseIcondiv>
              <LogoStyle src={logo} alt='logo'/>
              <ModalHeading>Better results. Less effort!</ModalHeading>
              <Imagediv>
              <Image src={Loginright} alt='signuppic'/>
              </Imagediv>
              {/* <ReviewSection>
               <div >
                <img className="imagediv" src={'https://checkout.podium.com/static/media/footer.394043fbf39da5e44665.png'} alt='img'/>
               </div>
               <div>
                <p className="reviewtext">"Our response rate is under a minute right now. We’re able to drive a sale without having to speak on the phone."</p>
                <p className="reviewsubtext">Zahadia Ortiz-Ceballos | Adam's Pest Control</p>
               </div>
              </ReviewSection> */}
              </Right>
           </Dialougediv>
)
}
export default SignUpPage

const Right = styled.div`
// background:#12151a;
width:750px;
// color:white;
overflow:hidden;
border-left:1px solid #dedede;
@media (min-width: 260px) and (max-width: 1311px){
display:none;
}
`
const Image=styled.img`
width:50%;
height:70%;
`
const LogoStyle=styled.img`
object-fit: contain;
width:20%;
height:10%;
`
const Imagediv=styled.div`
display:flex;
justify-content:center;
`
const ModalHeading=styled.p`
font-weight:600;
font-size:30px;
// color:white;
text-align:center;
`
// const ReviewSection=styled.div`
// display:flex;
// justify-content:center;
// margin-left:180px;
// margin-right:190px;
// width:400px;
// margin-bottom:130px;
// .imagediv{
// height:44px;
// width:44px;
// border-radius:50%;
// margin-top:20px;
// margin-right:20px;
// }
// .reviewtext{
// font-weight:500;
// font-size:18px;
// }
// .reviewsubtext{
// font-size:16px;
// color:gray;
// }
// `
const CloseIcondiv=styled.div`
display:flex;
justify-content:flex-end;
padding:20px;
padding-right:50px;
cursor:pointer;
`

const Dialougediv=styled.div`
display:flex;
justify-content:center;
overflow:hidden;
`