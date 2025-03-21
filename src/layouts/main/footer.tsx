// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// components
import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

const LINKS = [
    {
        headline: 'Community',
        children: [
            { name: 'Open Collective', href: paths.openCollective },
            { name: 'Development', href: paths.github },
            //   { name: 'Documentation', href: paths.paper },
            { name: 'Support', href: paths.discord }
        ],
    },
    {
        headline: 'Socials',
        children: [
            { name: 'X', href: paths.twitter },
            { name: 'Telegram', href: paths.telegram },
            { name: 'Reddit', href: paths.reddit },
            { name: 'Matrix', href: paths.matrix }
        ],
    },
    {
        headline: 'Contact',
        children: [{ name: 'contact@watchit.movie', href: '#' }],
    },
];

// ----------------------------------------------------------------------

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                bgcolor: 'background.default',
            }}
        >
            <Divider />

            <Container
                sx={{
                    pt: 10,
                    pb: 5,
                    textAlign: { xs: 'center', md: 'unset' },
                }}
            >

                <Grid
                    container
                    justifyContent={{
                        xs: 'center',
                        md: 'space-between',
                    }}
                >
                    <Grid xs={10} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pb: { xs: 5, md: 0 } }}>
                        <Logo sx={{ mb: 3, mx: 'auto' }} extended={true} />
                        <Typography
                            variant="body2"
                            sx={{
                                maxWidth: '100%',
                                textAlign: {md:'justify'},
                                mx: { xs: 'auto', md: 'unset' },
                                // textWrap: 'wrap',
                                // textWrapStyle: 'pretty',
                                whiteSpace: 'normal',
                                wordBreak: 'break-word', 
                                overflowWrap: 'break-word', 
                            }}
                        >
                            Whether you're a creator eager to share your latest work or a content enthusiast seeking new experiences, <b>Watchit is here for you.</b>
                            <br /><i>Join our community and start exploring today!</i>
                        </Typography>
                    </Grid>

                    <Grid xs={12} md={6}>
                        <Stack spacing={5} direction={'row'} flexWrap={{ xs: 'wrap', md: 'nowrap' }} alignItems={'flex-start'} justifyContent={'space-around'}>
                            {LINKS.map((list) => (
                                <Stack
                                    key={list.headline}
                                    spacing={2}
                                    alignItems={{ xs: 'center', md: 'flex-start' }}
                                    sx={{
                                        width: {
                                            xs: 0.4,
                                            md: 1
                                        }
                                    }}
                                >
                                    <Typography component="div" variant="overline">
                                        {list.headline}
                                    </Typography>

                                    {list.children.map((link) => (
                                        <Link
                                            key={link.name}
                                            component={RouterLink}
                                            href={link.href}
                                            color="inherit"
                                            variant="body2"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                <Typography variant="body2" sx={{ mt: { xs: 5, md: 10 }, textAlign: 'center' }}>
                    © 2024. All rights reserved
                </Typography>
            </Container>
        </Box>
    );
}
