import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
// theme
import { bgGradient } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import Typography from "@mui/material/Typography";
import {IconBrandDiscordFilled} from "@tabler/icons-react";

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Email submitted:', email);
        setSubmitted(true);
    };

    const renderDescription = (
        <Box
            sx={{
                textAlign: {
                    xs: 'center',
                    md: 'left',
                },
                mb: {
                    xs: 2,
                    md: 5
                },
                p: {
                    xs: 1,
                    md: 0
                }
            }}
        >
            <Box
                component={m.div}
                variants={varFade().inDown}
                sx={{color: 'common.white', mb: 2, typography: { xs: 'h3', md: 'h2' }}}
            >
                Stay Updated and Earn Rewards with Watchit
            </Box>
            <m.div variants={varFade().inRight}>
                <Typography
                    sx={{
                        color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                        mb: 3,
                        width: { xs: '100%', md: '85%' },
                        textWrap: 'balance'
                    }}
                >
                    Don’t miss out on the latest news, updates, and exclusive releases from Watchit. By subscribing with your email,
                    you'll not only stay informed about everything happening in the world of independent cinema, but you'll also earn special rewards!
                    Be part of our growing community and get rewarded for being an early supporter. Just enter your email below to get started!
                </Typography>
            </m.div>

            {!submitted ? (
                <Stack
                    component={m.div}
                    variants={varFade().inRight}
                    direction={'row'}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                    spacing={2}
                    alignItems="center"
                >
                    <TextField
                        variant="outlined"
                        label="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        InputLabelProps={{
                            style: {
                                color: '#fff'
                            }
                        }}
                        sx={{
                            bgcolor: 'transparent',
                            borderWidth: 1,
                            borderColor: '#fff',
                            borderStyle: 'solid',
                            borderRadius: 1
                        }}
                    />
                    <Button
                        color="inherit"
                        size="large"
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                            color: 'grey.800',
                            bgcolor: 'common.white',
                        }}
                    >
                        Get Updates & Rewards
                    </Button>
                </Stack>
            ) : (
                <Typography variant="h6" sx={{ color: 'common.white', mt: 2 }}>
                    Thank you for subscribing! You will receive updates and rewards soon.
                </Typography>
            )}

            <Stack
                direction={'row'}
                justifyContent={{xs: 'center', md: 'flex-start'}}
                spacing={2}
                mt={5}
            >
                <m.div variants={varFade().inRight}>
                    <Button
                        color="inherit"
                        size="large"
                        variant="contained"
                        target="_blank"
                        rel="noopener"
                        startIcon={<IconBrandDiscordFilled />}
                        href={paths.discord}
                        sx={{
                            color: 'grey.800',
                            bgcolor: 'common.white',
                        }}
                    >
                        Join discord
                    </Button>
                </m.div>

                <m.div variants={varFade().inRight}>
                    <Button
                        color="inherit"
                        size="large"
                        variant="outlined"
                        target="_blank"
                        rel="noopener"
                        href={paths.webapp}
                        endIcon={<Iconify icon="eva:external-link-fill" width={16} sx={{mr: 0.5}}/>}
                        sx={{
                            color: 'common.white',
                            '&:hover': {borderColor: 'currentColor'},
                        }}
                    >
                        Launch app
                    </Button>
                </m.div>
            </Stack>
        </Box>
    );

    const renderImg = (
        <Stack component={m.div} variants={varFade().inUp} alignItems="center">
            <Box
                component={m.img}
                animate={{
                    y: [-20, 0, -20],
                }}
                transition={{duration: 4, repeat: Infinity}}
                alt="rocket"
                src="/assets/images/home/rocket.webp"
                sx={{ maxWidth: { xs: 300, md: 460 } }}
            />
        </Stack>
    );

    return (
        <Container component={MotionViewport}>
            <Stack
                alignItems="center"
                direction={{ xs: 'column', md: 'row' }}
                sx={{
                    ...bgGradient({
                        direction: '135deg',
                        startColor: theme.palette.primary.main,
                        endColor: theme.palette.primary.dark,
                    }),
                    borderRadius: 2,
                    pt: 5,
                    pb: 3,
                    mt: 7,
                    mb: 7
                }}
            >
                {renderImg}

                {renderDescription}
            </Stack>
        </Container>
    );
}
