import { Box, Container, Typography } from "@mui/material";
import project_1_grp from "../image/project_we_have_done_for/project_1.png";
import project_2_grp from "../image/project_we_have_done_for/project_2.png";

export default function ProjectDoneOf() {
    return (
        <Container sx={{
            px: { md: "13%" },
            pt: { xs: "3.5%", sm: "7%", md: "4%" },
            width: "100%",
            // border:"2px solid red"
        }} maxWidth={false}>
            <Typography sx={{
                fontSize: { xs: "30px", sm: "40px", md: "65px" },
                fontWeight: "bold",
                lineHeight: "auto",
                textAlign: "center",
            }}
            variant="h2">
                <span style={{ color: "#EF5366" }}>Trusted </span>
                <span style={{ color: "#255781" }}>by 50 </span>
                <span style={{ color: "#EF5366" }}>+</span>
                <span style={{ color: "#255781" }}> startups, business and startups around the </span>
                <span style={{ color: "#EF5366" }}>globe</span>
                <span style={{ color: "#255781" }}>.</span>
            </Typography>
            <Box sx={{
                mt: "5%",
                display: "flex",
                flexDirection: "column",
                gap: "5%",
                // border:"2px solid red"
            }}>
                <img src={project_1_grp} alt="We have done project of these clients" />
                <img src={project_2_grp} alt="We have done project of these clients" />
            </Box>
        </Container>
    )
}