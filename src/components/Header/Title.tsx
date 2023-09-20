import "./Title.css";
import moon from '../../images/icon-moon.svg';
import sun from '../../images/icon-sun.svg';


export default function Title(props: { onClick: () => void; activeLight: boolean }) {


    return (
        <div className="titleBox">
            <p className={`titleText ${props.activeLight ? 'TitleLightMode' : 'TitleDarkMode'} `}>devfinder</p>
            <div className="darkAndLightChangeBox" onClick={props.onClick}>
                {props.activeLight ?

                    (
                        <div className="moonAndSunIconsBox">
                            <p>DARK</p>
                            <img src={moon} alt="moon" />
                        </div>
                    ) :
                    (
                        <div className="moonAndSunIconsBox">
                            <p className="TitleDarkMode">LIGHT</p>
                            <img src={sun} alt="sun" />
                        </div>
                    )
                }

            </div>
        </div>
    )
}
