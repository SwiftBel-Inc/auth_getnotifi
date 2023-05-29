import React from "react";
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { renderTop } from "../../services/Urls";

function DetailsPopup(props){
    const drawerBleeding = 56;
    const drawerBackdropProps = {
        style: {
          backgroundColor: 'transparent',
        },
      };

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
head:'Distance',
tail:props?.distance
},
{
head:'Destination',
tail:props?.destination
},
// {
// head:'Distance',
// tail:props?.distance
// },

// {
// head:'Duration',
// tail:props?.duration
// },
]

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
      if(newOpen===false){
        renderTop();
      }
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
        BackdropProps={drawerBackdropProps}
        disableScrollLock
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
          <p style={{fontSize:'22px',paddingLeft:'20px',fontWeight:'600'}}>Robert is on the way</p>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow:'auto',
          }}
        >
        <div style={{
        display:'flex',
        justifyContent:'space-between',
        marginTop:'10px'
        }}>
        <div style={{display:'flex'}}>
        <img src={'https://s3.amazonaws.com/swiftbel.com/truck.png'}
        style={{
        marginRight:'15px',
        height:'40px',
        width:'40px',
        marginTop:'40px'
        }}/>
        <div>
            <p
            style={{
            color:'gray',
            fontSize:'16px'
            }}>
            Starting point
            </p>
            <p
            style={{
            fontSize:'16px',
            marginTop:'-12px',
            fontWeight:'500',
            width:'90%',
            fontWeight:'600'
            }}>
            {props.startingpoint}
            </p>
        </div>
        </div>
        <div
        style={{
        width:'120px',
        borderRadius:'15px',
        padding:'7px',
        paddingBottom:'0px',
        textAlign:'center',
        background:'#ECECEC',
        cursor:'pointer',
        height:'40px',
        marginTop:'40px',
        marginRight:'10px'
        }}
        onClick={toggleDrawer(false)}
        >
         Navigate
        </div>
        </div>

        <div style={{display:'flex'}}>
        <div class="vertical-hr"></div>
        </div>

        <div style={{
        display:'flex',
        justifyContent:'space-between',
        }}>
        <div style={{display:'flex'}}>
        <img src={'https://s3.amazonaws.com/swiftbel.com/home-address+(1).png'}
        style={{
        marginRight:'15px',
        height:'40px',
        width:'40px',
        marginTop:'25px'
        }}/>
        <div>
            <p
            style={{
            color:'gray',
            fontSize:'16px'
            }}>
            Destination
            </p>
            <p
            style={{
            fontSize:'16px',
            marginTop:'-12px',
            fontWeight:'500',
            width:'90%',
            fontWeight:'600'
            }}>
            {props.destination}
            </p>
        </div>
        </div>
        <div
        style={{
        textAlign:'center',
        marginTop:'35px',
        marginRight:'10px'
        }}
        >
         {props.duration}
        </div>
        </div>
        <hr style={{marginTop:'10px',marginBottom:'10px'}}/>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <p><span style={{color:'gray'}}>Distance :</span> {props?.distance}</p>
        <p><span style={{color:'gray'}}>Duration :</span> {props?.duration}</p>
        </div>
        </StyledBox>
      </SwipeableDrawer>
    </Root>

</>
)
}

export default DetailsPopup

