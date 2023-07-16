import React from 'react';

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-5"
     style={{ 
        width: '100%',
        padding: '10px',
        textAlign: 'center',
        backgroundColor:props.mode==='dark'?'#213555':'#FFE7CE', color:props.mode==='dark'?'white':'black'
       }} >
      <div className="container">
        <p className="mb-0">&copy; {currentYear} MZ Development. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
