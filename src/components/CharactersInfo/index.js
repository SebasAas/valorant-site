import Button from '../Button/'

// import CharactersHome from '../../assets/svg/CharactersHome'
import CharacterAboutUs from '../../assets/svg/CharacterAboutUs'
import { useInView } from 'react-intersection-observer'

import './charactersinfo.css'

function CharactersInfo() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    let characterEl = document.getElementsByClassName('character-vector')[0]

    window.onscroll = function () {
        scrollRotate();
    };

    function scrollRotate() {
        const checkWidth = window.pageYOffset - 2100;
        if (parseInt(checkWidth) < -200) return
        if (checkWidth > 100) return
        characterEl.style.transform = "translateY(-" + checkWidth + "px)";
    }


    return (
        <div className="character-info">

            <div className=" d-col-6 t-col-12 m-col-12">
                <div className="character-vector">
                    {<CharacterAboutUs />}

                </div>
            </div>
            <div className="character-info-table d-col-6 t-col-12 m-col-12">
                <div></div>
                <div className="character-info-data">
                    <div className="character-info-title-container">
                        <h2 ref={ref} className={`character-info-title ${inView ? 'move-up' : ''}`}>Your Agents</h2>
                    </div>
                    <h4>creativity is your greatest weapon</h4>
                    <p>
                        <span>More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.</span>
                    </p>
                    <div className="character-btn">
                        <Button btnColor="#ece7e1" labelColor="red">
                            Button
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharactersInfo
