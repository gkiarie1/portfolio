import React from 'react';

const Footer = () =>{

    const handleSocialClick = (url) => {
        window.open(url, '_blank');
      };

    return(
     <div className="footer">
         <button onClick={() => handleSocialClick('https://www.linkedin.com/in/george-kiarie-b51880132')}>
          <img src='/linkedin.png' alt="linkedin" className="social-icons" />
        </button>
        <button onClick={() => handleSocialClick(' https://github.com/gkiarie1')}>
          <img src='/github.png' alt="Github" className="social-icons" />
        </button>
    </div>
    );
};

export default Footer;