import React, { useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import profile from '../../assets/profile.png'
import { getAllconversations, getcolor, getname, getnumber } from '../../store/Actions/Auth.action'
import { useDispatch, useSelector } from 'react-redux'

function LeftChat(){
    let dispatch = useDispatch();
    const detail = useSelector(state => state?.auth?.convo)
    console.log(detail,'conversations')
    useEffect(() => {
        dispatch(getAllconversations('18676709314'));
      },[]);
const handledate=(x)=>{
    const date = new Date(x);
    const options = { day: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate
}
const getColor = (index) => {
    const colors = ['pink', 'orange', 'violet'];
    const colorIndex = (index - 1) % colors.length;
    return colors[colorIndex];
  };
const handlechats=async(num,color,name)=>{
await dispatch(getnumber(num))
await dispatch(getcolor(color))
await dispatch(getname(name))
}
return(
<Main>
<Heading>Notifi Chat</Heading>
<Inputfield id="outlined-basic" placeholder='Search' size="small" variant="outlined" />
<br/><br/>
<br/>
<br/>
<Chats>
{detail?
detail.map((item,index)=>{
return(
<Chat onClick={()=>handlechats(item?.to,getColor(index + 1),item?.name)} key={index}>
<Chatpro>
<ProfileImage src={profile} alt='profileimg' className={getColor(index + 1)}/>
<Message>
<p className='number'>{item?.name?item?.name:item?.to}</p>
<p className='text'>{item?.body?.length>25 ? `${item?.body.slice(0,25)}...`:item?.body}</p>
</Message>
</Chatpro>
<Datestyle>{handledate(item?.createdAt)}</Datestyle>
</Chat>
)
})
:''}
</Chats>
</Main>
)
}

export default LeftChat

const Heading=styled.p`
font-weight:600;
font-size:24px;
`
const Inputfield=styled(TextField)`
width:80%;
margin-right:10px;
`
const Main=styled.div`

@media (min-width: 1488px) and (max-width: 9999px){
}
`
const ProfileImage=styled.img`
border-radius:12px;
height:40px;
width:40px;
padding:6px;
`
const Chat=styled.div`
display:flex;
justify-content:space-between;
margin-left:20px;
margin-right:20px;
border-top:1px solid lightgray;
border-bottom:1px solid lightgray;
padding-top:15px;
padding-bottom:10px;
cursor:pointer;
`
const Chatpro=styled.div`
display:flex;
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
const Message=styled.div`
margin-left:20px;
margin-top:-12px;
.number{
font-size:16px;
text-align:start;
}
.text{
font-size:14px;
color:gray;
margin-top:-10px;
margin-left:5px;
text-align:start;
}
`
const Datestyle=styled.p`
font-size:14px;
color:#000099;
margin-top:-1px
`
const Chats=styled.div`
height:65vh;
overflow-y: scroll;
&::-webkit-scrollbar {
  width: 0;
  height: 0;
}
`