import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllchats } from '../../store/Actions/Auth.action'

function RightChat(){
    const globenumber = useSelector(state => state?.auth?.globenum)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllchats('+16042435773','+917060208598'));
    },[globenumber])
    const chats = useSelector(state => state?.auth?.chats)
    const detail = useSelector(state => state?.auth?.convo)
     const firstnumber = detail?detail?.[0]?.to :''
console.log(chats,'chats')
return(
<>
<Header>
<p className='number'>{globenumber?globenumber:firstnumber}</p>
<Add>add contact details</Add>
</Header>

<Texts>
<SendMessage type='text' placeholder='send a message'/>
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
margin-left:10px;
`
const Texts=styled.div`
position: fixed;
bottom: 0;
`
const SendMessage=styled.input`
width:870px;
border-radius:30px;
border:1px solid lightgray;
margin-bottom:80px;
height:30px;
padding:10px;
padding-left:20px;
`