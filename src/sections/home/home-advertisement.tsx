import { useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IconBrandDiscordFilled } from '@tabler/icons-react';
// theme
import { bgGradient } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { LoadingButton } from '@mui/lab'

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
    const theme = useTheme();

    const CustomForm = ({ status, message, onValidated }: any) => {
        const [email, setEmail] = useState('');

        const handleSubmit = () => {
            email &&
                email.indexOf('@') > -1 &&
                onValidated({
                    EMAIL: email,
                });
        };

        return (
            <>
                {status === 'error' && (
                    <Typography sx={{ color: 'error.main', mt: 2 }} dangerouslySetInnerHTML={{ __html: message }} />
                )}
                {status === 'success' && (
                    <Typography variant="h6" sx={{ color: 'common.white', mt: 2 }}>
                        Thank you for subscribing! You will receive updates and rewards soon.
                    </Typography>
                )}
                {status !== 'success' && (
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
                            label="Write your email.."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputLabelProps={{
                                style: {
                                    color: '#fff',
                                },
                            }}
                            sx={{
                                bgcolor: 'transparent',
                                borderRadius: 1,
                            }}
                        />
                        <LoadingButton
                            color="inherit"
                            size="large"
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{
                                color: 'grey.800',
                                bgcolor: 'common.white',
                            }}
                            loading={status === 'sending'}
                        >
                            Subscribe
                        </LoadingButton>
                    </Stack>
                )}
            </>
        );
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
                    md: 5,
                },
                p: {
                    xs: 1,
                    md: 0,
                },
            }}
        >
            <Box
                component={m.div}
                variants={varFade().inDown}
                sx={{
                    color: 'common.white', mb: 2, typography: { xs: 'h3', md: 'h2' }
                }}
            >
                Subscribe and Earn Rewards
            </Box>
            <m.div variants={varFade().inRight}>
                <Typography
                    sx={{
                        color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                        mb: 3,
                        mx: { xs: 'auto', md: 0 },
                        textAlign: 'justify',
                        width: { xs: '90%', md: '85%' },
                        textWrap: 'wrap',
                    }}
                >
                    Don’t miss out on the latest news, updates, and exclusive releases from Watchit. By subscribing with your email,
                    you'll not only stay informed about everything happening in the world of independent cinema, but you'll also earn special rewards!
                    Be part of our growing community and get rewarded for being an early supporter. Just enter your email below to get started!
                </Typography>
            </m.div>

            <MailchimpSubscribe
                url={paths.mailchimp}
                render={({ subscribe, status, message }) => (
                    <CustomForm status={status} message={message} onValidated={(formData: any) => subscribe(formData)} />
                )}
            />

            <Stack direction={'row'} justifyContent={{ xs: 'center', md: 'flex-start' }} spacing={2} mt={5}>
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
                        endIcon={<Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />}
                        sx={{
                            color: 'common.white',
                            '&:hover': { borderColor: 'currentColor' },
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
                transition={{ duration: 4, repeat: Infinity }}
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
                    mb: 7,
                }}
            >
                {renderImg}

                {renderDescription}
            </Stack>
        </Container>
    );
}
