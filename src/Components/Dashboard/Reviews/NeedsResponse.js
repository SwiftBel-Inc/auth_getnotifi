import React from 'react'
import styled from 'styled-components'

function NeedsResponse(){
return(
<Main>
<Heads>
<Heading>Needs Response</Heading>
<Flexbox>
<EmailReport>Email Report</EmailReport>
<AddContact>Send review invite</AddContact>
</Flexbox>
</Heads>
<Hr/>
<br/>
<Flexbox2>
<Segment>
<SubText>
&nbsp;<GpsIcon><svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="#d2d2d2" />
    </svg>
    </GpsIcon>
    &nbsp;Accounting Bridge</SubText>
<Flexbox2>
<Profile>
<span>A</span>
</Profile>
<Names>
<Heading2>Ashwani Kumar Mishra</Heading2>
<Description>Left a review on june 7,2023 on <Googletext>Google</Googletext></Description>
</Names>
</Flexbox2>
<Flexdiv>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
</Flexdiv>
<Comment>Highly professional</Comment>
<Hr/>
<Invite>
<InviteText>No invite sent</InviteText>
</Invite>
<Hr/>
<Heading2>Reply</Heading2>
<Reply>
<Flexbox2>
<Profile2>
<span>RP</span>
</Profile2>
<ReplyComment>
<Input type='text' placeholder='Reply to Ashwani Kumar Mishra'/>
</ReplyComment>
</Flexbox2>
<div>
<Replybutton>Reply</Replybutton>
</div>
</Reply>
    </Segment>
<Segment2>

</Segment2>
</Flexbox2>
</Main>
)
}

export default NeedsResponse

const Main = styled.div`
margin-top:60px;
margin-left:18.3%;
padding-left: 1.5rem;
width:100%;
padding-right:2rem;
`
const Replybutton=styled.button`
background:#F3F3F3;
border:1px solid #F3F3F3;
color:gray;
font-weight:600;
padding:10px;
border-radius:8px;
`
const Input=styled.input`
color:gray;
background #F3F3F3;
border : 1px solid #F3F3F3;
padding:10px;
border-radius:8px;
width:350%;
`

const Comment=styled.p`
font-size:14px;
text-align:start;
margin-left:6px;
padding-top:4px;
margin-bottom:25px;
`
const Reply=styled.div`
display:flex;
justify-content:space-between;
margin-top:15px;
`
const ReplyComment=styled.div`
margin-top:2px;
margin-left:13px;
`
const Invite=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:10px;
`
const InviteText=styled.p`
font-size:13px;
color:gray;
margin-left:8px;
`
const Flexdiv=styled.div`
display:flex;
margin-top:3px;
margin-left:6px;
`
const Googletext=styled.span`
color:blue;
`
const Rating=styled.img`
height:20px;
width:20px;
padding:1px;
`
const Heading2=styled.p`
font-weight:bold;
font-size: 14px;
line-height: 1.5;
text-align:start;
margin-left:8px;
`
const Names=styled.div`
margin-top:-14px;
margin-left:5px;
`
const Profile=styled.div`
width:20px;
padding:3px;
background:#974EDE;
text-align:center;
border-radius:5px;
color:white;
margin-left:10px;
height:20px;
margin-top:6px;
font-weight:600;
font-size:14px;
padding-top:4px;
`
const Description=styled.p`
color:gray;
font-size:12px;
text-align:start;
margin-left:10px;
margin-top:-10px;
`
const Profile2=styled.div`
width:20px;
padding:4px;
background:#3cb371;
text-align:center;
border-radius:5px;
color:white;
margin-left:10px;
height:20px;
margin-top:6px;
font-weight:600;
font-size:14px;
padding-top:6px;
padding-left:6px;
`
const Heads=styled.div`
display:flex;
justify-content:space-between;
`
const EmailReport=styled.button`
background:white;
border:1px solid rgb(204, 204, 204);
border-radius:8px;
margin-left:20px;
margin-right:10px;
font-weight:600;
height:32px;
margin-top:7px;
padding-left:12px;
padding-right:12px;
`
const Flexbox=styled.div`
display:flex;
margin-top:15px;
`
const Flexbox2=styled.div`
display:flex;
margin-top:-2px;
`
const AddContact=styled.button`
background:rgb(70, 110, 255);
border:1px solid rgb(70, 110, 255);
border-radius:8px;
margin-left:10px;
margin-right:10px;
font-weight:600;
height:32px;
margin-top:7px;
color:white;
padding-left:12px;
padding-right:12px;
`
const Heading=styled.p`
font-weight:bold;
font-size: 22px;
line-height: 1.5;
text-align:start;
`

const Hr=styled.hr`
border:1px solid #F3F3F3;
margin-top:-4px;
`
const Segment=styled.div`
border:1px solid #dedede;
margin-right:20px;
width:70%;
padding-left:10px;
padding-right:20px;
border-radius:8px;
padding-bottom:25px;
padding-top:6px;
`
const Segment2=styled.div`
width:30%;
margin-top:-18px;
`

const SubText=styled.p`
color:gray;
font-weight:400;
text-align:start;
display:flex;
font-size:14px;
`
const GpsIcon=styled.div`
margin-top:-2px;
`