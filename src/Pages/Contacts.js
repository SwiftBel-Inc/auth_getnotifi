import React from "react";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import styled from "styled-components";
import ContactHead from "../Components/Dashboard/Contacts/ContactsHead";
import ContactTable from "../Components/Dashboard/Contacts/ContactTable";


function Contacts(){
return(
<>
<DashboardHeader/>
<ContactHead/>
<Hr/>
<ContactTable/>
</>
)
}

export default Contacts

const Hr=styled.hr`
border:1px solid #dedede;
margin-left:30px;
margin-right:30px;
`
