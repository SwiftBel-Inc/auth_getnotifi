import React from "react";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import styled from "styled-components";
import LeftMenu from "../Components/Dashboard/Reviews/LeftMenu";
import GetStarted from "../Components/Dashboard/Reviews/GetStarted";
import { useSelector } from "react-redux";
import AllReviews from "../Components/Dashboard/Reviews/AllReviews";
import NeedsResponse from "../Components/Dashboard/Reviews/NeedsResponse";


function Reviews(){
    const activemenu = useSelector(state => state?.auth?.activemenu)
console.log(activemenu,'activemenu')
return(
<>
<DashboardHeader/>
<Body>
<LeftMenu/>
{activemenu==='Get Started'
?
<GetStarted/>
:
activemenu==='All Reviews' ?
<AllReviews/>
:activemenu==='Needs Response'?
<NeedsResponse/>
:''}
</Body>
</>
)
}

export default Reviews

const Body=styled.div`
display:flex;
`