import React from "react";

const Footer = () => {
  var d = new Date();
  var currentYear = d.getFullYear();

  return (
    <>
      <footer>
        <p>Copyright &copy; {currentYear}</p>
      </footer>
    </>
  );
};

export default Footer;
