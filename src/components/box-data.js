import '../App.css';
import logosvg from '../Images/Weather-SVG/02d.svg'
function BoxData() {
    return(
      <div className="box">
        {/* <div className="box-data">
          <img src={logosvg} width={200} alt='logo'/>
          <div className='box-element'>
            <h4>Inside Temperature</h4>
            <span>17°C</span>
          </div>
          <div className='box-element'>
            <h4>Outside Temperature</h4>
            <span>28°C</span>
          </div>
        </div>
        <div className="box-data">
          <img src={logosvg} width={200} alt='logo'/>
          <div className='box-element'>
            <h4>Inside Temperature</h4>
            <span>17°C</span>
          </div>
          <div className='box-element'>
            <h4>Outside Temperature</h4>
            <span>28°C</span>
          </div>
        </div> */}

        <div className="box1">
          <div className='logo'>
            <img
              src={logosvg} alt="logo" className="image" />
            <h4>Scattered clouds</h4>
          </div>
          <div className="text">
            <h4>Inside Temperature</h4>
            <span>17°C</span>
          </div>
          <div className="text">
            <h4>Outside Temperature</h4>
            <span>28°C</span>
          </div>
        </div>

        <div className="container1">
          <div className="row">
            <div className="col1">
              <h3>Heading 1</h3>
              <span>Content 1</span>
            </div>
            <div className="col1">
              <h3>Heading 2</h3>
              <span>Content 2</span>
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <h3>Heading 3</h3>
              <span>Content 3</span>
            </div>
            <div className="col1">
              <h3>Heading 4</h3>
              <span>Content 4</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BoxData;