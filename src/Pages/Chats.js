import React from 'react';
import styled from 'styled-components';

function Chats() {

  return (
    <Main>
      <Head>
     <Left>

     </Left>
      <Right>
<hr style={{marginTop:'100px'}}/>
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
`
const Head=styled.div`
width:1312px;
display:flex;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
`
const Left = styled.div`
width:300px;
border-right:1px solid gray;
height:1000px;
`
const Right = styled.div`

`