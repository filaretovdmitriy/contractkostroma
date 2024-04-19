const Footer = () => {
    return (
        <footer className="footer">
      <div className="footer__nav">
        <a className="footer__nav-item smooth" href="#payments">Выплаты и льготы</a
        ><a className="footer__nav-item smooth" href="#support">Меры поддержки</a
        ><a className="footer__nav-item smooth" href="#requirements">Требования</a
        ><a className="footer__nav-item smooth" href="#steps">Вопрос-ответ</a
        ><a className="footer__nav-item smooth" href="#help">Помощь семьям</a
        ><a className="footer__nav-item smooth" href="#howto"
          >Как заключить контракт?</a
        ><a className="footer__nav-item smooth" href="#contacts">Контакты</a>
      </div>
      <div className="footer__phone">
        <a href="tel:+7 (4942) 31-05-05">+7 (4942) 31-05-05</a>
      </div>
    </footer>
    )
}

export {Footer}