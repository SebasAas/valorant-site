import coverVideo from '../../../assets/video/Retake-hero-desktop.mp4';
import coverImage from '../../../assets/images/Retake-hero-poster.jpg';

// Component
import Button from '../../Button/'

// SVG
import ValorantIcon from '../../../assets/svg/ValorantIcon';

// CSS
import './banner_video.css'

function BannerVideo() {
    return (
        <div className="banner-video">
            <div className="video">
                <video loop autoPlay muted poster={coverImage}>
                    <source src={coverVideo} type="video/mp4" ></source>
                </video>
            </div>
            <div className="banner-video-info">
                <div className="banner-data">
                    <p>A 5v5 character-based tactical shooter</p>
                    <div className="icon-valorant">
                        <ValorantIcon />
                    </div>
                </div>
                <Button variant="primary" >Play Free</Button>
            </div>
        </div>
    )
}

export default BannerVideo