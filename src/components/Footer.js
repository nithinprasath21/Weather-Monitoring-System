import '../App.css';
import kct from "../Images/logo.png";
import facebook from "../Images/facebook.svg"
import instagram from "../Images/instagram.svg"
import twitter from "../Images/twitter.svg"
import linkedin from "../Images/linkedin.svg"
import youtube from "../Images/youtube.svg"
function Footer() {
    return(
      <div className="mainfooter">
          <div className="top-link">
          {/* <hr /> */}
            <p className="col-sm">
              About | Study | Research | Student life | Placement | Blog | Media Centre | Social | Microcosm | NAAC & NIRF | Alumni | International | Kumaraguru | Institutions | Careers | Events
            </p>
          </div>
          
        <div className="container">

          <div className='logo-contact'>
            <img src={kct} alt="kct"/>
            <div classname="">
              <div classname="col">
                <ul className="list-unstyled">
                <li className='link-heading'>Contact details</li>
                  <li>College : 0422-2661100</li>
                  <li>Fax : 0422-2669406</li>
                  <li>Placement : 0422-2661515</li>
                  <li>Principal : 0422-2661121</li>
                  <li>E-mail : info@kct.ac.in</li>
                  <li>Address :</li>
                  <li>Kumaraguru College of Technology,</li>
                  <li>Saravanamaptti, Chinnavedampatti,</li>
                  <li>Coimbatore- 641049, Tamilnadu</li>
                </ul>
              </div>
            </div>
          </div>
          
         <div className="explore">
            {/* Coloumn1 */}
            <div className="col">
              <ul className="list-unstyled">
              <li className='link-heading'>Explore</li>
                <li>Approval Letters</li>
                <li>KCT Virtual Tour</li>
                <li>AICTE Recommended Books for Engg</li>
                <li>Programmes</li>
                <li>Statutory committees</li>
                <li>Non - Statutory committees</li>
                <li>NIRF</li>
                <li>HR Policy</li>
                <li>IQAC</li>
                <li>RTI</li>
                <li>Higher Education Policy</li>
                <li>ARIIA 2021 report</li>
                <li>Financial Statements</li>
                <li>Undertaking</li>
                <li>Mandatory Disclosure</li>
              </ul>
            </div>
          </div>
          

            {/* Coloumn2 */}
            <div className="col">
              <ul className="list-unstyled">
              <li className='link-heading'>Quick Links</li>
                <li>Apply for WES/ Transcript & Student</li>
                <li>verification / Genuineness Verification</li>
                <li>Anti-Ragging</li>
                <li>Internal Complaints and Women</li>
                <li>Empowerment Committee</li>
                <li>Smartapps</li>
                <li>AICTE - Feedback</li>
              </ul>
              <ul className="list-unstyled">
              <li className="link-heading">Professional Chapters </li>
                <li>ACM Student Chapter</li>
              </ul>
            </div>
           


            {/* Coloumn3 */}
            <div className="col">
              <ul className="list-unstyled">
              <li className='link-heading'>Academics</li>
                <li>Academic Regulations</li>
                <li>Academic Calendar</li>
                <li>CoE Corner</li>
                <li>Prospectus KCT 2020</li>
                <li>Annual Report</li>
                <li>Learning Augmented</li>
                <li>Grievance redressal portal</li>
              <li className='link-heading' style={{marginTop:"20px"}}>Follow us on</li>
              </ul>
              <div className='social-media-icons'>
                <ul className='social-media-icons'>
                  <li>
                    <img className='social-media' src={facebook} alt="facebook"/>
                  </li>
                  <li>
                    <img  className='social-media' src={instagram} alt="instagram" style={{height:"30",width:"27px"}}/>
                  </li>
                  <li>
                    <img src={twitter} alt="twitter" className='social-media'/>
                  </li>
                  <li>
                    <img src={linkedin} alt="linkedin" className='social-media'/>
                  </li>
                  <li>
                    <img src={youtube} alt="youtube" className='social-media'/>
                  </li>
                </ul>
              </div>
            </div>
        </div>

         <div className=" copyright" style={{backgroundColor:"#0d1d31"}}>
         <p className="col-sm" style={{color:"#808184"}}>
           &copy;Copyright &copy;{new Date().getFullYear()} Kumaraguru College of Technology, Coimbatore 641049.
         </p>
       </div>
      </div>
    );
}

export default Footer;