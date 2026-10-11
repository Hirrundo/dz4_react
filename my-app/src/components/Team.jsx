function Team(){

return(
<div className="container py-5">
    <h2 className="section-title">Наша команда</h2>
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className="team-card">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Антон"/>
                <h5>Антон Иванов</h5>
                <p className="text-muted">CEO & Основатель</p>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="team-card">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Елена"/>
                <h5>Елена Смирнова</h5>
                <p className="text-muted">Lead Designer</p>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="team-card">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Дмитрий"/>
                <h5>Дмитрий Петров</h5>
                <p className="text-muted">Senior Developer</p>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="team-card">
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Мария"/>
                <h5>Мария Сидорова</h5>
                <p className="text-muted">Project Manager</p>
            </div>
        </div>
    </div>
</div>
)}
export default Team;