import React from 'react'
import styled from 'styled-components'
import logo from './assets/notifilogo.png';
//import blackburger from './assets/blackburger.png'
import { useNavigate } from 'react-router-dom';
function Header(){
let navigate=useNavigate()
return(
<MobHead>
<div>
<Image src={logo} alt='logo' onClick={()=>navigate('/')}/>
</div>
</MobHead>
)
}
export default Header



const MobHead=styled.div`
  width: 100%;
  display:flex;
  justify-content:flex-start;
  padding-top:20px;
  padding-bottom:20px;
  padding-left:20px;
@media (min-width: 890px) and (max-width: 9999px){
  display:none;
  }
`
const Image=styled.img`
height: 30px;
  width: 100%;
  padding-top: 10px;
  cursor: pointer;
  object-fit: contain;
`