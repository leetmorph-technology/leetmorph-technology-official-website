import { Box, Container, Typography } from "@mui/material";
import { ArrowForward } from '@mui/icons-material';

export default function Ready() {
    return (
        <>
            <Container sx={{
                px: { md: "13%" },
                py: { xs: "3.5%", sm: "7%", md: "4%" },
                width: "100%",
                background: "#E9F1F8",
                mb: "5%",
                mt: "2.5%"
            }} maxWidth={false}>
                <Typography sx={{
                    fontSize: { xs: "30px", sm: "40px", md: "65px" },
                    fontWeight: "bold",
                    lineHeight: "auto",
                    textAlign: "center",
                    mb: "2.5%"
                }}
                    variant="h2">
                    <span style={{ color: "#255781" }}>Ready </span>
                    <span style={{ color: "#EF5366" }}>to get started? </span>
                </Typography>
                <Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5%"
                    }}>
                        <Box sx={{
                            textAlign: "center",
                        }}>
                            <Typography sx={{
                                fontSize: { xs: "22px", sm: "33px", md: "44px" },
                                fontWeight: "bold",
                                lineHeight: "auto",
                                my: { xs: "2.5%" },
                                color: "#255781",
                            }}>
                                <span style={{ color: "#255781" }}>Build with us </span>
                            </Typography>
                            <Typography
                                sx={{
                                    mb: "2.5%",
                                    fontSize: { xs: "19px", sm: "22px", md: "25px" },
                                    color: "#255781",
                                }}>
                                Accelerate your peace. Transform your rough concepts into concrete realities. Adapt your business for fierce competition.
                            </Typography>
                            <Typography
                                sx={{
                                    mb: "2.5%",
                                    fontSize: { xs: "19px", sm: "22px", md: "25px" },
                                    color: "#255781",
                                }}>
                                We combine startup agility with enterprise quality. Let's dive in together and share insights.
                            </Typography>
                        </Box>
                        <Box sx={{
                            margin: "auto",
                        }}>
                            <a href="#">
                                <Typography sx={{
                                    fontSize: { xs: "19px", sm: "22px", md: "25px" },
                                    px: "1.5%",
                                    py: "3.5%",
                                    background: "#CDE8FF",
                                    color: "#EF5366",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "190px",
                                    height: "max-content",
                                    // border:"2px solid red"
                                }}>
                                    Get Started <ArrowForward />
                                </Typography>
                            </a>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5%"
                    }}>
                        <Box sx={{
                            textAlign: "center",
                        }}>
                            <Typography sx={{
                                fontSize: { xs: "22px", sm: "33px", md: "44px" },
                                fontWeight: "bold",
                                lineHeight: "auto",
                                my: { xs: "2.5%" },
                                color: "#255781",
                            }}>
                                <span style={{ color: "#255781" }}>Join us </span>
                            </Typography>
                            <Typography
                                sx={{
                                    mb: "2.5%",
                                    fontSize: { xs: "19px", sm: "22px", md: "25px" },
                                    color: "#255781",
                                }}>
                                You're passionate about cutting-edge tech and building with top  companies. We offer a community of like-minded peers for innovation and  growth.                            </Typography>
                            <Typography
                                sx={{
                                    mb: "2.5%",
                                    fontSize: { xs: "19px", sm: "22px", md: "25px" },
                                    color: "#255781",
                                }}>
                                Let's forge connections and collaborate.                            </Typography>
                        </Box>
                        <Box sx={{
                            margin: "auto",
                        }}>
                            <a href="#">
                                <Typography sx={{
                                    fontSize: { xs: "19px", sm: "22px", md: "25px" },
                                    px: "1.5%",
                                    py: "3.5%",
                                    background: "#CDE8FF",
                                    color: "#EF5366",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "190px",
                                    height: "max-content",
                                    // border:"2px solid red"
                                }}>
                                    Join Us <ArrowForward />
                                </Typography>
                            </a>
                        </Box>
                    </Box>
                </Box>

            </Container>
        </>
    )
}