import React from 'react'
import styled, { css } from 'styled-components';
import sublogo from '../../assets/sublogo.png'
import { useLocation, useNavigate } from 'react-router-dom';
function DashboardHeader(){
const location = useLocation();
const { pathname } = location;
let navigate=useNavigate()
return(
<Main>
 <SubDiv>
<Sublogo src={sublogo} alt='logo'/>
<Element highlight={pathname === '/inbox'} onClick={()=>navigate('/inbox')}>Inbox</Element>
<Element highlight={pathname === '/contacts'}onClick={()=>navigate('/contacts')}>Contacts</Element>
<Element highlight={pathname === '/reviews'}onClick={()=>navigate('/reviews')}>Reviews</Element>
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
const Sublogo=styled.img`
height:25px;
width:25px;
background:white;
padding:3px;
margin-top:12px;
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
    `}
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

