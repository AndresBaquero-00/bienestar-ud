import { Box, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useResize } from "../../../hooks/useResize";

type Props = {
    title: string;
    bannerTitle: string;
    bannerImage: string;
    notAction?: JSX.Element;
    children: JSX.Element | JSX.Element[];
}

export const AuthLayout = ({ title, bannerTitle, bannerImage, notAction, children }: Props) => {
    const { width: screenWidth } = useResize();
    
    return (
        <main className="auth">
            <section className="auth__banner">
                {
                    screenWidth <= 900 ? 
                    <>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '8px 0',
                                position: 'relative'
                            }}
                        >
                            <IconButton
                                size="large"
                                className="button button--back"
                                href="/"
                            >
                                <ArrowBack />
                            </IconButton>
                            <h1 className="banner__title">
                                {bannerTitle}
                            </h1>
                        </Box>
                    </>
                    :
                    <>
                        <IconButton
                            size="large"
                            className="button button--back"
                            href="/"
                        >
                            <ArrowBack />
                        </IconButton>
                        <h1 className="banner__title">
                            {bannerTitle}
                        </h1>
                    </>
                }
                <img className="banner__image" src={bannerImage} alt="Banner" />
            </section>
            <section className="auth__content">
                <div className="content__container">
                    <h1 className="content__title">
                        {title}
                    </h1>
                    <div className="content__form">
                        {children}
                    </div>
                    {
                        notAction &&
                        <div className="content__notAction">
                            {notAction}
                        </div>
                    }
                </div>
            </section>
        </main>
    )
}
