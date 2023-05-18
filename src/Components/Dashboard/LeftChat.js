import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import profile from '../../assets/profile.png'

function LeftChat(){
return(
<Main>
<Heading>Notifi Chat</Heading>
<Inputfield id="outlined-basic" placeholder='Search' size="small" variant="outlined" />
<br/><br/>
<br/>
<br/>
<Chat>
<Chatpro>
<ProfileImage src={profile} alt='profileimg' className='pink'/>
<Message>
<p className='number'>+916388240136</p>
<p className='text'>Hello , how are you?!</p>
</Message>
</Chatpro>
<Date>14 may</Date>
</Chat>
<Chat>
<Chatpro>
<ProfileImage src={profile} alt='profileimg' className='orange'/>
<Message>
<p className='number'>+916388240136</p>
<p className='text'>Hello , how are you?!</p>
</Message>
</Chatpro>
<Date>14 may</Date>
</Chat>
<Chat>
<Chatpro>
<ProfileImage src={profile} alt='profileimg' className='violet'/>
<Message>
<p className='number'>+916388240136</p>
<p className='text'>Hello , how are you?!</p>
</Message>
</Chatpro>
<Date>14 may</Date>
</Chat>
<Chat>
<Chatpro>
<ProfileImage src={profile} alt='profileimg' className='pink'/>
<Message>
<p className='number'>+916388240136</p>
<p className='text'>Hello , how are you?!</p>
</Message>
</Chatpro>
<Date>14 may</Date>
</Chat>
<Chat>
<Chatpro>
<ProfileImage src={profile} alt='profileimg' className='orange'/>
<Message>
<p className='number'>+916388240136</p>
<p className='text'>Hello , how are you?!</p>
</Message>
</Chatpro>
<Date>14 may</Date>
</Chat>
<Chat>
<Chatpro>
<ProfileImage src={profile} alt='profileimg' className='violet'/>
<Message>
<p className='number'>+916388240136</p>
<p className='text'>Hello , how are you?!</p>
</Message>
</Chatpro>
<Date>14 may</Date>
</Chat>
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
}
.text{
font-size:14px;
color:gray;
margin-top:-10px;
margin-left:5px;
}
`
const Date=styled.p`
font-size:14px;
color:#000099;
margin-top:-1px
`