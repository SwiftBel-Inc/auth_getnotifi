import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import styled from "styled-components";
function ContactTable(){

return(
<>
<CustomTable>
      <Table sx={{ width:'96%' }} aria-label="simple table">
        <CustomHead>
          <TableRow>
             <TableCell> </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date Added</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </CustomHead>
        <TableBody>
            <TableRow>
             <TableCell ><Checkbox/></TableCell>
              <TableCell >
                <Flexbox>
                <Profile className="purple">
              <span>P</span>
              </Profile>
              <Names>Prakash Chanchal</Names>
                </Flexbox>
                </TableCell>
              <TableCell >-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>07/06/2023</TableCell>
              <TableCell>
                <Outeradd>
              <InnerAdd> +
              </InnerAdd>
              </Outeradd>
              </TableCell>
              <TableCell><Dots>...</Dots></TableCell>
            </TableRow>
            <TableRow>
             <TableCell ><Checkbox/></TableCell>
              <TableCell >
                <Flexbox>
                <Profile className="green">
              <span>A</span>
              </Profile>
              <Names>Ashwani Kumar Mishra</Names>
                </Flexbox>
                </TableCell>
              <TableCell >-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>07/06/2023</TableCell>
              <TableCell>
                <Outeradd>
              <InnerAdd> +
              </InnerAdd>
              </Outeradd>
              </TableCell>
              <TableCell><Dots>...</Dots></TableCell>
            </TableRow>
            <TableRow>
             <TableCell ><Checkbox/></TableCell>
              <TableCell >
                <Flexbox>
                <Profile className="dimgreen">
              <span>P</span>
              </Profile>
              <Names>Prachi Patel</Names>
                </Flexbox>
                </TableCell>
              <TableCell >-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>07/06/2023</TableCell>
              <TableCell>
                <Outeradd>
              <InnerAdd> +
              </InnerAdd>
              </Outeradd>
              </TableCell>
              <TableCell><Dots>...</Dots></TableCell>
            </TableRow>
            <TableRow>
             <TableCell ><Checkbox/></TableCell>
              <TableCell >
                <Flexbox>
                <Profile className="dimgreen">
              <span>P</span>
              </Profile>
              <Names>Priti Mishra</Names>
                </Flexbox>
                </TableCell>
              <TableCell >-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>07/06/2023</TableCell>
              <TableCell>
                <Outeradd>
              <InnerAdd> +
              </InnerAdd>
              </Outeradd>
              </TableCell>
              <TableCell><Dots>...</Dots></TableCell>
            </TableRow>
            <TableRow>
             <TableCell ><Checkbox/></TableCell>
              <TableCell >
                <Flexbox>
                <Profile className="green">
              <span>R</span>
              </Profile>
              <Names>Robby P.</Names>
                </Flexbox>
                </TableCell>
              <TableCell >(778) 891-8776</TableCell>
              <TableCell>-</TableCell>
              <TableCell>05/06/2023</TableCell>
              <TableCell>
                <Outeradd>
              <InnerAdd> +
              </InnerAdd>
              </Outeradd>
              </TableCell>
              <TableCell><Dots>...</Dots></TableCell>
            </TableRow>
            <TableRow>
             <TableCell ><Checkbox/></TableCell>
              <TableCell >
                <Flexbox>
                <Profile className="green">
              <span>R</span>
              </Profile>
              <Names>Robert Prasher</Names>
                </Flexbox>
                </TableCell>
              <TableCell >(604) 358-4116</TableCell>
              <TableCell>robert@getnotifi.com</TableCell>
              <TableCell>05/06/2023</TableCell>
              <TableCell>
                <Outeradd>
              <InnerAdd> +
              </InnerAdd>
              </Outeradd>
              </TableCell>
              <TableCell><Dots>...</Dots></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </CustomTable>
</>
)
}

export default ContactTable

const Profile=styled.div`
width:20px;
padding:3px;
text-align:center;
border-radius:5px;
color:white;
font-weight:600;
font-size:14px;
margin-right:10px;
`
const CustomTable=styled(TableContainer)`
margin-left:30px;
margin-right:30px;
margin-top:30px;
.purple{
background:#974EDE;
}
.green{
background:#32cd32;
}
.dimgreen{
background:#008000;
}
`
const CustomHead=styled(TableHead)`
background:#e9f5f8;
border-radius:8px;
`
const Flexbox=styled.div`
display:flex;
`
const Names=styled.span`
margin-top:4px;
`
const Outeradd=styled.div`
background:#F3F3F3;
border-radius:8px;
padding:8px;
width:18%;
display:flex;
justify-content:center;
`
const InnerAdd=styled.div`
color:rgb(70, 110, 255);
border:1px solid rgb(70, 110, 255);
border-radius:50%;
width:19px;
height:16px;
text-align:center;
font-size:12px;
font-weight:600;
`
const Dots=styled.b`
font-size:16px;
`