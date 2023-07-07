import React, { useState } from "react";
import styled from "styled-components";
import convo from '../../assets/convo.png';
import addteam from '../../assets/addteam.png';
import unassigned from '../../assets/unassigned.png';
//import assigned from '../../assets/assigned.png';
import question from '../../assets/question.png'
import settings from '../../assets/settings.png'
function LeftMenu(){
const [active,setActive]=useState('All Conversations')
const elements=[
    {
    'name':'All Conversations',
    'icon':convo
    },
    {
    'name':'Payout Accounts',
    'icon':unassigned
    },
    {
    'name':'Settings',
    'icon':settings
    },
]
return (
<Main>
<Heading>Inbox</Heading>
{elements?.map((x,index)=>{
return(
<Element className={active===x.name?"blueclass":''} key={index} onClick={()=>setActive(x.name)}>
<Icon src={x.icon} alt={x.name}/><span>{x.name}</span>
</Element>
)
})}
<BottomTexts>
<Element2><Icon src={addteam} alt='addteam'/><span>Add team members</span></Element2>
<Element2><Icon src={settings} alt='settings'/><span>Preferences</span></Element2>
<Element2><Icon src={question} alt='settings'/><span>Help</span></Element2>

</BottomTexts>
</Main>
)
}
export default LeftMenu

const Main = styled.div`
width:14.3%;
background: rgb(41, 46, 54);
color:white;
margin-top:48px;
position:fixed;
left:0;
padding-left:20px;
padding-right:15px;
padding-top:5px;
padding-bottom:10px;
height: 100vh;
.blueclass{
background-color:rgb(70, 110, 255);
font-weight:600;
&:hover {
    background-color:rgb(70, 110, 255);
  }
}
`
const Heading=styled.p`
font-weight:bold;
font-size: 16px;
line-height: 1.5;
text-align:start;
`

const Element=styled.div`
font-size:14px;
cursor:pointer;
display:flex;
justify-content:start;
border-radius:8px;
padding-top:9px;
padding-bottom:8px;
margin-left:-10px;
margin-bottom:5px;
&:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`
const Element2=styled.div`
font-size:14px;
display:flex;
border-radius:8px;
justify-content:start;
cursor:pointer;
padding-top:9px;
padding-bottom:8px;
margin-left:-10px;
margin-bottom:3px;
&:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`
const BottomTexts=styled.div`
position: fixed;
bottom: 0;
margin-bottom:20px;
width:14.3%;
`
const Icon = styled.img`
height:20px;
width:20px;
margin-right:10px;
padding-left:8px;
`