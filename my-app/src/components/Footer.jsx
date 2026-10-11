function Footer(){

return(
<footer>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h4>WebStudio</h4>
                <p>Создаём качественные сайты с 2020 года. Более 100 довольных клиентов.</p>
            </div>
            <div className="col-md-3">
                <h5>Контакты</h5>
                <p>📞 +7 (999) 123-45-67<br/>✉️ info@webstudio.ru</p>
            </div>
            <div className="col-md-3">
                <h5>Мы в соцсетях</h5>
                <div className="social-links">
                    <a href="#">📘</a>
                    <a href="#">📸</a>
                    <a href="#">💬</a>
                    <a href="#">🎥</a>
                </div>
            </div>
        </div>
        <div className="text-center mt-4 pt-3" style={{borderTop: '1px solid rgba(255,255,255,0.1)'}}>
            <p className="mb-0">© 2025 WebStudio. Все права защищены.</p>
        </div>
    </div>
</footer>
)}
export default Footer;
