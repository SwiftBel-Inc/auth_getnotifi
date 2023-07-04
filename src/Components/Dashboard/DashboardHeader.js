import React from 'react'
import styled, { css } from 'styled-components';
import sublogo from '../../assets/whitelogo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import Home from '../../assets/home.png'
function DashboardHeader(){
const location = useLocation();
const { pathname } = location;
let navigate=useNavigate()
return(
<Main>
 <SubDiv>
{/* <Sublogo src={sublogo} alt='logo'/> */}
<IconWrapper>
      <Sublogo src={sublogo} alt="Icon 1" />
      <HoverIcon src={Home} alt="Icon 2" />
    </IconWrapper>
<Element highlight={pathname === '/dashboard/inbox'} onClick={()=>navigate('/dashboard/inbox')}>Inbox</Element>
<Element highlight={pathname === '/dashboard/contacts'}onClick={()=>navigate('/dashboard/contacts')}>Contacts</Element>
<Element highlight={pathname === '/dashboard/reviews'}onClick={()=>navigate('/dashboard/reviews')}>Reviews</Element>
 </SubDiv>
</Main>
)
}
export default DashboardHeader

const Main = styled.div`
display:flex;
justify-content:space-between;
width:100%;
background: #12151A;
color:white;
padding-top: 0px;
padding-right: 0.5rem;
padding-bottom: 0px;
padding-left: 1.5rem;
height:56px;
position: fixed;
  top: 0;
  left:0;
`
const SubDiv=styled.div`
display:flex;
`

const Element = styled.div`
  margin-left: 28px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  margin-top:10px;
  padding-top:10px;
  padding-left:10px;
  padding-right:10px;
  border-radius:8px;
  margin-bottom:8px;
  color:gray;
  ${(props) =>
    props.highlight &&
    css`
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: rgb(70, 110, 255);
        transition: opacity 0.3s ease;
        margin-bottom: -8px;
      }
      color:white;
    `}
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
`;

const Sublogo=styled.img`
padding:3px;
margin-top:12px;
position: absolute;
top: 0;
left: 0;
width: 130%;
height: 130%;
transition: transform 0.3s ease, opacity 0.3s ease;
${IconWrapper}:hover & {
  transform: rotate(180deg);
  opacity: 0;
}
`
const HoverIcon = styled.img`
position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  margin-top:15px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  ${IconWrapper}:hover & {
    transform: rotate(0);
    opacity: 1;
  }
`
