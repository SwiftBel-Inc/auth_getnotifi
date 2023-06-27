import React from "react";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import styled from "styled-components";
import LeftMenu from "../Components/Dashboard/Reviews/LeftMenu";
import GetStarted from "../Components/Dashboard/Reviews/GetStarted";


function Reviews(){
return(
<>
<DashboardHeader/>
<Body>
<LeftMenu/>
<GetStarted/>
</Body>
</>
)
}

export default Reviews

const Body=styled.div`
display:flex;
`