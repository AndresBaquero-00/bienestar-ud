
type Props = {
    position: 'relative' | 'absolute';
}

export const HeaderComponent = ({ position }: Props) => {
    return (
        <header 
            className="header" 
            style={{
                position: position,
                zIndex: 1000
            }}
        >
            <div className="header__logo"></div>
            <div className="header__menu">
                <ul className="menu">
                    <a href="/" className="menu__item">Home</a>
                    <a href="/" className="menu__item">About Us</a>
                    <a href="/" className="menu__item">Help</a>
                </ul>
            </div>
        </header>
    )
}
