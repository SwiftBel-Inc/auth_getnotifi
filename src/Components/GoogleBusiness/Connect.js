import React, { useEffect } from "react";
import styled from "styled-components";
import GoogleLogin from 'react-google-login';

function Connect(){
    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '943526723324-31g5g1h4uqi9qjnjhr4p6hjun1in96oc.apps.googleusercontent.com',
                plugin_name: "chats",
                scope:'https://www.googleapis.com/auth/business.manage'
            })
        })
      }, []);
    const responseGoogle = (response) => {
      console.log(response,'responsee');
      const headers = new Headers({
        Authorization: `Bearer ${response.accessToken}`,
      });
      fetch('https://cors-anywhere.herokuapp.com/https://mybusiness.googleapis.com/v4/accounts', { headers })
        .then(response => response.json())
        .then(data => {
          console.log(data,'successfully connected');
        })
        .catch(error => {
          console.error(error);
        });
    };

return(
<Main>
    <Head>
<Segment>
<GoogleLogin
      clientId="943526723324-31g5g1h4uqi9qjnjhr4p6hjun1in96oc.apps.googleusercontent.com"
      buttonText="Connect google business"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      redirectUri='http://localhost:3000/google-business'
      scope="https://www.googleapis.com/auth/business.manage"
      accessType="offline"
      prompt="consent"
      uxMode='redirect'
      cookiePolicy={'single_host_origin'}
    />
    <div>
    <Text><Status></Status>Not connected yet</Text>
    </div>
</Segment>


    </Head>
</Main>
)
}
export default Connect


const Main = styled.div`
display:flex;
justify-content:center;
padding-bottom:70px;
margin-bottom:50px;
`
const Head=styled.div`
width:1312px;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
`
const Segment=styled.div`
margin:50px;
padding:25px;
border:1px solid lightgray;
display:flex;
justify-content:space-between;
border-radius:10px;
`
const Text = styled.div`
text-align:start;
font-size:14px;
color:gray;
display:flex;
`
const Status=styled.div`
background:lightgray;
border-radius:50%;
height:8px;
width:8px;
margin-top:5px;
margin-right:7px;
`