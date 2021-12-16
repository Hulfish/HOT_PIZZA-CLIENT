export default function Footer () {
    return (
        <footer className="d-flex flex-column justify-content-between footer" id="footer" >
            <div className="row footer-body" >
                <div className="col-md-2" >

                </div>
                <div className="col-md-8 col row" >
                    <div className="col-md-4 col-sm-6 col-12" >
                        <h4>HOT PIZZA.RU</h4>
                        <div>Все права защищены и все такое</div>
                        <ul className="list-deco-less" >
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12" >
                        <ul className="list-deco-less" >
                            <li>Какой-то номер 1</li>
                            <li>Какой-то номер 2</li>
                            <li>Какой-то номер 3</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12" >
                        <ul className="list-footer" >
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">Отзывы</a></li>
                            <li><a href="#">О нас</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-2" >
                    
                </div>
            </div>
            <div className="footer-end" >
                HOT PIZZA&#174; 2007-2021 all rights reserved
            </div>
        </footer>
    )
}