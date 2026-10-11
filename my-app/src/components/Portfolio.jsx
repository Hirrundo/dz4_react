function Portfolio(){

return(
<div className="bg-light py-5">
    <div className="container">
        <h2 className="section-title">Наши работы</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="portfolio-item">
                    <img src="https://picsum.photos/id/20/400/300" alt="Проект 1"/>
                    <div className="portfolio-overlay">
                        <h5>Интернет-магазин</h5>
                        <p>Клиент: BrandShop</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="portfolio-item">
                    <img src="https://picsum.photos/id/26/400/300" alt="Проект 2"/>
                    <div className="portfolio-overlay">
                        <h5>Корпоративный сайт</h5>
                        <p>Клиент: ТехноПром</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="portfolio-item">
                    <img src="https://picsum.photos/id/30/400/300" alt="Проект 3"/>
                    <div className="portfolio-overlay">
                        <h5>Лендинг</h5>
                        <p>Клиент: FitLife</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)}
export default Portfolio;