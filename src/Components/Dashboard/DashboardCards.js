import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getpaymentIntent } from "../../store/Actions/Auth.action";
import { useNavigate } from "react-router-dom";
function DashboardCards(){
        //const [open, setOpen] = React.useState(false);
        // let active = localStorage.getItem('type')
        const[active,setActive]=useState('Monthly')
        const handleToggle=(type)=>{
            setActive(type)
            }
        const [errormsg,setErrormsg]=useState('')
        let dispatch=useDispatch();
        let navigate=useNavigate()
        const handleClickOpen = async(price) => {
        //     console.log(price,'pricee')
        //     const res = await dispatch(getpaymentIntent({
        //         "amount":price*100
        //     }))
        //     console.log(res,'resssss')
        //     if(res?.status===false){
        //         setErrormsg(res?.meesage)
        //         }
        //         if(res?.status===true){
        //         window.open(`${res?.data}`)
        //         }
        // return res
navigate(`/payment`)
localStorage.setItem('price',price)
localStorage.setItem('type',active)
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
return(
    <>
<Main>
    <Head>
        <span className="errormsg">{errormsg}</span>
        <Togglediv>
    <Toggle>
     <button className={active==='Monthly'?"active":"nonactive"} onClick={()=>handleToggle('Monthly')}>
     Monthly
     </button>
     <button className={active==='Annual'?"active":"nonactive"} onClick={()=>handleToggle('Annual')}>
      Annual
     </button>
    </Toggle>
    </Togglediv>
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
`
const Head=styled.div`
width:1312px;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
`
const Card=styled.div`
background-color:white;
width: 250px;
@media (min-width: 1100px) and (max-width: 1322px){
width: 220px;
}
@media (min-width: 260px) and (max-width: 1100px){
width: 75%;
padding:40px;
border-radius:20px;
margin-bottom:10px;
border: 2px solid #eeecea;
}


`
const Cards=styled.div`
display:flex;
justify-content:space-between;
margin-top:30px;
background:white;
flex-wrap:wrap;
border: 2px solid #eeecea;
border-radius: 30px;
padding:40px;
margin-bottom:30px;
@media (min-width: 260px) and (max-width: 1100px){
display:inline;
border: none;
border-radius: 0px;
background:transparent;
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
height:60px;
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
const Agree=styled.p`
color:gray;
font-size:12px;
text-align:start;
margin-top:-40px;
margin-bottom:40px;
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
height:40px;
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
const Demo=styled.button`
background-color:white;
background:white;
color:black;
font-weight:700;
border-radius:8px;
border:2px solid black;
margin-right:10px;
height:48px;
margin-top:10px;
width:90%;
font-size:18px;
margin-left:-5px;
`
const Pointdiv=styled.div`
height:230px;
margin-bottom:10px;
`
const Toggle=styled.div`
width:200px;
border-radius:50px;
background-color:#e3ddd8;
display:flex;
justify-content:space-evenly;
height:52px;
padding-top:7px;
padding-bottom:7px;
margin-top:100px;
cursor:pointer;
.active{
border-radius:50px;
background-color:white;
color:#333;
width:50%;
font-weight:700;
border:1px solid white;
cursor:pointer;
}
.nonactive{
color:#333;
font-weight:700;
border-radius:50px;
background-color:#e3ddd8;
border:1px solid #e3ddd8;
cursor:pointer;
}
`
const Togglediv=styled.div`
display:flex;
justify-content:center;
`