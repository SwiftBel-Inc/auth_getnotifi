import React from 'react';
import styled from 'styled-components';
function ContactHead(){
return(
<Main>
<Heading>Contacts</Heading>
<Flexbox >
<p><b>6</b> contacts</p>
<Vr>|</Vr>
<Upload>Upload</Upload>
<AddContact>Add contact</AddContact>
</Flexbox>
</Main>
)
}
export default ContactHead

const Main = styled.div`
margin-top:60px;
display:flex;
justify-content:space-between;
margin-right: 2.5rem;
padding-bottom: 0px;
padding-left: 1.5rem;
`
const Flexbox=styled.div`
display:flex;
margin-top:15px;
`
const Upload=styled.button`
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
const Vr=styled.p`
color:rgb(204, 204, 204);
margin-left:20px;
`
const Heading=styled.p`
font-weight:bold;
font-size: 22px;
line-height: 1.5;
text-align:start;
`