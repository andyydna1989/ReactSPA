import { useState } from "react";

function Careers() {

    const color1 = 'text-black';
    const color2 = 'text-red-500';
    const [txtColor, setTxtColor] = useState(color1);
    

    const chgColor = ()=>{ if(txtColor === color1){
        setTxtColor(color2);
    }
    else{setTxtColor(color1)}}

    setInterval(chgColor, 300)


  return (
  <>
   <div className={txtColor}> Careers Page Placeholder</div>
  </>
  );
}
export default Careers;