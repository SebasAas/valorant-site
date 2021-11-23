import { useInView } from 'react-intersection-observer';

// CSS
import './aboutus.css'

// Img
import coverImage from '../../assets/images/game-overview-poster-launch.jpg';


function AboutUs() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-180px 0px',
    });

    return (
        <div className="about-us">
            <div className="about-us-title">
                <h3 ref={ref} className={`${inView ? 'move-up' : ''}`}>We are valorant</h3>
                <div></div>
                <div className="code-value" ref={ref}>
                    <span className={`code-value-one ${inView ? 'to-left' : ''}`}>VLRT PR0T0C0L</span>
                    <span className={`code-value-two ${inView ? 'to-left' : ''}`}>MR0C - SWD - BR4</span>
                    <div></div>
                </div>
            </div>
            <div></div>
            <div className="about-us-info">
                <div className="d-col-6 t-col-12 m-col-12">
                    <h4>DEFY THE LIMITS</h4>
                    <p>
                        <span>
                            Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                        </span>
                        <span>
                            Watch the gameplay trailer here.
                        </span>
                    </p>
                </div>
                <aside className="d-col-6 t-col-12 m-col-12">
                    <div>
                        <img src={coverImage} loading="lazy" alt="video we are valorant" />
                        <button>
                            <svg viewBox="0 0 72 72"><path fill="none" stroke="#ece8e1" d="M33.5 34.5v-5l8 6v2l-8 6v-5m28-29l-7 7m-38 38l-7 7"></path></svg>
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default AboutUs
