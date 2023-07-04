import { useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import ReportTemplate from './ReportTemplate';
import styled from 'styled-components';
// import { Button } from '@mui/material';

function Quote() {
	const reportTemplateRef = useRef(null);
	const handleGeneratePdf = () => {
		const doc = new jsPDF({
      orientation: 'P',
			format: 'a3',
      unit: 'pt',
		});
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
      width: 800,
        windowWidth: 800
		});
	};
    useEffect(() => {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=0.5';

        const head = document.head;
        head.appendChild(meta);

        return () => {
          head.removeChild(meta);
        };
      }, []);
	return (
		<MainContainer>
      <div style={{display:'flex',justifyContent:'flex-end',marginRight:'3rem'}}>
			<CustomButton  onClick={handleGeneratePdf}>
			⬇	Download
			</CustomButton>
      </div>
			<div ref={reportTemplateRef}>
				<ReportTemplate />
			</div>
		</MainContainer>
	);
}

export default Quote;
const MainContainer=styled.div`
overflow:scroll;
@media (min-width: 768px) {
    body {
      zoom: 3;
    }
  }

`
const CustomButton=styled.button`
width:130px;
height:44px;
margin-top:15px;
border-radius:8px;
border:1px solid white;
color:white;
font-size:16px;
background:rgb(70, 110, 255);
cursor:pointer;
`