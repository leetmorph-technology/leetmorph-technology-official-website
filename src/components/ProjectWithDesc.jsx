import { Box, Container, Typography } from "@mui/material";
import { ArrowForward } from '@mui/icons-material';
import Project1 from "../image/project_portfolio/KYTCS-Templet.jpg";
import Project2 from "../image/project_portfolio/fastblur-Templet.jpg";
import Project3 from "../image/project_portfolio/xInternational-Templet.jpg";

const projects = [
    {
        name: "KYTCS",
        image: Project1,
        boldDescription: "Social and Cultural Organization",
        normalDescription: "This is a private, social, not-for-profit organization working for the betterment of Jabegu family. I am currently working on developing and designing the website as according to the need of the organization...",
        link: "#",
    },
    {
        name: "Fastblur Production",
        image: Project2,
        boldDescription: "Animation Video Production",
        normalDescription: "We have re-modeled this website with new look just using the simple languages HTML, CSS, and JS. It took me total of two month to complete this project. There were ups and downs while making this website, sometimes the design changes without giving notice, sometimes the design didn't really coop with the client. And many other things that the experienced front end web developer experience when coding the website for the client. I have learnt time management skill, communicating skill etc.",
        link: "#",
    },
    {
        name: "xInternational",
        image: Project3,
        boldDescription: "Education Consultancy",
        normalDescription: "we created the website as per the need of Xinternational which include Document Management System to Create a secure document repository where clients can upload and store essential documents. Consultation Booking System by the integration a booking calendar that displays the availability of consultants. Allow clients to schedule appointments based on their preferred time slots and send confirmation emails and reminders to both clients and consultants. Integration of a secure messaging system for enabling direct communication between clients and consultants",
        link: "#",
    },
    // {
    //     name: "EcoThaili",
    //     image: Project3,
    //     boldDescription: "Education Consultancy",
    //     normalDescription: "we created the website as per the need of Xinternational which include Document Management System to Create a secure document repository where clients can upload and store essential documents. Consultation Booking System by the integration a booking calendar that displays the availability of consultants. Allow clients to schedule appointments based on their preferred time slots and send confirmation emails and reminders to both clients and consultants. Integration of a secure messaging system for enabling direct communication between clients and consultants",
    //     link: "#",
    // },
];

export default function ProjectWithDesc() {
    return (
        <>
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
                    mb: "2.5%"
                }}
                    variant="h2">
                    <span style={{ color: "#255781" }}>We have </span>
                    <span style={{ color: "#EF5366" }}>proven track record </span>
                    <span style={{ color: "#255781" }}>of ambitious products as per requirement. </span>
                </Typography>
                <Box sx={{
                    display: { md: "flex" },
                    gap: "2rem",
                    justifyContent: "center",
                    // border:"2px solid red",
                    overflow:"auto"
                }}>
                    {projects.map((project, index) => (
                        <Box key={index} sx={{
                            width: { xs: "90%", md: "500px" },
                            margin: { xs: "0 auto", },
                            background: "rgba(75, 141, 197, 0.12)",
                            borderRadius: "0 0 1rem 1rem"
                        }}>
                            <Box sx={{
                                width: "100%",
                                aspectRatio:"16/9"
                                // height: {md:"200px"}
                            }}>
                                <img src={project.image} alt={project.name} style={{ height: "100%", width: "100%" }} />
                            </Box>
                            <Box sx={{
                                padding: "4%"
                            }}>
                                <Typography sx={{
                                    fontSize: { xs: "23px", sm: "25px", md: "28px" },
                                    fontWeight: "bold",
                                    lineHeight: "auto",
                                    textAlign: "left",
                                    my: { xs: "2.5%", md: "0" },
                                    color: "#EF5366"
                                }}>{project.name}</Typography>
                                <Typography sx={{
                                    fontSize: { xs: "12pt", sm: "13pt", md: "14pt" },
                                    fontWeight: "bold",
                                    color: "#255781",
                                    mb: "2.5%",
                                }}>{project.boldDescription}</Typography>
                                <Typography sx={{
                                    color: "#255781",
                                    opacity: ".7",
                                    fontSize: { xs: "10pt", sm: "11pt", md: "12pt" },
                                }} className="make-ellipsis-3">{project.normalDescription}</Typography>
                                <a href={project.link}><Typography sx={{ textTransform: "uppercase", display: "flex", alignItems: "center", mt: "2.5%" }}>Read the story <ArrowForward /> </Typography></a>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </>
    )
}
