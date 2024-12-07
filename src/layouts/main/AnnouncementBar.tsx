import { Box, Container, Typography } from '@mui/material';

export default function AnnouncementBar() {
    return (
        <Box sx={{ width: '100%', bgcolor: 'info.main', p: 1 }}>
            <Container>
                <Typography variant="body2" color="#fff" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    @everyone We’re thrilled to announce the next big steps for Watchit! 🚀 Our Web3-based platform is almost ready...
                </Typography>
            </Container>
        </Box>
    );
}
