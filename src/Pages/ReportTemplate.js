import logo from '../assets/notifilogo.png'
import styled from 'styled-components';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuotedata } from '../store/Actions/Auth.action';
const ReportTemplate = () => {
    let location = useLocation()


    const windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);
    console.log(location.pathname.split('?'))
    let quote = location.pathname
    let refnumber = quote?.[3]
    console.log(windowUrl,"num")
    let dispatch=useDispatch()
    useEffect(()=>{
    dispatch(getQuotedata('qqfwucv3trs'))
    },[])
    const quotedata = useSelector(state => state?.auth?.quote)
console.log(quotedata,'quotedata')
    const styles = {
        page: {
            marginLeft: '5rem',
            marginRight: '5rem',
            'page-break-after': 'always',

        },

        columnLayout: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '3rem 0 5rem 0',
            gap: '2rem',
        },

        column: {
            display: 'flex',
            flexDirection: 'column',
        },

        spacer2: {
            height: '2rem',
        },

        fullWidth: {
            //width: '100%',
            marginTop: '20px',
            height: '40px'
        },

        marginb0: {
            marginBottom: 0,
        },
        text: {
            fontSize: 14,
            fontWeight: '500'
        }
        , text1: {
            marginTop: '-10px',
            textAlign: 'start',
            fontSize: 14,
            fontWeight: '500'
        }
    };
    return (
        <MainContainer>
            <div style={styles.page}>
                <div style={styles.columnLayout}>
                    <div >
                        <h1 style={{ marginBottom: '-10px', textAlign: 'start' }}>
                            {"Quote"}
                        </h1>
                    </div>
                    <img style={styles.fullWidth} src={logo} />
                </div>

                <Container >
                    <div className='detailCont'>
                        <h4 style={{ fontSize: 14 }}>Swiftbel inc.</h4>
                        <p style={styles.text}>{`651  N Broad StSuite 206Middletown`}</p>
                        <p style={styles.text1}> Delaware 19709United States</p>
                        <p style={styles.text1}>16043584116</p>
                        <p style={styles.text1}>robertprasher@icloud.com</p>
                    </div>
                    <div className='detailCont'>
                        <h4 style={{ fontSize: 14 }}>Bill to</h4>
                        <p style={styles.text}>{`651  N Broad StSuite 206Middletown`}</p>
                        <p style={styles.text1}> Delaware 19709United States</p>
                        <p style={styles.text1}>16043584116</p>
                        <p style={styles.text1}>robertprasher@icloud.com</p>
                    </div>
                </Container>
                {/* <img style={styles.fullWidth} src="photo-2.png" /> */}
            </div>

            <div style={styles.page}>
                <div>
                    <h3>Thank you for your business! </h3>
                </div>

                <div >
                    <Table>

                        <tr style={{ backgroundColor: '#fff', borderBottom: '2pt solid #000' }}>

                            <td>{"Description"}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{"Quantity"}</td>



                            <td>{"Unit price"}</td>

                            <td></td>


                            <td>{"Amount"}</td>

                        </tr>


                        <tr style={{ backgroundColor: '#fff' }}>
                            <td>{"Hello"}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{"2"}</td>


                            <td>{"$100"}</td>

                            <td></td>


                            <td>{"$120"}</td>

                        </tr>
                        <tr style={{ backgroundColor: '#fff' }}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{"Sub total"}</td>
                            <td></td>
                            <td></td>
                            <td>{"$120"}</td>

                        </tr>
                        <tr style={{ backgroundColor: '#fff' }}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{"Total"}</td>
                            <td></td>
                            <td></td>
                            <td>{"$120"}</td>

                        </tr>

                    </Table>
                </div>


            </div>
        </MainContainer>
    );
};

export default ReportTemplate;
const MainContainer=styled.div`
overflow:auto;
`

const Container=styled.div`
display:flex;
 gap:2rem;
 .detailCont{
     width:50%;
     text-align:start;
 }
`
const Table = styled.table`
border-collapse: collapse;
  width: 100%;
text-align:start;

.divider{
font-weight:300;
line-height: 235%;
}

  tr:nth-child(odd){background-color: #FAFAFA}
  th:first-child{
    border-radius:10px 0 0 0px;
  }

  th:last-child{
    border-radius:0 10px 0px 0;
  }

  th {
    padding-top: 14px;
    padding-bottom: 14px;
    background-color: white;
    color: black;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }
  td{
    font-family: Inter;
font-style: normal;
font-weight: 400;
font-size: 14px;
padding:10px
  }
`