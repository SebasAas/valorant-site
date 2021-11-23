// Component
import Button from '../Button'

// SVG
import RiotSecondIcon from '../../assets/svg/RiotSecondIcon'
import RiotFirstIcon from '../../assets/svg/RiotFirstIcon'
import LanguagesIcon from '../../assets/svg/LanguagesIcon';

// CSS
import './navbar.css';


function Navbar() {

    return (
        <>
            <div className="profile d-col-2 t-col-2 m-col-2">
                <a className="riot_logo"></a>
                <span className="profile-status"></span>
                <span className="menu">
                    <RiotFirstIcon />
                </span>
                <span className="riot-app-logo">
                    <RiotSecondIcon />
                </span>
                <hr />
            </div>
            <div className="links d-col-7 t-col-7 m-col-7">
                <a href="#">Game Info</a>
                <a href="#">Media</a>
                <a href="#">News</a>
                <a href="#">Leaderboards</a>
                <a href="#">Support</a>
                <a href="#">Support</a>
                <a href="#">Support</a>
            </div>
            <div className="join-us d-col-3 t-col-3 m-col-3">
                <span>
                    <LanguagesIcon />
                </span>
                <Button variant="btn-secondary">Play Now</Button>
            </div>
        </>
    )

}

export default Navbar;