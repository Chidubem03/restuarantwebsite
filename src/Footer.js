 import Instagram from "@mui/icons-material/Instagram";
 import Twitter from "@mui/icons-material/Twitter";
 import Facebook from "@mui/icons-material/Facebook";
 import LinkedIn from "@mui/icons-material/LinkedIn";
 const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footerContainer">
            <div className="socialMedia">
                <Instagram />
                <Twitter/>
                <Facebook/>
                <LinkedIn/>
                </div>
                <p>&copy; 2023</p>
                </div>
            
        </div>
     );
 }
  
 export default Footer;