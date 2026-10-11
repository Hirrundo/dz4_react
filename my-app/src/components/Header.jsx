function Header(){

return(
<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">WebStudio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#">Главная</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Услуги</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Портфолио</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Команда</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Контакты</a></li>
            </ul>
        </div>
    </div>
</nav>
)}
export default Header;