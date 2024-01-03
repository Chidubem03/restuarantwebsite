import {Link} from 'react-router-dom';
import BgImage from './Images/bg_image.jpg';

const Home = () => {
    return ( 
        <div className="home" style={{backgroundImage: `url(${BgImage})` }}>
            <div className="header-container" >
                <h1>Rita's Kitchen</h1>
                <p>Come Hungry, Leave Satisfied</p>
                <Link to="/menu"> 
                    <button>ORDER NOW</button>
                    </Link>
            </div>
        </div>
     );
}
 
export default Home;