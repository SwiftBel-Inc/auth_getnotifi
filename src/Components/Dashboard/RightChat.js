import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import io from 'socket.io-client';
import {getAllinchats, getAlloutchats } from '../../store/Actions/Auth.action'
import profile from '../../assets/profile.png'
const socket = io('https://prod.swiftbel.com');

function RightChat(){
    const globenumber = useSelector(state => state?.auth?.globenum)
    const globecolor = useSelector(state => state?.auth?.globecolor)
    const globename = useSelector(state => state?.auth?.globename)

    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllinchats('+16042435773','+917060208598'));
        dispatch(getAlloutchats('+917060208598','+16042435773'));

    },[globenumber])
    const outchats = useSelector(state => state?.auth?.outchats)
    const inchats = useSelector(state => state?.auth?.inchats)

    const detail = useSelector(state => state?.auth?.convo)
     const firstnumber = detail ? detail?.[0]?.name ? detail?.[0]?.name : detail?.[0]?.to :''
     useEffect(() => {
        socket.connect()
        // socket.emit('join_room','hello worldddd')
        socket.on('join_room', (msg) => {
        console.log(msg, "msg")
        socket.close()
        socket.connect()
      })
       return () => {
          socket.off('join_room');
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
       console.log(formattedTime,'time');
       return formattedTime
     }


console.log(outchats,'outchats')
console.log(inchats,'inchats')

const combinedArray = outchats&&inchats ? outchats?.concat(inchats):''
let alldata= combinedArray?combinedArray?.sort((a, b) => {
  return new Date(a.createdAt) - new Date(b.createdAt);
})
:''
console.log(alldata,'combines');
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
{x?.body}
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
{x?.body}
<p className='intime'>{handledate(x.createdAt)}</p>
</InChat>
</InText>
:''
)
})
:''}
</Texts2>
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
`
const Texts=styled.div`
position: fixed;
bottom: 0;
overflow:auto;
`
const Texts2=styled.div`
height:65vh;
overflow-y: scroll;
&::-webkit-scrollbar {
  width: 0;
  height: 0;
}
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