import { Box, Container, Typography } from "@mui/material";
import HeroLogo from "../image/logo/only_o_of_leetmorph.png";
import { ArrowForward } from '@mui/icons-material';
// import { Link } from "react-router-dom";


export default function HeroSection() {
    return (
        <>
            <Container
                sx={{
                    background: "rgba(75, 141, 197, 0.12)",
                    // padding: { xs: "1rem", sm: "2.5%", md: "5%" },
                    px: { md: "13%" },
                    py: {xs:"3.5%",sm:"7%",md:"4%"},
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: { xs: "column-reverse", md: "row" },
                    gap: { xs: "10%" },
                }}
                maxWidth={false}
            >
                <Box sx={{
                    maxWidth: { xs: "100%", sm: "90%", md: "35%" },
                    fontFamily: "SF Pro Display",
                    lineHeight: "150%",
                }}>
                    <Typography sx={{
                        fontSize: {xs:"35px",sm:"50px",md:"100px"},
                        fontWeight: "700",
                        lineHeight: "118.7%"
                    }}
                    variant="h1">
                        <span style={{ color: "#255781" }}>Redefine</span><span style={{ color: "#EF5366" }}>the better with </span><span style={{ color: "#255781" }}>Us.</span>
                    </Typography>
                    <Typography sx={{
                        color: "#255781",
                        fontSize: {xs:"19px",sm:"22px",md:"25px"},
                        my: {xs:"2.5%",sm:"3.5%",md:"5%"}
                    }}>
                        We help businesses and brands imagine and create the digital experiences of tomorrow.
                    </Typography>
                    <Box
                        sx={{
                            color: "#255781",
                            fontSize: {xs:"17px",sm:"23px",md:"30px"},
                            mt: { md: "10%" },
                            display: "flex",
                            gap: "5%",
                        }}>
                        <a href="#">
                            <Typography sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "2.5%",
                                width: "9rem",
                                fontWeight: "bold"
                            }}>Build with us <ArrowForward /></Typography>
                        </a>

                        <a href="#">
                            <Typography sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "2.5%",
                                width: "9rem",
                                fontWeight: "bold"
                            }}>Join us <ArrowForward /></Typography>
                        </a>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <img src={HeroLogo} alt="Logo for Leetmorph Technology Private Limited, Nepal" loading="lazy" />
                </Box>
            </Container>
        </>
    )
}