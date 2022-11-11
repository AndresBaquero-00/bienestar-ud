import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

type Props = {
    contentTitle?: string;
    bannerDesc?: string;
    children?: JSX.Element | JSX.Element[];
}

export const AuthLayout = ({ contentTitle, bannerDesc, children }: Props) => {
    return (
        <main className="auth-page">
            <div className="banner__section">
                <div className="banner__image"></div>
                <div className="banner__desc">
                    <div className="desc__title">
                        Bienvenido al módulo de Bienestar Institucional.
                    </div>
                    <div className="desc__text">
                        { bannerDesc }
                    </div>
                </div>
            </div>
            <div className="content__section">
                <div className="content__button-back">
                    <IconButton>
                        <ArrowBack />
                    </IconButton>
                </div>
                <div className="content__title">
                    { contentTitle }
                </div>
                <div className="content__form">
                    { children }
                </div>
            </div>
        </main>
    )
}
