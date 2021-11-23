import { useInView } from 'react-intersection-observer';
import NewsList from './NewsList';
import AboutUs from '../AboutUs';

// CSS
import './latestnews.css'
import '../Common/common.css'

// SVG
import ArrowNextPage from '../../assets/svg/ArrowNextPage'

function LatestNews() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <div className="container-center latest-news">
            <div className="background-content">
                <h2>
                    <span>We are</span>
                    <span>Valorant</span>
                </h2>
            </div>
            <div className="block-box"></div>
            <div className="container">
                <div className="latest-new-items">
                    <span ref={ref} className={`title-news ${inView ? 'move-up' : ''}`}>Latest News</span>
                    <div>
                        <a href="#"><p>Go to news page</p> <span className="latest-arrow-next-icon"><ArrowNextPage /></span></a>
                    </div>
                </div>
                <NewsList />
                <div className="block-box-bottom"></div>
                <hr className="solid" />
                <AboutUs />
            </div>
        </div>
    )
}

export default LatestNews
