import React from "react";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import LeftMenu from "../Components/Dashboard/LeftMenu";
import ConversationList from "../Components/Dashboard/ConversationList";
import styled from "styled-components";
import Conversations from "../Components/Dashboard/Conversations";


function Contacts(){
return(
<>
<DashboardHeader/>
<Body>
<LeftMenu/>
<ConversationList/>
<Conversations/>
</Body>
</>
)
}

export default Contacts

const Body=styled.div`
display:flex;
`