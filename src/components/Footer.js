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
              <a href='https://www.kct.ac.in/about/'>About</a> | <a href='https://www.kct.ac.in/our-programmes/'>Study</a> | <a href='https://www.kct.ac.in/student-research/'> Research </a>| <a href='https://www.kct.ac.in/the-campus/'>Student life</a> | <a href='https://admissions.kct.ac.in/'>Admissions</a> |<a href="https://www.kct.ac.in/placement/"> Placement</a> | <a href='https://blog.kct.ac.in/'>Blog</a> | <a href='https://www.kct.ac.in/media-centre/'>Media Centre</a> | <a href='https://www.kct.ac.in/social-consciousness-and-outreach/'>Social</a> | <a href='https://www.kct.ac.in/microcosm/'>Microcosm</a> | <a href='https://www.kct.ac.in/nirf-nba/'>NAAC & NIRF</a> |<a href="https://www.kct.ac.in/alumni/"> Alumni</a> | <a href="https://www.kct.ac.in/international/">International</a> |<a href='https://www.kct.ac.in/kumaraguru-institutions/'> Kumaraguru Institutions</a> | <a href='https://careers.kct.ac.in'>Careers</a> |<a href='https://www.kct.ac.in/live/'> Events</a>
            </p>
          </div>
          
        <div className="container">

          <div className='logo-contact'>
            <img src={kct} alt="kct"/>
            <div classname="">
              <div classname="col">
                <ul className="list-unstyled">
                <li className='link-heading'>Contact details</li>
                  <li>
                    <a href='tel:04222661100'>College : 0422-2661100</a>
                    </li>
                  <li>
                    <a href='fax:04222669406'>Fax : 0422-2669406</a></li>
                  <li>
                    <a href='tel:04222661515'>Placement : 0422-2661515 </a>
                  </li>
                  <li><a href='tell:04222661121'>Principal : 0422-2661121</a></li>
                  <li><a href='mailto:info@kct.ac.in'>E-mail : info@kct.ac.in</a></li>
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
                <li><a href='https://www.kct.ac.in/approval-letters/'>Approval Letters</a></li>
                <li><a href='https://propvr.tech/embed.html?cid=SPG18GMVTHUvhLvXC4nOXOZorjc2&proid=KCT%20TOUR'>KCT Virtual Tour</a></li>
                <li><a href='https://www.aicte-india.org/sites/default/files/list-suggested-books-indian-authors-publishers.pdf'>AICTE Recommended Books for Engg  <br /> Programmes </a></li>
                
                <li><a href='https://www.kct.ac.in/statutory-committees/'>Statutory committees</a></li>
                <li><a href='https://www.kct.ac.in/non-statutory-committees/'>Non - Statutory committees</a></li>
                <li><a href='https://www.kct.ac.in/approval-letters/'>NIRF</a></li>
                <li><a href='https://www.kct.ac.in/hr-policy/'>HR Policy</a></li>
                <li><a href='https://www.kct.ac.in/iqac/'>IQAC</a></li>
                <li><a href='https://www.kct.ac.in/right-to-information-rti/'>RTI</a></li>
                <li><a href='https://www.kct.ac.in/wp-content/themes/twentytwenty/assets/pdf/Higher-Education-Policy.pdf'>Higher Education Policy</a></li>
                <li><a href='https://www.kct.ac.in/wp-content/uploads/2021/10/ARITA-Report-2021.pdf'>ARIIA 2021 report</a></li>
                <li><a href='https://www.kct.ac.in/financial-statements/'>Financial Statements</a></li>
                <li><a href='https://www.kct.ac.in/wp-content/uploads/2021/08/Undertaking.pdf'>Undertaking</a></li>
                <li><a href='https://www.kct.ac.in/wp-content/themes/twentytwenty/assets/pdf/Mandatory-Disclosure-2020-21.pdf'>Mandatory Disclosure</a></li>
              </ul>
            </div>
          </div>
          

            {/* Coloumn2 */}
            <div className="col">
              <ul className="list-unstyled">
              <li className='link-heading'>Quick Links</li>
                <li><a href='https://kct.directverify.in/'>Apply for WES/ Transcript & Student <br /> verification / Genuineness Verification </a></li>
                
                <li><a href='https://www.kct.ac.in/anti-ragging-affidavit/'>Anti-Ragging Affidavit</a></li>
                <li><a href="https://www.ugc.ac.in/page/Videos-Regarding-Ragging.aspx">Anti-Ragging Videos</a></li>
                <li><a href='https://www.kct.ac.in/wp-content/uploads/2021/02/Anti-Ragging-Committee-2020-21.pdf'>Anti-Ragging Committee-2020-2021</a></li>
                <li><a href='https://www.kct.ac.in/wp-content/uploads/2021/02/Anti-Ragging-Squad-2020-21.pdf'>Anti-Ragging Squad-2020-21</a></li>
                <li><a href='https://www.kct.ac.in/internal-complaints-and-women-empowerment-committee/'>Internal Complaints and Women <br /> Empowerment Committee </a></li>
                
                <li><a href='https://smartapps.kct.ac.in/'>Smartapps</a></li>
                <li><a href='https://www.aicte-india.org/feedback/'>AICTE - Feedback</a></li>
              </ul>
              <ul className="list-unstyled">
              <li className="link-heading">Professional Chapters </li>
                <li><a href='https://acm.kct.ac.in/'>ACM Student Chapter</a></li>
              </ul>
            </div>
           


            {/* Coloumn3 */}
            <div className="col">
              <ul className="list-unstyled">
              <li className='link-heading'>Academics</li>
                <li><a href='https://www.kct.ac.in/academic-regulations/'>Academic Regulations</a></li>
                <li><a href='https://www.kct.ac.in/academic-calendar/'>Academic Calendar</a></li>
                <li><a href='https://www.kct.ac.in/coe-corner/'>CoE Corner</a></li>
                <li><a href='https://www.kct.ac.in/wp-content/uploads/2021/02/Prospectus-UGPG-KCT19-2020.pdf'>Prospectus KCT 2020</a></li>
                <li><a href='https://www.kct.ac.in/wp-content/themes/twentytwenty/assets/pdf/Annual-Report-2017-18.pdf'>Annual Report</a></li>
                <li><a href='https://www.kct.ac.in/learning-augmented'>Learning Augmented</a></li>
                <li><a href='https://grievances.kct.ac.in/'>Grievance redressal portal</a></li>
              <li className='link-heading' style={{marginTop:"20px"}}>Follow us on</li>
              </ul>
              <div className='social-media-icons'>
                <ul className='social-media-icons'>
                  <li>
                    <a href='https://www.facebook.com/KCT.edu/'>
                    <img className='social-media' src={facebook} alt="facebook"/></a>
                  </li>
                  <li>
                   <a href='https://www.instagram.com/kct_84/'>
                    <img  className='social-media' src={instagram} alt="instagram" style={{height:"30",width:"27px"}}/></a>
                  </li>
                  <li>
                   <a href='https://twitter.com/KCTOfficial'>
                    <img src={twitter} alt="twitter" className='social-media'/></a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/school/kct'>
                    <img src={linkedin} alt="linkedin" className='social-media'/></a>
                  </li>
                  <li>
                   <a href='https://www.youtube.com/channel/UCQ71Y6dp5f-HZaKB4ZQZDlg'>
                    <img src={youtube} alt="youtube" className='social-media'/></a>
                  </li>
                </ul>
              </div>
            </div>
        </div>

         <div className=" copyright" style={{backgroundColor:"#0d1d31"}}>
         <p className="col-sm" style={{color:"#808184"}}>
           &copy;Copyright {new Date().getFullYear()} Kumaraguru College of Technology, Coimbatore 641049.
         </p>
       </div>
      </div>
    );
}

export default Footer;