import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import GPS from '../../assets/gps.png'
function Conversations(){
    const globename = useSelector(state => state?.auth?.globename)

return(
<Main>
<Flexbox>
<Profile>
<span>P</span>
</Profile>
<Name>{globename}</Name>
<Line1>|</Line1>
<div>
<ReviewStar src='https://app.podium.com/static/media/review.9e8d7fce974894c5320fbeb93e8d4acb.svg' alt='review'/>
</div>
<Line2>|</Line2>
<LocateGps>
<Marker src={GPS} alt='gps'/>
<span>Accounting Bridge</span>
</LocateGps>
</Flexbox>
<Hr/>
<Chats>
<Flexbox>
<GoogleBox>
<span>Google</span>
</GoogleBox>
<Name2>{globename}</Name2>
<Flexdiv>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
</Flexdiv>
</Flexbox>
<Message>We had a wonderful experience with Swiftbel ! The movers were organized and quick,
    and had us moved in and out in no time.
    The process was seamless and efficient and we will definitely
    use their services again in the future.</Message>
<p style={{color:'rgb(204, 204, 204)',fontWeight:'600',textAlign:'start',display:'flex'}}>June 7 , 23 |
{/* <img style ={{height:'20px',width:'20px'}}src='https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-gray-512.png'/> */}
<div style={{marginTop:'-2px'}}><svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="rgb(204, 204, 204)" />
    </svg>
    </div>
    &nbsp;Accounting Bridge</p>
</Chats>
</Main>
)
}

export default Conversations

const Main = styled.div`
width:60%;
margin-top:48px;
padding-top:10px;
padding-bottom:10px;
height: 85vh;
`
const Name=styled.p`
text-align:start;
padding-left:10px;
font-size: 16px;
line-height: 21px;
color: rgb(45, 47, 49);
font-weight: 600;
margin-top:7px;
`
const Name2=styled.span`
font-size: 16px;
font-weight: 600;
margin-top:3px;
margin-right:11px;
`
const Flexbox=styled.div`
display:flex;
`
const Profile=styled.div`
width:20px;
padding:3px;
background:#974EDE;
text-align:center;
border-radius:5px;
color:white;
margin-left:20px;
height:20px;
margin-top:4px;
font-weight:600;
font-size:14px;
padding-top:4px;
`
const Line1=styled.p`
color:#d4d4d4;
margin-left:20px;
margin-right:10px;
margin-top:8px;
`
const Line2=styled.p`
color:#d4d4d4;
margin-left:10px;
margin-right:13px;
margin-top:8px;
`
const ReviewStar=styled.img`
margin-top:7px;
`
const Hr=styled.hr`
border:1px solid #E2E8F0;
margin-top:-3px;
`
const LocateGps=styled.div`
display:flex;
padding-top:10px;
padding-left:8px;
padding-right:8px;
border-radius:8px;
margin-bottom:6px;
font-size:14px;
font-weight:600;
cursor:pointer;
margin-top:-3px;
&:hover {
    background-color:#F3F3F3;
  }
`
const Marker=styled.img`
height:15px;
width:10px;
margin-right:6px;
margin-top:1px;
`
const Chats= styled.div`
padding-left:20px;
padding-top:20px;
`
const Flexdiv=styled.div`
display:flex;
margin-top:3px;
`
const Rating=styled.img`
height:15px;
width:15px;
padding:1px;
`
const Message=styled.p`
text-align:start;
width:90%;
line-height:160%;
`
const GoogleBox=styled.div`
background:rgb(70, 110, 255);
color:white;
padding:5px;
padding-left:10px;
padding-right:10px;
border-radius:6px;
font-size:13px;
font-weight:600;
margin-right:10px;
`