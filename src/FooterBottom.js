import React from "react";
import styled from "styled-components";

function FooterBottom(){
return(
    <>
<Hr/>
<Main>
<Head>
<div>
<Heading>© Notifi Corp Inc. 2023</Heading>
</div>
<div>
<Details>Sitemap | Terms & Conditions | Privacy | Vulnerability Policy | CCPA
</Details>
</div>
</Head>
</Main>
</>
)
}
export default FooterBottom

const Main = styled.div`
display:flex;
position:relative;
justify-content:center;
background-color:white;
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
justify-content:center;

}
`
const Heading=styled.p`
font-weight:900;
font-size:18px;
text-align:start;
@media (min-width: 260px) and (max-width: 820px){
    text-align:center;
    }
`
const Details=styled.p`
font-size:16px;
color:gray;
text-align:start;
@media (min-width: 260px) and (max-width: 820px){
    text-align:center;
    }
`
const Hr=styled.hr`
border:1px solid #F3F3F3;
width:1312px;
display:flex;
justify-content:center;
@media (min-width: 260px) and (max-width: 1311px){
    width:100%;
    }
`