import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import Image from "../../components/image";
import { textGradient } from "../../theme/css";
import { paths } from 'src/routes/paths';

const tokenUtilities = [
    "Unlock Content",
    "Access Content",
    "Support Creators",
    "Collect Rewards",
    "Exclusive Access",
    "Support Distribution",
    "Pro Tools",
    "Community Events",
    "More.."
]

export default function HomeGovernance() {
    const theme = useTheme();

    const handleReadMoreClick = () => {
        window.open(paths.paper, '_blank');
    };

    return (
        <Box
            sx={{
                py: { xs: 10, md: 15 },
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
            }}
        >
            <Container component={MotionViewport}>
                <Stack sx={{ textAlign: 'center', mb: 2 }}>
                    <m.div variants={varFade().inUp}>
                        <Typography component="div" variant="overline" sx={{ mb: 0, color: 'text.disabled' }}>
                            COMMUNITY DRIVEN
                        </Typography>
                    </m.div>

                    <m.div variants={varFade().inDown}>
                        <Typography
                            variant="h2"
                            sx={{
                                mx: 'auto',
                                maxWidth: 800,
                                textWrap: 'balance',
                                mt: 1,
                                mb: 2,
                                ...textGradient(`300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`)
                            }}
                        >
                            MMC & Governance
                        </Typography>
                    </m.div>
                    <m.div variants={varFade().inLeft}>
                        <Typography
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                maxWidth: { xs: '94%', md: '80%' },
                                color: 'text.primary',
                                mb: 4,
                                mx: { xs: 'auto', md: 0 },
                                textAlign: { xs: 'justify', md: 'left' },
                                // textWrapStyle: "pretty",
                                textWrap: 'wrap',
                                whiteSpace: 'normal',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-all',
                            }}
                        >
                            MMC powers our media distribution protocol, providing users with governance rights and enabling a wide range of utilities within a decentralized ecosystem.
                        </Typography>
                    </m.div>
                </Stack>

                <Grid container columnSpacing={{ md: 3 }} alignItems="center" sx={{ mb: 2 }}>
                    <Grid xs={12} md={6} display="flex" alignItems="center" justifyContent="center" sx={{ pr: { md: 7 } }}>
                        <m.div variants={varFade().inUp} >
                            <Image alt="MMC token" src="/assets/images/home/mmc.png" sx={{ width: '100%', padding: '0 2rem' }} />
                        </m.div>
                    </Grid>

                    <Grid xs={12} md={6} sx={{ mt: 3 }}>
                        <m.div variants={varFade().inRight}>
                            <Typography
                                sx={{ color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white', textWrap: 'wrap', display: { xs: 'none', md: 'block' } }}>
                                Multimedia Coin (MMC) powers our media distribution protocol, providing users with governance rights and enabling a wide range of utilities within a decentralized ecosystem.
                            </Typography>
                        </m.div>

                        <m.div variants={varFade().inRight}>
                            <Stack direction="row" spacing={1} sx={{ mt: 3, mb: 3, flexWrap: 'wrap' }}>
                                {tokenUtilities.map((item) => (
                                    <Box component="span" sx={{
                                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                                        borderRadius: 1,
                                        px: 2,
                                        py: 0.5
                                    }}>
                                        {item}
                                    </Box>
                                ))}
                            </Stack>
                        </m.div>

                        <m.div variants={varFade().inRight}>
                            <Typography sx={{
                                color: 'text.secondary',
                                mx: { xs: 'auto', md: 0 }, 
                                maxWidth: { xs: '94%' }, 
                                textAlign: { xs: 'justify', textWrap: 'wrap' },  
                                textWrap: 'wrap',
                                whiteSpace: 'normal',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word',
                            }}>
                                Our economic model ensures a sustainable balance within the ecosystem,
                                allowing value to flow seamlessly between creators, distributors, and the community.
                            </Typography>
                        </m.div>

                        <m.div variants={varFade().inRight}>
                            <Button
                                variant="outlined" color="inherit" size="large" sx={{ mt: 4 }}
                                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                                onClick={handleReadMoreClick}
                            >
                                Learn more
                            </Button>
                        </m.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
