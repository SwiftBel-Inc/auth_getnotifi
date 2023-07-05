import React, { useEffect } from 'react'
import styled from 'styled-components'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { getAllconversations, getname, getnumber } from '../../store/Actions/Auth.action';
import arrow from '../.././assets/arrow.png'
function ConversationList(){
    const [value, setValue] = React.useState('OPEN');
    const [val, setVal] = React.useState(0);
    const detail = useSelector(state => state?.auth?.convo)
    console.log(detail,'conversations')
    let fromnumber=localStorage.getItem('fromnumber')
    useEffect(() => {
        dispatch(getAllconversations('+13656075582'));
        dispatch(getname(detail?.[0]?.name ?detail?.[0]?.name:detail?.[0]?.to))

      },[fromnumber,detail?.[0]?.name,detail?.[0]?.to]);
      console.log(detail,'details')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


let dispatch=useDispatch()
const handleactive=(ind,name,num)=>{
setVal(ind)
dispatch(getnumber(num))
dispatch(getname(name))
}
const handledate=(x)=>{
    const date = new Date(x);
    const options = { day: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate
}
return(
<Main>
<Heading>All Conversations</Heading>
<Subdiv>
<SearchContainer>
<Searchbutton>
      <Searchimg src="https://icon-library.com/images/search-icon-png-transparent/search-icon-png-transparent-18.jpg" alt="Search"/>
    </Searchbutton>
    <Searchinput type="text" class="search-input" placeholder="Search"/>
</SearchContainer>
<AddDiv>
<AddIcon src='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/ball-point-pen-icon-18-256.png' alt='add'/>
</AddDiv>
</Subdiv>
<Tabs
        value={value}
        onChange={handleChange}
        textColor='primary'
        indicatorColor="primary"
      >
        <CustomTab value="OPEN" label="OPEN"/>
        <CustomTab value="CLOSED" label="CLOSED"/>
      </Tabs>
      {detail?.length===0?
<p style={{fontSize:'20px',color:'black',marginTop:'40px'}}>No Conversations</p>
:''}
<Convos>
{detail && detail?.map((x,index)=>{
return(
<ConvoHead key={index} onClick={()=>handleactive(index,x?.name?x?.name:x?.to,x?.to)} className={index===val?'blueseg':''}>
<Namediv>
<Name className={index===val?'whitetext':''}>{x?.name?x?.name:x.to}</Name>
<Day className={index===val?'smokytext':''}>{handledate(x?.createdAt)}</Day>
</Namediv>
<Flexdiv>
{/* <Googleimg src='https://assets.podium.com/icons/google.png' alt='google' />
<Flexdiv>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
<Rating src='https://cdn2.iconfinder.com/data/icons/universal-signs-symbols/128/star-yellow-512.png' alt='rating'/>
</Flexdiv> */}
<ChatText className={index===val?'smokytext':''}> You : {x?.body.slice(0,70)}</ChatText>
</Flexdiv>
{/* <Boxes className='review'>
<p className='boxtext'>REVIEWS</p>
</Boxes>
<Boxes className={index===val?'limit2':'limit'}>
<p className='boxtext'>LIMIT HIT</p>
</Boxes> */}
{/* <Boxes className={index===val?'general2':'general'}>
<p className='boxtext'>General</p>
</Boxes> */}
</ConvoHead>
)
})}

</Convos>


</Main>
)
}
export default ConversationList

const Main = styled.div`
width:22%;
border-right: 1px solid lightgray;
margin-left:16.2%;
margin-top:48px;
padding-top:5px;
padding-bottom:10px;
`
const Heading=styled.p`
font-weight:600;
font-size: 15px;
line-height: 1.5;
text-align:start;
padding-left:20px
`
const SearchContainer=styled.div`
display: flex;
align-items: center;
width: 85%;
border: 1px solid #E2E8F0;
border-radius: 8px;
padding: 3px;
color:#E2E8F0;
`
const Searchinput=styled.input`
flex: 1;
border: none;
padding: 5px;
font-size: 14px;
outline: none;

`
const Searchbutton=styled.button`
background: none;
  border: none;
  padding: 0;
`
const Searchimg=styled.img`
width: 15px;
height: 15px;
margin-left:10px;
margin-top:2px;
margin-right:5px;
`
const Subdiv=styled.div`
display:flex;
margin-bottom:7px;
padding-left:20px;
padding-right:20px;
margin-top:-9px;
`
const AddDiv=styled.div`
height:35px;
width:35px;
background:rgb(70, 110, 255);
border-radius:8px;
margin-left:8px;
`
const AddIcon = styled.img`
height:60%;
width:60%;
margin-top:8px;
`
const CustomTab= styled(Tab)`
width:50%;
`
const Convos=styled.div`
height:65vh;
overflow-y: scroll;
&::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.blueseg{
background:rgb(70, 110, 255);
}
.whitetext{
color:white;
}
.smokytext{
color:#FAFAFA;
}
.limit2{
color:white;
background:#1e90ff;
margin-bottom:15px;
}
`
// const Rating=styled.img`
// height:15px;
// width:15px;
// padding:1px;
// `
const Icons=styled.img`
height:20px;
width:18px;
padding-right:6px;
margin-bottom:-5px;
`
const Name=styled.p`
font-size: 16px;
line-height: 21px;
color: rgb(45, 47, 49);
font-weight: 600;
`
const Day = styled.p`
color:#a1a1a1;
font-size: 12px;
padding-top:7px;
`

const ConvoHead=styled.div`
padding-left:20px;
padding-right:20px;
border-bottom:1px solid #d4d4d4;
cursor:pointer;
padding-bottom:20px;
.limit{
background:rgba(231, 62, 81, 0.16);
color: rgb(231, 62, 81);
margin-bottom:15px;
}
.review{
background:rgb(231, 237, 254);
color:rgb(99, 114, 125);
}
.general{
background:#d8e5f2;
color:rgb(99, 114, 125);
}
.general2{
background:#3973ac;
color:#FAFAFA;
}
`
const Namediv=styled.div`
display:flex;
justify-content:space-between;
`
const Flexdiv=styled.div`
display:flex;
margin-top:-5px;
`
const ChatText=styled.div`
font-size:13px;
margin-left:0px;
margin-top:-4px;
color:#a1a1a1;
text-align:start;
`
// const Googleimg=styled.img`
// height:20px;
// width:20px;
// margin-right:5px;
// border-radius:4px;
// margin-top:-6px;
// `
const Boxes=styled.div`
border-radius:5px;
width:60px;
font-size:10px;
.boxtext{
padding-top:3px;
padding-bottom:3px;
}
`