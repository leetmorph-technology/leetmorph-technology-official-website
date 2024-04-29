// import { BorderTop } from "@mui/icons-material";
import { Box, Container, Input, Typography } from "@mui/material";
import LeetmorphLogoWhite from "../image/footer/leetmorph_logo_white.png";
import { Podcasts, Facebook, Instagram, LinkedIn, X } from '@mui/icons-material';
import LeetmorphOLogo from "../image/footer/leetmorph_logo_only_o_white.png";

export default function Footer() {
    return (
        <>
            <Container sx={{
                // px: { md: "13%" },
                pt: { xs: "3.5%", sm: "7%", md: "4%" },
                pb: ".2%",
                width: "100%",
                background: "#010410",
                color: "#F7F8FB",
                mt: "2.5%"
            }} maxWidth={false}>
                <Box sx={{
                    display: "flex",
                    gap: ".5%",
                    mb: "1.5%",
                    justifyContent: "center",
                    alignItems: "center"

                }}>
                    <Typography>
                        Stay in the loop
                    </Typography>
                    <Input></Input>
                    <a href="#">
                        <Typography sx={{
                            fontSize: { xs: "19px", sm: "22px", md: "25px" },
                            px: "1.3%",
                            py: "0.3%",
                            background: "#F7F8FB",
                            color: "#010410",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "250px",
                            height: "max-content",
                            // borderRadius:".5rem"
                            // border:"2px solid red"
                        }}>
                            Subscribe for updates
                        </Typography>
                    </a>
                </Box>
                <Box sx={{
                    borderTop: "2px solid #D9D9D9",
                    borderBottom: "2px solid #D9D9D9",
                    pt: "2.5%",
                    pb: "5%",
                    mb: ".5%",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-evenly",
                    alignItems: "top"
                }}>
                    <Box>
                        <img src={LeetmorphLogoWhite} alt="This is the white logo of Leetmorph Technology Pvt. Ltd." />
                    </Box>
                    <Box>
                        <Box sx={{
                            display: "flex",
                            gap: "10%"
                        }}>
                            <Box>
                                <Typography sx={{
                                    color: "#F7F8FB",
                                    fontSize: { xs: "14pt", sm: "15pt", md: "16pt" },
                                    fontWeight: "bold",
                                    mb: "2.5%"
                                }}>We are Leetmorph</Typography>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>About Us</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>Resources</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>Contact Us</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>Blog</Typography>
                                </a>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    color: "#F7F8FB",
                                    fontSize: { xs: "14pt", sm: "15pt", md: "16pt" },
                                    fontWeight: "bold",
                                    mb: "2.5%"
                                }}>Work We Do</Typography>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>Web Development</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>Mobile App Development</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>WordPress Development Services</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>UI/UX Design</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>Search Engine Optimization (SEO)</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>Social Media Marketing and Management</Typography>
                                </a>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            gap: "10%"
                        }}>
                            <Box>
                                <Typography sx={{
                                    color: "#F7F8FB",
                                    fontSize: { xs: "14pt", sm: "15pt", md: "16pt" },
                                    fontWeight: "bold",
                                    mb: "2.5%"
                                }}>Connect with Us</Typography>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}><Podcasts /> Podcast</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}><Facebook /> Facebook</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}><X /> X</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}><Instagram /> Instagram</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}><LinkedIn /> Linkedin</Typography>
                                </a>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    color: "#F7F8FB",
                                    fontSize: { xs: "14pt", sm: "15pt", md: "16pt" },
                                    fontWeight: "bold",
                                    mb: "2.5%"
                                }}>Work with us</Typography>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>Careers</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>Fellowship</Typography>
                                </a>
                                <a href="#">
                                    <Typography sx={{
                                        color: "#F7F8FB"
                                    }}>Life At Leetmorph</Typography>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Box>
                        <img src={LeetmorphOLogo} alt="FavIcon of Leetmorph Technology Pvt. Ltd." />
                    </Box>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        gap:"2%"
                    }}>
                        <Typography sx={{
                            fontWeight: "bold",
                            width: "400px"
                        }}>
                            Copyright 2024, Leetmorph Technology Pvt. Ltd.
                        </Typography>
                        <Box sx={{
                            display:"flex",
                            gap:"1.5%",
                        }}>
                            <a href="#">
                                <Typography sx={{
                                    color: "#F7F8FB",
                                    width: "110px"
                                }}>Privacy Policy</Typography>
                            </a>
                            .
                            <a href="#">
                                <Typography sx={{
                                    color: "#F7F8FB",
                                    width: "140px"
                                }}>Terms Of Service</Typography>
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}