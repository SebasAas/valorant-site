import './latestnewsitem.css'

function LatestNewItem({ title, date, type, img }) {
    return (
        <div className="latest-new d-col-4 t-col-6 m-col-12">
            <a>
                <picture className="latest-new-picture">
                    <img loading="lazy" src={img} alt={title} />
                </picture>

                {/* <div class="overlay simple-overlay"></div> */}
                <div className="date-type">
                    <span>{date}</span> <span>{type}</span>
                </div>
                <h3>{title}</h3>
            </a>
        </div>
    )
}

export default LatestNewItem
