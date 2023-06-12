import React, { useEffect } from "react";
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { renderTop } from "../../services/Urls";
import Up from '../../assets/up.png'
function DetailsPopup(props){

    function convertToMinutes(timeString) {
        const regex = /(\d+)\s*hours?\s*(\d+)?\s*mins?/;
        const matches = timeString?.match(regex);
        if (!matches) {
          return NaN;
        }
        const hours = parseInt(matches[1], 10);
        const minutes = parseInt(matches[2], 10) || 0;
        const totalMinutes = hours * 60 + minutes;
        return totalMinutes;
      }

      function addMinutesToCurrentTime(minutes) {
        console.log(minutes,'tot')
        const currentTime = new Date();
        currentTime.setMinutes(currentTime.getMinutes() + minutes);
        const hours = currentTime.getHours();
        const minutesFormatted = currentTime.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutesFormatted}`;
        return formattedTime;
      }

    const drawerBleeding = 96;
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
        disableDiscovery={true}
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
            background:'black'
          }}
        >
          {/* <Puller/> */}
          {/* <p style={{fontSize:'22px',paddingLeft:'20px',fontWeight:'600',color:'white'}}>Robert is on the way</p> */}
          <div style={flexStyle3}>
          <div style={shortDrawr}>
            <div style={Elementstyle}>
            <p style={bigelement}>{addMinutesToCurrentTime(convertToMinutes(props?.duration))}</p>
            <p style={smallElement}>Arrival</p>
            </div>
            <div style={Elementstyle}>
            <p style={bigelement}>{convertToMinutes(props?.duration)}</p>
            <p style={smallElement}>Min</p>
            </div>
            <div style={Elementstyle}>
            <p style={bigelement}>{parseInt(props?.distance)}</p>
            <p style={smallElement}>Km</p>
            </div>
          </div>
          <div >
<div style={arrowElement}>
<img src={Up} style={arrowStyle}></img>
</div>
          </div>
          </div>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow:'auto',
            background:'black',
            paddingTop:'35px'
          }}
        >
        <div style={flexStyle2}>
        <div style={flexStyle}>
        <img src={'https://s3.amazonaws.com/swiftbel.com/truck.png'}
        style={ImageStyle2}/>
        <div>
            <p
            style={subStyle}>
            Starting point
            </p>
            <p
            style={destinationStyle}>
            {props.startingpoint}
            </p>
        </div>
        </div>
        <div
        style={navigateStyle}
        onClick={toggleDrawer(false)}
        >
         Navigate
        </div>
        </div>

        <div style={flexStyle}>
        <div class="vertical-hr"></div>
        </div>

        <div style={flexStyle3}>
        <div style={flexStyle}>
        <img src={'https://s3.amazonaws.com/swiftbel.com/home-address+(1).png'}
        style={ImageStyle}/>
        <div>
            <p
            style={subStyle}>
            Destination
            </p>
            <p
            style={destinationStyle}>
            {props.destination}
            </p>
        </div>
        </div>
        {/* <div
        style={{
        textAlign:'center',
        marginTop:'35px',
        marginRight:'10px',
        color:'white'
        }}
        >
         {props.duration}
        </div> */}
        </div>
        {/* <hr style={{marginTop:'10px',marginBottom:'10px'}}/>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <p style={{color:'white'}}><span>Distance :</span> {props?.distance}</p>
        <p style={{color:'white'}}><span >Duration :</span> {props?.duration}</p>
        </div> */}
        </StyledBox>
      </SwipeableDrawer>
    </Root>

</>
)
}

export default DetailsPopup

const destinationStyle={
    fontSize:'16px',
    marginTop:'-12px',
    fontWeight:'500',
    width:'90%',
    fontWeight:'600',
    color:'white'
}

const subStyle={
    color:'white',
    fontSize:'16px'
}

const ImageStyle={
    marginRight:'15px',
    height:'40px',
    width:'40px',
    marginTop:'25px',
    background:'white',
    borderRadius:'50%',
    width:'40px',
    height:'40px',
    padding:'5px',
    paddingTop:'5px'
}

 const ImageStyle2={
    marginRight:'15px',
    height:'40px',
    width:'40px',
    marginTop:'40px'
 }

const flexStyle={
    display:'flex'
}

const navigateStyle={
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
}

const flexStyle2={
    display:'flex',
    justifyContent:'space-between',
    marginTop:'10px'
}

const flexStyle3={
    display:'flex',
    justifyContent:'space-between',
}

const shortDrawr={
    display:'flex',
    justifyContent:'start',
    color:'white',
    marginBottom:'0px',
    paddingLeft:'30px',
    paddingRight:'30px',
    marginTop:'-8px'
}

const Elementstyle={
    textAlign:'start',
    marginRight:'40px'
}

const bigelement={
    fontSize:'24px',
    fontWeight:'500'
}

const smallElement={
    marginTop:'-25px',
    color:'whitesmoke',
    fontSize:'18px'
}

const arrowElement={
    height:'40px',
    width:'40px',
    borderRadius:'50%',
    background:'gray',
    color:'white',
    textAlign:'center',
    marginRight:'25px',
    marginTop:'30px',
    paddingTop:'10px'
}

const arrowStyle={
height:'50%',
width:'30%',
transform: 'rotate(-90deg)'
}