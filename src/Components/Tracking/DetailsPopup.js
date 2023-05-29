import React from "react";
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

function DetailsPopup(props){
    const drawerBleeding = 56;

  const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
      theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
  }));

  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));


    const { window } = props;
    const [open, setOpen] = React.useState(false);
const headings=[
{
head:'Starting point',
tail:props?.startingpoint
},
{
head:'Destination',
tail:props?.destination
},
{
head:'Distance',
tail:props?.distance
},
{
head:'Duration',
tail:props?.duration
},
]

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
      if(newOpen===true){
        document.body.style.overflow = 'hidden';
    }
      else{
        document.body.style.overflow = 'auto';
    }
    };

    const container = window !== undefined ? () => window().document.body : undefined;
return(
<>
<Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <p style={{fontSize:'18px',paddingLeft:'20px'}}>Robert is on the way</p>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
         {headings?.map((x)=>{
        return(<div style={{display:'flex'}}>
            <div>
             {x.head==='Starting point'?
            <img src={'https://s3.amazonaws.com/swiftbel.com/tracking+(1).png'} style={{marginBottom:'-30px',marginRight:'15px'}}/>
             :x.head==='Destination'?
             <img src={'https://s3.amazonaws.com/swiftbel.com/home-address+(1).png'} style={{marginBottom:'-30px',marginRight:'15px'}}/>
             :<div style={{width:'50px'}}></div>
            }
            </div>
            <div>
            <p style={{color:'gray',fontSize:'12px'}}>{x.head}</p>
            <p  style={{fontSize:'14px',marginTop:'-10px',fontWeight:'500'}}>{x.tail}</p>
            </div>
           </div>
        )
        })}
        </StyledBox>
      </SwipeableDrawer>
    </Root>

</>
)
}

export default DetailsPopup

