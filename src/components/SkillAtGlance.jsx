import { Box, Container, Typography } from "@mui/material";
import { AppSettingsAlt, Brush } from '@mui/icons-material';

const skills = [
    {
        icon: AppSettingsAlt,
        title: "App Development",
        sub: [
            { heading: "Mobile App Dev", content: "React Native, Flutter, Swift, Java, Kotlin" },
            { heading: "Web App Dev", content: "HTML, CSS, JavaScript, React, Vue.js, Python, Django" },
            { heading: "Backend and APIs", content: "Python, Django, Javascript, React" }
        ]
    },
    {
        icon: Brush,
        title: "UX and UI Design",
        sub: [
            { heading: "UI Designing", content: "Adobe XD, Adobe Photoshop, Adobe Illustrator, Figma" },
            { heading: "UX Designing", content: "Wireframing and Prototyping, Usability Testing, Iterative Design Process" }
        ]
    },
    {
        icon: Brush,
        title: "Digital Marketing",
        sub: [
            { heading: "Technologies and Methodologies", content: "Content Management System (CMS), SEO, Blogging Platforms, Content Creation Tools [Canva, Adobe Creative Cloud, and Picktochar]" },
            { heading: "Social Media Marketing", content: "Email Marketing, Analytics and Tracking Tools [Google Analytics, Sprout Social Analytics] and Conversion Rate Optimization (CRO) Frameworks" }
        ]
    },
];

export default function SkillAtGlance() {
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
                mb: "2.5%"
            }}
                variant="h2">
                <span style={{ color: "#EF5366" }}>Skills </span>
                <span style={{ color: "#255781" }}>at glance </span>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                {skills.map((skill, index) => (
                    <Box key={index} sx={{
                        p: "3% 1.5%",
                        background: "#E9F1F8",
                        width: "25%"
                    }}>
                        <Typography sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: ".5rem",
                            mb: "5%"
                        }}><skill.icon /> {skill.title}</Typography>
                        {skill.sub.map((subSkill, subIndex) => (
                            <Box key={subIndex} sx={{ mb: "2.5%" }}>
                                <Typography sx={{ fontStyle: "italic" }}>{subSkill.heading}</Typography>
                                <Typography>{subSkill.content}</Typography>
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
        </Container>
    )
}
