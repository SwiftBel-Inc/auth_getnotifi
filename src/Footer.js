import React from "react";
import styled from "styled-components";
import logo from './assets/notifilogo.png';
import appstore from './assets/appstore.webp';
import google from './assets/googleplay.webp';

function Footer(){
return(
<Main>
<Head>
<div>
<LogoImage src={logo} alt='logo'/>
<br/><br/><br/><br/><br/>
<Image src={appstore} alt='appstore'/>
<br/>
<Image src={google} alt='googleplaystore'/>
<br/>
</div>
<div>
<Heading>Products</Heading>
<Details>Reviews</Details>
<Details>Payments</Details>
<Details>Webchat</Details>
<Details>Channels</Details>
<Details>Contacts</Details>
<Details>Pricing</Details>
<Details>Inbox</Details>
<Details>Text Campaigns</Details>
</div>
<div>
<Heading>Resources</Heading>
<Details>Blog</Details>
<Details>Google Reviews</Details>
<Details>Online Reviews</Details>
<Details>Business Text Messaging</Details>
<Details>Contact Sales</Details>
</div>
<Setting>
<Heading>Company</Heading>
<Details>About us</Details>
<Details>Contact</Details>
<Details>Careers</Details>
<Details>Press</Details>
<Details>Partners</Details>
<Details>Legal</Details>
</Setting>

</Head>
</Main>
)
}
export default Footer

const Main = styled.div`
display:flex;
position:relative;
justify-content:center;
background-color:white;
padding-top:50px;
padding-bottom:20px;
`
const Head=styled.div`
width:1312px;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;

}
`
const Heading=styled.p`
font-weight:900;
font-size:18px;
text-align:start;

`
const Details=styled.p`
font-size:16px;
color:gray;
text-align:start;
@media (min-width: 260px) and (max-width: 820px){
   width:90%;
    }
`
const Setting=styled.div`
margin-right:100px;
@media (min-width: 260px) and (max-width: 820px){
    margin-right:40px;
}
`
const LogoImage=styled.img`
height:30px;
width:70%;
padding-top:15px;
object-fit: contain;
`
const Image=styled.img`
height:50px;
width:90%;
padding-top:20px;
object-fit: contain;
`