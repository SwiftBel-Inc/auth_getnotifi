import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import io from 'socket.io-client';
import {getAllinchats, getAlloutchats, sendMessage } from '../../store/Actions/Auth.action'
import profile from '../../assets/profile.png'
import Sendicon from '../../../src/assets/send.png'
import { fromnumber } from '../../services/Urls';
const socket = io('https://prod.swiftbel.com');

function RightChat(){
    const globenumber = useSelector(state => state?.auth?.globenum)
    const globecolor = useSelector(state => state?.auth?.globecolor)
    const globename = useSelector(state => state?.auth?.globename)
const [message,setMessage]=useState(null)
const [body,setBody]=useState(null)
const [num,setNum]=useState(null)
const [details,setDetails]=useState(null)
const detail = useSelector(state => state?.auth?.convo)
const firstnumber = detail ? detail?.[0]?.name ? detail?.[0]?.name : detail?.[0]?.to :''
const frstnum = detail ? detail?.[0]?.to :''
console.log(frstnum,'frstnum')
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllinchats(fromnumber,globenumber?globenumber:frstnum));
        dispatch(getAlloutchats(globenumber?globenumber:frstnum,fromnumber));

    },[globenumber,frstnum])
    const outchats = useSelector(state => state?.auth?.outchats)
    const inchats = useSelector(state => state?.auth?.inchats)



     useEffect(() => {
        socket.connect()
        // socket.emit('join_room','hello worldddd')
        socket.on('conversation', (msg) => {
        console.log(msg, "msg")
        setBody(msg?.[1])
        setNum(msg?.[0].from)
        socket.close()
        socket.connect()
      })
       return () => {
          socket.off('conversation');
        };
      }, []);
     const handledate=(item)=>{
        const dateString = item;
        const date = new Date(dateString);
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        let hours12 = hours % 12;
        if (hours12 === 0) {
        hours12 = 12;
        }
       let customminutes=minutes<10 ?'0'+minutes:minutes
       const meridiem = hours < 12 ? "AM" : "PM";
       const formattedTime = `${hours12}:${customminutes} ${meridiem}`;
       return formattedTime
     }



const handlesend=(e)=>{
setMessage(e.target.value)
}
const sendchat=async()=>{
if(message){
  dispatch(sendMessage(
    {
        "from": fromnumber,
        "to": globenumber,
        "body": message
    }
))
setMessage('')
setTimeout(() => {
     dispatch(getAllinchats(fromnumber,globenumber));
    dispatch(getAlloutchats(globenumber,fromnumber));
}, 1000);
    }
}

const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        sendchat();
    }
  };
const combinedArray = outchats&&inchats ? outchats?.concat(inchats):''
let alldata= combinedArray?combinedArray?.sort((a, b) => {
  return  new Date(b.createdAt) - new Date(a.createdAt);
})
:''
useEffect(()=>{
if(body){
if(globenumber===num){
combinedArray.push(body)
}
}
},[num,body,globenumber])
// let finaldata=body?globenumber===num?alldata.push(body):alldata:alldata
// console.log(finaldata,'alldata')

return(
<>
<Header>
<p className='number'>{globename?globename:globenumber?globenumber:firstnumber}</p>
<Add>add contact details</Add>
</Header>
<Texts>
<Texts2>
{alldata?
alldata.map((x,index)=>{
return(
x?.type==='outbound-api'?
<OutText>
<OutChat>
<Messagetext>{x?.body}</Messagetext>
<p className='outtime'>{handledate(x.createdAt)}</p>
</OutChat>
<OutProfile>
SB
</OutProfile>
</OutText>
:x?.type==='inbound'?
<InText>
<ProfileImage src={profile} alt='profileimg' className={globecolor}/>
<InChat>
<Messagetext>{x?.body}</Messagetext>
<p className='intime'>{handledate(x.createdAt)}</p>
</InChat>
</InText>
:''
)
})
:''}
</Texts2>
{/* <SendMessage type='text' placeholder='send a message' onChange={(e)=>handlesend(e)}/> */}
<SendMessage>
  <Input type="text" placeholder="Send a message" onKeyPress={handleKeyPress} value={message} onChange={(e)=>handlesend(e)}/>
  <SendIcon src={Sendicon} alt="Send" onClick={()=>sendchat()}/>
</SendMessage>
</Texts>
</>
)
}

export default RightChat

const Header = styled.div`
padding-left:50px;
padding-top:10px;
padding-bottom:10px;
border-bottom:1px solid lightgray;
.number{
    font-size:16px;
    font-weight:500;
    text-align:start;
    }
`
const Add=styled.p`
font-size:12px;
color:#000099;
margin-top:-10px;
text-align:start;
`
const Texts=styled.div`
position: fixed;
bottom: 0;
overflow:auto;
`
const Texts2=styled.div`
height:65vh;
overflow-y: scroll;
display: flex;
flex-direction: column-reverse;

&::-webkit-scrollbar {
  width: 0;
  height: 0;
}
`
// const SendMessage=styled.input`
// width:870px;
// border-radius:30px;
// border:1px solid lightgray;
// margin-bottom:80px;
// height:30px;
// padding:10px;
// padding-left:20px;

// `

const SendMessage = styled.div`
  position: relative;
  width: 870px;
  margin-bottom: 80px;
  margin-top:15px;
`;

const Input = styled.input`
  width: 95%;
  border-radius: 30px;
  border: 1px solid lightgray;
  padding: 15px;
  padding-left: 20px;
`;

const SendIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 35px;
  height: 35px;
`;
const OutText=styled.div`
display:flex;
justify-content:flex-end;
margin-bottom:15px;
    `
const OutChat=styled.div`
background:#3944BC;
color:white;
border-radius:8px;
padding:12px;
padding-bottom:3px;
text-align:end;
width:250px;
.outtime{
font-size:12px;
padding:0px;
}
`
const Messagetext=styled.p`
width:250px;
`
const InChat=styled.div`
background:lightgray;
border-radius:8px;
padding:12px;
padding-bottom:3px;
text-align:start;
width:250px;
margin-bottom:15px;
.intime{
color:blue;
font-size:12px;
padding:0px;
}
`
const OutProfile=styled.div`
background:#e1275f;
color:white;
height:35px;
width:25px;
margin-top:20px;
padding:13px;
padding-bottom:-0px;
margin-left:10px;
border-radius:10px;
`
const ProfileImage=styled.img`
border-radius:10px;
height:30px;
width:30px;
padding:6px;
margin-top:25px;
margin-right:10px;
`
const InText=styled.div`
display:flex;
justify-content:flex-start;
margin-bottom:15px;
.pink{
    background:pink;
    }
    .orange{
    background: #ff9900;
    }
    .violet{
    background:#974EDE;
    }
`