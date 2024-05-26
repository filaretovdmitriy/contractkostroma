import logo from "../../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { toggleMenu } from "../../store/menuSlice";
const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.menu);
  return (
    <header className="header">
      <div className="header__container">
        <a className="nav__icon nav__icon_phone" href="tel:+7 (4942) 31-05-05">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
            <path d="m24.056 17.48-6.152-2.767a1.161 1.161 0 0 0-.293-.097 1.656 1.656 0 0 0-.782.032 1.101 1.101 0 0 0-.39.196c-.022 0-.033.005-.033.016 0 .01-.01.016-.032.016l-3.223 2.767a.537.537 0 0 1-.26.065.362.362 0 0 1-.114-.016.899.899 0 0 1-.114-.049v.033c-1.064-.521-2.089-1.275-3.076-2.263-.988-.987-1.731-2.002-2.23-3.043a.207.207 0 0 1-.05-.098.445.445 0 0 1-.015-.098.67.67 0 0 1 .016-.162.636.636 0 0 1 .049-.13l2.767-3.256c0-.021.005-.032.016-.032.01 0 .016-.011.016-.033a1.1 1.1 0 0 0 .196-.39 1.652 1.652 0 0 0-.066-1.107v.032L7.553.944A1.626 1.626 0 0 0 6.966.26 1.549 1.549 0 0 0 6.087 0h-.195.032C4.232.239 2.821.993 1.693 2.262.564 3.532 0 5.035 0 6.771c0 2.517.477 4.883 1.432 7.096.955 2.214 2.257 4.145 3.907 5.794 1.649 1.65 3.58 2.952 5.794 3.907 2.213.955 4.579 1.432 7.096 1.432 1.736 0 3.24-.564 4.509-1.693 1.27-1.128 2.023-2.528 2.262-4.199v-.195c0-.326-.087-.619-.26-.88a1.418 1.418 0 0 0-.684-.553zm-.098 1.465c-.195 1.433-.83 2.626-1.904 3.581-1.074.955-2.338 1.432-3.792 1.432h-.033c-2.365 0-4.59-.455-6.673-1.367a17.214 17.214 0 0 1-5.469-3.678 17.214 17.214 0 0 1-3.678-5.469c-.912-2.083-1.367-4.308-1.367-6.673v-.033c0-1.454.477-2.718 1.432-3.792.955-1.074 2.138-1.709 3.548-1.904h.098c.108 0 .2.032.276.097a.725.725 0 0 1 .18.228L9.342 7.52c0 .021.006.048.017.08a.36.36 0 0 1 .016.115.535.535 0 0 1-.016.13.636.636 0 0 1-.05.13l-2.766 3.288-.016.016-.017.017c-.086.13-.151.265-.195.407a1.601 1.601 0 0 0-.065.472c0 .108.016.222.049.341.032.12.07.234.114.342v-.033c.564 1.172 1.378 2.285 2.441 3.337 1.064 1.053 2.181 1.861 3.353 2.425.108.065.217.109.326.13a1.795 1.795 0 0 0 .813-.032c.152-.043.283-.109.391-.195l.065-.033 3.223-2.767a.633.633 0 0 1 .13-.049.534.534 0 0 1 .13-.016.36.36 0 0 1 .114.016c.033.011.07.017.114.017h-.033l6.153 2.766c.108.044.19.109.244.196a.542.542 0 0 1 .081.293v.032z" />
          </svg>
        </a>
        <div className="header__logo">
          <a href="index.html">
            <img src={logo} />
          </a>
        </div>
        <div className="header__contacts">
          <a className="header__phone" href="tel:+7 (4942) 31-05-05">
            +7 (4942) 31-05-05
          </a>
          <a className="header__callback smooth" href="#join">
            Перезвоните мне
          </a>
        </div>
        {isOpen ? (
          <div className="nav" x-show="nav">
            <div className="nav__container">
              <a className="nav__item smooth" href="#payments">
                Выплаты и льготы
              </a>
              <a className="nav__item smooth" href="#support">
                Меры поддержки
              </a>
              <a className="nav__item smooth" href="#requirements">
                Требования
              </a>
              <a className="nav__item smooth" href="#steps">
                Вопрос-ответ
              </a>
              <a className="nav__item smooth" href="#help">
                Помощь семьям
              </a>
              <a className="nav__item smooth" href="#howto">
                Как заключить контракт?
              </a>
              <a className="nav__item smooth" href="#contacts">
                Контакты
              </a>
            </div>
          </div>
        ) : null}
        <div className="nav__icon nav__icon_menu">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              x-show="nav"
              x-cloak=""
              onClick={() => {
                dispatch(toggleMenu());
              }}
            >
              <path d="M0 24.305 24.305 0 25 .694.694 25 0 24.305z" />
              <path d="M25 24.305.694 0 0 .694 24.306 25l.694-.695z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              x-show="!nav"
              x-cloak=""
              onClick={() => {
                dispatch(toggleMenu());
              }}
            >
              <path d="M0 0h25v1H0V0zm0 12h25v1H0v-1zm0 12h25v1H0v-1z" />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
