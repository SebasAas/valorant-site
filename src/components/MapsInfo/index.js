import './mapsinfo.css'

// Img
import mapsImage from '../../assets/images/maps-image.png';

function MapsInfo() {
    return (
        <>
            <div className="maps-info">
                <div>
                    <div>
                        <h2>Your Maps</h2>
                    </div>
                    <h5>Fight around the world</h5>
                    <p>
                        <span>
                            Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments.  Make the play others will imitate for years to come.
                        </span>
                    </p>
                </div>
                <div>
                    <button> View All maps</button>
                </div>
            </div>
            <div className="maps-image">
                <div>
                    <img src={mapsImage} alt="map image" />
                </div>
            </div>
        </>
    )
}

export default MapsInfo
