import React from 'react'
import styled from 'styled-components'

function AllReviews(){
return(
<Main>
<Heads>
<Heading>All Reviews</Heading>
<Flexbox>
<EmailReport>Email Report</EmailReport>
<AddContact>Send review invite</AddContact>
</Flexbox>
</Heads>
<Hr/>
<br/>
{/* <Flexbox2>
<Segment>
<Heading2>Recent Activity</Heading2>
</Segment>
<Segment2>
<Heading2>FAQs</Heading2>
<Hr/>
<Que>How do i connect my Google reviews ?</Que>
<Hr/>
<Que>How do i connect my Facebook reviews ?</Que>
<Hr/>
<Que>How do i connect other review sites ?</Que>
<Hr/>
<Que>Get support</Que>
</Segment2>
</Flexbox2> */}
</Main>
)
}

export default AllReviews

const Main = styled.div`
margin-top:60px;
margin-left:18.3%;
padding-left: 1.5rem;
width:100%;
padding-right:2rem;
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
const Heading2=styled.p`
font-weight:bold;
font-size: 16px;
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
padding-left:20px;
padding-right:20px;
border-radius:8px;
height:150px;
`
const Segment2=styled.div`
width:30%;
margin-top:-18px;
`
const Que=styled.p`
font-size:12px;
cursor:pointer;
text-align:start;
font-weight:400;
color:gray;
`