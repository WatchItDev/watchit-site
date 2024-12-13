import { Box, Container, Typography } from '@mui/material';
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import HideOnScroll from "../../components/hide-on-scroll";

export default function AnnouncementBar() {
    return (
        <HideOnScroll>
            <AppBar
                position="static"
                sx={{
                    background: 'linear-gradient(90deg,#13a5d3,#1b6bec 32.29%,#9824cf)!important',
                    zIndex: 1,
                    p: 0.5
                }}
            >
                <Container>
                    <Typography variant="body2" sx={{ color: '#fff', textAlign: 'center' }}>
                        🚀 The Watchit Public Beta is now live! 🎉 {' '} {' '}
                        <Link
                            href="https://app.watchit.movie/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textDecoration: 'underline', color: '#fff', fontWeight: 'bold' }}
                        >
                            Click here to launch the app.
                        </Link>
                    </Typography>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
}
