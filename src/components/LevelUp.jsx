import { Box, Container, Typography } from "@mui/material";
import HalfLogoWhite from "../image/level_up/leetmorph_logo_o_half_white.png";

export default function LevelUp() {
    return (
        <>
            <Container sx={{
                px: { md: "13%" },
                py: { xs: "3.5%", sm: "7%", md: "4%" },
                width: "100%",
                background: `url(${HalfLogoWhite}) left center no-repeat, #E9F1F8`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb:"5%"
            }} maxWidth={false}>
                <Box sx={{ zIndex: "1", textAlign: "center" }}>
                    <Typography sx={{
                        fontSize: { xs: "30px", sm: "40px", md: "65px" },
                        fontWeight: "bold",
                        lineHeight: "auto",
                        textAlign: "center",
                        mb: "2.5%"
                    }}
                        variant="h2">
                        <span style={{ color: "#255781" }}>We aim to </span>
                        <span style={{ color: "#EF5366" }}>level up </span>
                        <span style={{ color: "#255781" }}>as your ultimate tech ally. </span>
                    </Typography>
                    <Typography
                    sx={{
                        mb:"2.5%",
                        fontSize: {xs:"19px",sm:"22px",md:"25px"},
                    }}>
                        <span style={{ color: "#255781" }}>Our </span>
                        <span style={{ color: "#EF5366" }}>mission </span>
                        <span style={{ color: "#255781" }}>slove your challenges, fuel your success. Need talent? We've got you </span>
                        <span style={{ color: "#EF5366" }}>covered </span>
                        <span style={{ color: "#255781" }}>. </span>
                    </Typography>
                    <Typography
                    sx={{
                        mb:"2.5%",
                        fontSize: {xs:"19px",sm:"22px",md:"25px"},
                    }}>
                        <span style={{ color: "#255781" }}>When you need us, consider it done -- no task too tough, no deadline too tight. </span>
                    </Typography>
                    <Typography
                    sx={{
                        mb:"2.5%",
                        fontSize: {xs:"19px",sm:"22px",md:"25px"},
                    }}>
                        <span style={{ color: "#255781" }}>Trust us for results, </span>
                        <span style={{ color: "#EF5366" }}>together we'll excel </span>
                        <span style={{ color: "#255781" }}>. </span>
                    </Typography>
                </Box>
            </Container>
        </>
    )
}
