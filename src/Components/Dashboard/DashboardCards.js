import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getpaymentIntent } from "../../store/Actions/Auth.action";
function DashboardCards(){
        //const [open, setOpen] = React.useState(false);
        const [errormsg,setErrormsg]=useState('')
        let dispatch=useDispatch();
        const handleClickOpen = async(price) => {
            console.log(price,'pricee')
            const res = await dispatch(getpaymentIntent({
                "amount":price*100
            }))
            console.log(res,'resssss')
            if(res?.status===false){
                setErrormsg(res?.meesage)
                }
                if(res?.status===true){
                window.open(`${res?.data}`)
                }
        return res
        };
        const Carddetails=[
            {
            'head':'Essentials',
            'desc':'Ideal for small businesses who are getting started or for the self-employed',
            'price':'289',
            'annualprice':'249',
            'type':'/month',
            'buttontext':'Start a free trial',
            'details':[{
            'text':'1,000',
            'subtext':'contacts'
            },
            {
            'text':'Up to 3',
            'subtext':'team members'
            }
            ],
            'pointhead':'Get these powerful features:',
            'points':[
            'Capture online reviews instantly',
            'A text-based website chat',
            'Easy-to-use text-marketing',
            '100s of app integrations',
            'Secure and simple payment processing'
            ]
            },
            {
            'head':'Standard',
            'desc':'Perfect for business that are expanding, online and in person',
            'price':'449',
            'annualprice':'409',
            'type':'/month',
            'buttontext':'Buy now',
            'details':[{
            'text':'Unlimited',
            'subtext':'contacts'
            },
            {
            'text':'Unlimited',
            'subtext':'team members'
            }
            ],
            'pointhead':'All of the benifits of Essentials,and:',
            'points':[
            'Personalized setup & onboarding',
            'Website reporting & customization',
            'Automated review invitations',
            'Customized branding',
            ]
            },
            {
            'head':'Professional',
            'desc':'All the advanced business solutions a mature business lead',
            'price':'649',
            'annualprice':'599',
            'type':'/month',
            'buttontext':'Buy now',
            'details':[{
            'text':'Unlimited',
            'subtext':'contacts'
            },
            {
            'text':'Unlimited',
            'subtext':'team members'
            }
            ],
            'pointhead':'All of the benifits of Standard,and:',
            'points':[
            'Automations that streamline tasks',
            'Round-robin lead routing',
            'Personalized automated FAQs',
            'Multimedia marketing messages',
            ]
            }
            ]
let active = localStorage.getItem('type')
return(
    <>
<Main>
    <Head>
        <span className="errormsg">{errormsg}</span>
        <Cards>
        {Carddetails?.map((x,index)=>{
        return(
            <Card key={index}>
            <Heading>{x.head}</Heading>
            <Desc>{x.desc}</Desc>
            <Pushup>
            <Price>${active==='Annual'?x.annualprice:x.price}<Type>/month</Type></Price>
            </Pushup>
            <Agree>{active==='Annual'?'12 month agreement':''}</Agree>
            <Pushup>
            {x.details.map((y,index)=>{
            return(
                <Text key={index}><strong>{y.text}</strong> {y.subtext}</Text>
            )
            })}
            </Pushup>
            <InfoHead>{x.pointhead}</InfoHead>
            <Pointdiv>
            {x.points.map((z,index)=>{
            return(
            <Points key={index}><Dot></Dot>{z}</Points>
            )
            })}
            </Pointdiv>
            <div>
            <Free onClick={()=>handleClickOpen(active==='Annual'?x.annualprice:x.price)}>{x.buttontext}</Free>
      </div>
            </Card>
        )
        })}
        </Cards>

    </Head>
</Main>

      </>
)
}

export default DashboardCards


const Main = styled.div`
display:flex;
justify-content:center;
background: linear-gradient(to top left, transparent 50%, #eeecea 50%);
padding-bottom:70px;
margin-bottom:50px;
@media (min-width: 260px) and (max-width: 1311px){
    padding-top:80px;
    }
`
const Head=styled.div`
width:1312px;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
`
const Agree=styled.p`
color:gray;
font-size:12px;
text-align:start;
margin-top:-40px;
margin-bottom:40px;
`

const Card=styled.div`
background-color:white;
border: 2px solid #eeecea;
max-width: 350px;
width: 100%;
border-radius: 30px;
padding:30px;
margin-bottom:30px;
@media (min-width: 260px) and (max-width: 820px){
max-width: 300px;
width: 90%;
padding:20px;
margin-bottom:30px;
}
@media (min-width: 1050px) and (max-width: 1310px){
    max-width: 280px;
    width: 90%;
    padding:20px;
    margin-bottom:30px;
}

`
const Cards=styled.div`
display:flex;
justify-content:space-between;
margin-top:100px;
flex-wrap:wrap;
@media (min-width: 260px) and (max-width: 820px){
display:inline;
}
`
const Heading=styled.div`
font-size: 36px;
text-align:start;
margin-bottom:15px;
font-weight:500;
`
const Desc=styled.div`
font-size: 18px;
font-weight: 400;
color:gray;
text-align:start;
`
const Price=styled.p`
font-size: 48px;
font-weight:600px;
text-align:start;
`
const Type=styled.span`
color:gray;
font-size:12px;
`
const Text=styled.p`
font-size:16px;
font-weight:500px;
text-align:start;
margin-top:-8px;
`
const Pushup=styled.div`
margin-top:-25px;
`
const InfoHead=styled.p`
font-weight:900;
font-size:18px;
text-align:start;
margin-top:30px;
`
const Dot=styled.div`
background-color:black;
height:8px;
width:7px;
border-radius:50%;
margin-right:10px;
margin-top:5px;
`
const Points=styled.p`
display:flex;
justify-content:start;
text-align:start;
`
const Free=styled.button`
background-color:blue;
background:blue;
color:white;
font-weight:700;
border-radius:8px;
border:1px solid blue;
margin-right:10px;
height:48px;
margin-top:10px;
width:90%;
font-size:18px;
margin-left:-5px;
cursor:pointer;
`

const Pointdiv=styled.div`
height:180px;
`
