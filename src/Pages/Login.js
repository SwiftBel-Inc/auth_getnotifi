import React from 'react'
import styled from "styled-components";
// import signpic from '../assets/signup.png';
import Auth from '../Components/Auth/Auth';
import Loginright from '../assets/loginright.webp'
import logo from '../assets/notifilogo.png'

function Login(){
return(
    <Dialougediv>
            <Auth/>
            <Right>
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
export default Login

const Dialougediv=styled.div`
display:flex;
justify-content:center;
overflow:hidden;
`
const Right = styled.div`
background:#12151a;
width:750px;
color:white;
overflow:hidden;
padding-top:70px;
@media (min-width: 260px) and (max-width: 1311px){
display:none;
}
`
const Image=styled.img`
width:50%;
height:70%;
margin-top:25px;
border-radius:8px;
margin-bottom:90px;
`
const Imagediv=styled.div`
display:flex;
justify-content:center;
`
const ModalHeading=styled.p`
font-weight:600;
font-size:30px;
color:white;
text-align:center;
`
const LogoStyle=styled.img`
object-fit: contain;
width:23%;
height:6%;
background:white;
padding:8px;
border-radius:8px;
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