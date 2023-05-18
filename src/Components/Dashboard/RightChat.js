import React from 'react'
import styled from 'styled-components'

function RightChat(){
return(
<>
<Header>
<p className='number'>+916388240136</p>
<Add>add contact details</Add>
</Header>

<Texts>
<input type='text' placeholder='send a message' style={{width:'870px',borderRadius:'30px',border:'1px solid lightgray',marginBottom:'80px',height:'30px',padding:'10px',paddingLeft:'20px'}}/>
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