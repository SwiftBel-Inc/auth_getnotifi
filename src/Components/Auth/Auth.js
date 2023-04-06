import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../../assets/notifilogo.png';
import { loginUsers } from '../../store/Actions/Auth.action';
import { useDispatch } from 'react-redux';

function Auth(){
const [customtext,setCustomtext]=useState('Next')
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const [isValid, setisvalid] = useState();
const [ispassValid, setispassvalid] = useState();
const [errormsg,setErrormsg]=useState(null)
let dispatch=useDispatch();
 const handlelogin=async()=>{
    //let reg =  /^([\w\.-]+@[\w\.-]+(\.[\w]+)*)|(\d{3}-\d{3}-\d{4})$/;
    setErrormsg(null)
    let reg = /^(\+?1[-. ]?)?\(?[2-9][0-8][0-9]\)?[-. ]?[2-9][0-9]{2}[-. ]?[0-9]{4}$|^[\w+.]+@\w+\.\w+$/;
    if(reg.test(email)){
   setisvalid(true)
   setCustomtext('Sign in')
   }
 else{
    setisvalid(false)
    setCustomtext('Next')
    }
   !(password.length>7)? setispassvalid(false):setispassvalid(true)
   if(isValid&&ispassValid===true){
    const res = await dispatch(loginUsers({
        "email":email,
        "password":password
        }))
        if(res?.status===false){
        setErrormsg(res?.meesage)
        }
    return res
    }
}

const onChangeEmail = (e) => {
    let reg = /^(\+?1[-. ]?)?\(?[2-9][0-8][0-9]\)?[-. ]?[2-9][0-9]{2}[-. ]?[0-9]{4}$|^[\w+.]+@\w+\.\w+$/;
    if(reg.test(e.target.value)){setisvalid(true)}
    setEmail(e.target.value)
}
const onChangePassword = (e) => {
    if(e.target.value.length>7){
    setispassvalid(true)
    }
    setPassword(e.target.value)
}
return(
<Left>
<Image src={logo} alt='logo' />
{isValid === false ? <Msg className='errormsg'>
Incorrect email or mobile number. Please try again!
</Msg> :
isValid === false||ispassValid===false ? <Msg className='errormsg'>
Incorrect email or password. Please try again!
</Msg>
:
errormsg?
<Msg className='errormsg'>
{errormsg}
</Msg>
:
null}
<br/>
<Inputbox id="outlined-basic" label="Email or mobile number" variant="outlined" onChange={(e) => onChangeEmail(e)} required error={isValid!==false?false:true} />
<br/>
{customtext==='Sign in'?
<Inputbox id="outlined-basic" label="Password" variant="outlined" type={'password'} required onChange={(e) => onChangePassword(e)} error={ispassValid!==false?false:true} />
:''}
<br/>
<CustomButton variant="contained" onClick={()=>handlelogin()}>{customtext}</CustomButton>
{/* <Haveaccount><a href='/'>Forgot Password ?</a></Haveaccount> */}
</Left>
)
}
export default Auth

const Left =styled.div`
width:600px;
padding-left:200px;
display:flex;
flex-direction:column;
justify-content:center;
@media (min-width: 260px) and (max-width: 1311px){
margin-top:200px;
width:100%;
padding-left:50px;
}
`
const Image=styled.img`
width:40%;
margin-bottom:40px;
margin-left:40px;
@media (min-width: 260px) and (max-width: 1311px){
margin-left:80px;
}
`
const Inputbox=styled(TextField)`
width:60%;
border-radius:12px;
height:50px;
@media (min-width: 260px) and (max-width: 1311px){
width:90%;
}

`
const CustomButton=styled(Button)`
width:60%;
height:44px;
@media (min-width: 260px) and (max-width: 1311px){
width:90%;
}
`
const Msg=styled.p`
text-align:start;
margin-left:90px;
@media (min-width: 260px) and (max-width: 1311px){
margin-left:40px;
}
`
// const Haveaccount=styled.p`
// margin-left:70px;
// margin-top:40px;
// `