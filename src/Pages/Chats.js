import React from 'react';
import styled from 'styled-components';
import LeftChat from '../Components/Dashboard/LeftChat';
import RightChat from '../Components/Dashboard/RightChat';

function Chats() {
console.log(window.innerHeight,'heihgt')
  return (
    <Main style={{maxHeight:window.innerHeight-120}}>
      <Head>
     <Left>
      <LeftChat/>
     </Left>
      <Right>
        <RightChat/>
      </Right>
      </Head>
    </Main>
  );
}

export default Chats;

const Main = styled.div`
display:flex;
justify-content:center;
padding-bottom:70px;
margin-bottom:50px;
overflow-y:hidden;
`
const Head=styled.div`
width:1312px;
display:flex;
overflow-y:hidden;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
`
const Left = styled.div`
width:400px;
border-right:1px solid lightgray;
`
const Right = styled.div`
background:white;
width:900px;
margin-left:30px;
`