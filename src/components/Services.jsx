import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import AppDevlopmentService from '../image/services_photo/app_development.png';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Services() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container sx={{
            px: { md: "13%" },
            py: { xs: "3.5%", sm: "7%", md: "4%" },
            width: "100%",
        }} maxWidth={false}>
            <Typography sx={{
                fontSize: { xs: "30px", sm: "40px", md: "65px" },
                fontWeight: "bold",
                lineHeight: "auto",
                textAlign: "center",
            }}>
                <span style={{ color: "#EF5366" }}>Services </span>
                <span style={{ color: "#255781" }}>we offer </span>
            </Typography>
            <Box sx={{ width: '100%', color: '#255781' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', fontSize: { xs: "17px", sm: "20px", md: "23px" } }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                        <Tab label="App Development" {...a11yProps(0)} />
                        <Tab label="Design" {...a11yProps(1)} />
                        <Tab label="Quality Assurance" {...a11yProps(2)} />
                        <Tab label="Digital Marketing" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0} sx={{border: "none"}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column-reverse", md: "row" },
                        gap: { md: "5%" },
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            width: { xs: "100%", md: "70%" },
                            // border:{md:"2px solid red"}
                        }}>
                            <Typography sx={{
                                fontSize: { xs: "22px", sm: "33px", md: "44px" },
                                fontWeight: "bold",
                                lineHeight: "auto",
                                textAlign: "left",
                                my: { xs: "2.5%", md: "0" },
                            }}>
                                <span style={{ color: "#EF5366" }}>Deliver </span>
                                <span style={{ color: "#255781" }}>value </span>
                                <span style={{ color: "#EF5366" }}>not just products</span>
                            </Typography>
                            <Typography sx={{
                                fontSize: { xs: "17px", sm: "20px", md: "23px" },
                            }}>
                                Craft captivating digital journeys that resonate with your audience.  Discover our proven methodologies tailored to crafting software  solutions that not only address challenges but also captivate users and  drive business success.
                            </Typography>
                        </Box>
                        <Box sx={{
                            height: "auto",
                            width: { xs: "80%", sm: "60%", md: "20%" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // border:"2px solid red",
                            margin: "0 auto"
                        }}>
                            <img src={AppDevlopmentService} style={{
                                width: "100%",
                                height: "100%"
                            }} alt='We provide you with the better app development facility.' />
                        </Box>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column-reverse", md: "row" },
                        gap: { md: "5%" },
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            width: { xs: "100%", md: "70%" },
                            // border:{md:"2px solid red"}
                        }}>
                            <Typography sx={{
                                fontSize: { xs: "22px", sm: "33px", md: "44px" },
                                fontWeight: "bold",
                                lineHeight: "auto",
                                textAlign: "left",
                                my: { xs: "2.5%", md: "0" },
                            }}>
                                <span style={{ color: "#EF5366" }}>Elevate Experiences </span>
                                <span style={{ color: "#255781" }}>, Designing Digital Delights. </span>
                            </Typography>
                            <Typography sx={{
                                fontSize: { xs: "17px", sm: "20px", md: "23px" },
                            }}>
                                Our Expertise Transforms UI/UX, Creating Seamless Journeys that Delight Users and Propel Business Success. Explore Our Proven Methodologies to Craft Solutions that Captivate and Drive Results.                            </Typography>
                        </Box>
                        <Box sx={{
                            height: "auto",
                            width: { xs: "80%", sm: "60%", md: "20%" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // border:"2px solid red",
                            margin: "0 auto"
                        }}>
                            <img src={AppDevlopmentService} style={{
                                width: "100%",
                                height: "100%"
                            }} alt='We provide you with the better app development facility.' />
                        </Box>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column-reverse", md: "row" },
                        gap: { md: "5%" },
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            width: { xs: "100%", md: "70%" },
                            // border:{md:"2px solid red"}
                        }}>
                            <Typography sx={{
                                fontSize: { xs: "22px", sm: "33px", md: "44px" },
                                fontWeight: "bold",
                                lineHeight: "auto",
                                textAlign: "left",
                                my: { xs: "2.5%", md: "0" },
                            }}>
                                <span style={{ color: "#EF5366" }}>Assure Excellence </span>
                                <span style={{ color: "#255781" }}>, Elevating Quality Across Digital Realms </span>
                            </Typography>
                            <Typography sx={{
                                fontSize: { xs: "17px", sm: "20px", md: "23px" },
                            }}>
                                Our Robust QA Services Ensure Seamless Functionality, Reliable Performance, and Unmatched User Satisfaction. Explore Our Proven Methodologies for Crafting Solutions that Exceed Expectations and Drive Business Growth</Typography>                        </Box>
                        <Box sx={{
                            height: "auto",
                            width: { xs: "80%", sm: "60%", md: "20%" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // border:"2px solid red",
                            margin: "0 auto"
                        }}>
                            <img src={AppDevlopmentService} style={{
                                width: "100%",
                                height: "100%"
                            }} alt='We provide you with the better app development facility.' />
                        </Box>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column-reverse", md: "row" },
                        gap: { md: "5%" },
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            width: { xs: "100%", md: "70%" },
                            // border:{md:"2px solid red"}
                        }}>
                            <Typography sx={{
                                fontSize: { xs: "22px", sm: "33px", md: "44px" },
                                fontWeight: "bold",
                                lineHeight: "auto",
                                textAlign: "left",
                                my: { xs: "2.5%", md: "0" },
                            }}
                            variant="h2">
                                <span style={{ color: "#EF5366" }}>Maximize Impac </span>
                                <span style={{ color: "#255781" }}>, Elevate Your Digital Presence </span>
                            </Typography>
                            <Typography sx={{
                                fontSize: { xs: "17px", sm: "20px", md: "23px" },
                            }}>
                                Our Expert Marketing and Social Media Services Drive Engagement, Expand Reach, and Enhance Brand Influence. Explore Tailored Strategies to Amplify Online Presence</Typography>                        <Box sx={{
                                    height: "auto",
                                    width: { xs: "80%", sm: "60%", md: "20%" },
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // border:"2px solid red",
                                    margin: "0 auto"
                                }}>
                                <img src={AppDevlopmentService} style={{
                                    width: "100%",
                                    height: "100%"
                                }} alt='We provide you with the better app development facility.' />
                            </Box>
                        </Box>
                    </Box>
                </CustomTabPanel>
            </Box>
        </Container>
    );
}