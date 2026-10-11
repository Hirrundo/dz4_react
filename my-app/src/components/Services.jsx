function Services(){

return(
<div className="container py-5">
    <h2 className="section-title">Наши услуги</h2>
    <div className="row">
        <div className="col-md-4">
            <div className="service-card">
                <div className="service-icon">💻</div>
                <h4>Веб-разработка</h4>
                <p>Создаём сайты любой сложности: от лендингов до интернет-магазинов</p>
            </div>
        </div>
        <div className="col-md-4">
            <div className="service-card">
                <div className="service-icon">🎨</div>
                <h4>UI/UX дизайн</h4>
                <p>Проектируем удобные и красивые интерфейсы для ваших пользователей</p>
            </div>
        </div>
        <div className="col-md-4">
            <div className="service-card">
                <div className="service-icon">📈</div>
                <h4>SEO продвижение</h4>
                <p>Выводим сайты в топ поисковых систем и увеличиваем продажи</p>
            </div>
        </div>
    </div>
</div>
)}
export default Services;