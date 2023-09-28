import React from 'react'

const ButtonOff = ({ isOn }) => {
  const downloadResume = () => {
    const pdfURL = "../../public/files/ArsamBakhtyariCV.pdf";
    const a = document.createElement("a");
    a.href = pdfURL;
    a.download = "ArsamBakhtyariCV.pdf";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    console.log("downloaded");
  };
  
  return (
    <button
      onClick={downloadResume}
      className='button'
      style={{ backgroundColor: `${isOn ? '#fff' : '#000'}`, color: `${isOn ? '#000' : '#fff'}` }}>
      Resume
    </button>
  )
}

export default ButtonOff