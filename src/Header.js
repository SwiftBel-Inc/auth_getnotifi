import React, { useState } from 'react'
import styled from 'styled-components'
import logo from './assets/notifilogo.png';
//import blackburger from './assets/blackburger.png'
import { Drawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
function Header(){
const [open2,setOpen2]=useState(false)
//const iteminmenu=['Product','Solutions','Pricing','Resources','Customer support']
const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
let navigate=useNavigate()
return(
<Main>
<Head>
<MobHead>
{/* <Dummy>
<Burger src={blackburger} onClick={()=>setOpen2(true)}/>
</Dummy> */}
<div>
<Image src={logo} alt='logo' onClick={()=>navigate('/')}/>
</div>
{/* <Dummy></Dummy> */}
</MobHead>
<WebHead>
<div>
<Image src={logo} alt='logo' onClick={()=>navigate('/')}/>
</div>
</WebHead>
<Menuitems>
<Item>Product</Item>
<Item
onClick={handleClick}
>Solutions</Item>
<CustomMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={()=>navigate('/home-services')}>
           <b>Home services</b>
        </MenuItem>
        <MenuItem onClick={()=>navigate('/professional-services')}>
        <b>Proffesional services</b>
        </MenuItem>
      </CustomMenu>
<Item onClick={()=>navigate('pricing')}>Pricing</Item>
<Item>Resources</Item>
<Item>Customer support</Item>
</Menuitems>
<Menuitems>
<Signin>Sign In</Signin>
<Freetrial>Start a free trial</Freetrial>
</Menuitems>
<Drawer
            anchor='left'
            open={open2}
            width={200}
            onClose={()=>setOpen2(false)}
          >
            <Image2 src={logo} alt='logo'  onClick={()=>navigate('/')}/>
            <Item>Product</Item>
<Item onClick={handleClick}>Solutions</Item>
<Item onClick={()=>navigate('/pricing')}>Pricing</Item>
<Item>Resources</Item>
<Item>Customer support</Item>
          </Drawer>
</Head>
</Main>
)
}
export default Header


const Main = styled.div`
display:flex;
justify-content:center;
background-color:white;
padding-top:20px;
position:sticky;
Top:0;
height:80px;
z-index:2;
@media (min-width: 890px) and (max-width: 9999px){
  display:none;
  }
`
const MobHead=styled.div`
width:100%;
display:flex;
justify-content:start;
padding-left:10px;
padding-right:10px;
@media (min-width: 890px) and (max-width: 9999px){
  display:none;
  }
`
const WebHead=styled.div`
display:flex;
@media (min-width: 260px) and (max-width: 889px){
  display:none;
  }
`
const CustomMenu=styled(Menu)`
margin-left:-20px;
@media (min-width: 260px) and (max-width: 820px){
    margin-left:0px;
    margin-top:10px;
    }
`
const Head=styled.div`
width:1312px;
display:flex;
justify-content:space-between;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
`
const Menuitems=styled.div`
display:flex;
justify-content:space-between;
margin-right:-50px;
@media (min-width: 260px) and (max-width: 890px){
    display:none;
    }
`
const Signin = styled.button`
background-color:white;
background:white;
color:blue;
border:1px solid black;
border-radius:8px;
margin-right:20px;
font-weight:800;
width:80px;
height:38px;
font-size:16px;
font-family: 'Cabin', sans-serif;
display:inline;
margin-top:10px;
@media (min-width: 820px) and (max-width: 967px){
    width:60px;
    height:38px;
    }
    @media (min-width: 260px) and (max-width: 890px){
        display:none;
        }
`
const Freetrial = styled.button`
background-color:black;
background:black;
color:white;
border:1px solid black;
border-radius:8px;
margin-right:20px;
font-weight:600;
width:160px;
height:38px;
font-size:16px;
display:inline;
margin-top:10px;
font-family: 'Cabin', sans-serif;
@media (min-width: 820px) and (max-width: 967px){
    width:130px;
height:38px;
    }
    @media (min-width: 260px) and (max-width: 890px){
        display:none;
        }
`
const Item=styled.p`
margin-right:50px;
cursor:pointer;
font-size:16px;
font-weight:600;
@media (min-width: 968px) and (max-width: 1311px){
    margin-right:25px;
    }
    @media (min-width: 820px) and (max-width: 967px){
        margin-right:15px;
        }
        @media (min-width: 260px) and (max-width: 890px){
           padding-left:30px;
           padding-top:10px;
            }
`
const Image=styled.img`
height: 30px;
  width: 100%;
  padding-top: 10px;
  cursor: pointer;
  object-fit: contain;
`
const Image2=styled.img`
height:30px;
width:58%;
padding-top:30px;
padding-left:20px;
padding-bottom:30px;
cursor:pointer;
object-fit: contain;
`
// const Burger = styled.img`
// width:30px;
// height:15px;
// display:flex;
// margin-top:10px;
// @media (min-width: 890px) and (max-width: 9999px){
//     display:none;
//     }
// `
const Dummy = styled.div`
display:flex;
@media (min-width: 890px) and (max-width: 9999px){
    display:none;
    }
`
