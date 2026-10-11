function Contact(){

return(
<div className="bg-light py-5">
    <div className="container">
        <h2 className="section-title">Свяжитесь с нами</h2>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="contact-form">
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" placeholder="Ваше имя"/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Тема"/>
                        </div>
                        <div className="mb-3">
                            <textarea rows="5" className="form-control" placeholder="Сообщение"></textarea>
                        </div>
                        <button type="submit" className="btn btn-custom text-white w-100 rounded-pill">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
)}
export default Contact;