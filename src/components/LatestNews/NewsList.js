import LatestNewItem from './LatestNewItem';

// CSS
import './newslist.css'

function NewsList() {

    const news = [
        {
            title: "Then Came the Breeze // Dev Diaries - VALORANT",
            date: "06/18/21",
            type: "dev",
            img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt801e0b54b72c86f6/60c92bf2eefdde56c1143ab4/Dev_Diaries_Breeze_Article-Banner-06-18-2021.jpg?auto=webp&disable=upscale&height=274"
        },
        {
            title: "VALORANT TEST ENVIRONMENT STARTS JULY 9",
            date: "06/17/21",
            type: "announcements",
            img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca7db1a80f49bcb7/60b09c5bb29743655f635172/valorant-beta-header.jpg?auto=webp&disable=upscale&height=274"
        },
        {
            title: "KAY/O Agent Reveal Trailer - VALORANT",
            date: "06/17/21",
            type: "game updates",
            img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt046f7b69264e7620/60c94b48eefdde56c1143b17/KAYO-TRAILER-Article-Banner.jpg?auto=webp&disable=upscale&height=274"
        }
    ]

    return (
        <>
            <div className="news-list">
                {news.map(({ title, date, type, img }) => (
                    <LatestNewItem title={title} date={date} type={type} img={img} />
                ))}
            </div>
        </>
    )
}

export default NewsList
