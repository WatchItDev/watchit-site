import { useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Tabs, Tab } from '@mui/material';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import Image from "../../components/image";
import { textGradient } from "../../theme/css";

export default function HomeGovernance() {
    const theme = useTheme();
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event: any, newValue: any) => {
        setSelectedTab(newValue);
    };

    return (
        <Box
            sx={{
                py: { xs: 10, md: 15 },
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
            }}
        >
            <Container component={MotionViewport}>
                <Stack spacing={3} sx={{ mb: 10, textAlign: 'center' }}>
                    <m.div variants={varFade().inUp}>
                        <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                            Token & Governance
                        </Typography>
                    </m.div>

                    <m.div variants={varFade().inDown}>
                        <Typography
                            variant="h2"
                            sx={{
                                mx: 'auto',
                                maxWidth: 800,
                                textWrap: 'balance',
                                mb: 5,
                                ...textGradient(`300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`)
                            }}
                        >
                            Watchit is a public good governed by WVC token holders.
                        </Typography>
                    </m.div>
                </Stack>

                <Grid container columnSpacing={{ md: 3 }} alignItems="center" sx={{ mb: 15 }}>
                    <Grid xs={12} md={6} display="flex" alignItems="center" justifyContent="center" sx={{ pr: { md: 7 } }}>
                        <m.div variants={varFade().inUp}>
                            <Image alt="WVC token" src="/assets/images/home/wvc.png" sx={{ width: '20rem' }} />
                        </m.div>
                    </Grid>

                    <Grid xs={12} md={6}>
                        <m.div variants={varFade().inRight}>
                            <Typography variant="h3" sx={{ mb: 3 }}>
                                WVC Token
                            </Typography>
                        </m.div>

                        <m.div variants={varFade().inRight}>
                            <Typography sx={{ color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white' }}>
                                Designed to power the Watchit platform, this token not only facilitates transactions but also empowers users with an active role in decentralized governance. Through its use, users gain access to exclusive content, support their favorite creators, and influence key decisions via the DAO. The token strengthens the relationship between the community and the platform, ensuring a fair and transparent ecosystem for all participants.
                            </Typography>
                        </m.div>

                        <m.div variants={varFade().inRight}>
                            <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: 'wrap' }}>
                                <Box component="span" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), borderRadius: 1, px: 2, py: 0.5 }}>
                                    Renting Movies
                                </Box>
                                <Box component="span" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), borderRadius: 1, px: 2, py: 0.5 }}>
                                    Purchasing Content
                                </Box>
                                <Box component="span" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), borderRadius: 1, px: 2, py: 0.5 }}>
                                    Voting in the DAO
                                </Box>
                                <Box component="span" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), borderRadius: 1, px: 2, py: 0.5 }}>
                                    Promoting Creators
                                </Box>
                                <Box component="span" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), borderRadius: 1, px: 2, py: 0.5 }}>
                                    Engaging in Community Events
                                </Box>
                                <Box component="span" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), borderRadius: 1, px: 2, py: 0.5 }}>
                                    Earning Rewards
                                </Box>
                            </Stack>
                        </m.div>

                        <m.div variants={varFade().inRight}>
                            <Button variant="outlined" color="inherit" size="large" sx={{ mt: 4 }} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
                                Read more
                            </Button>
                        </m.div>
                    </Grid>
                </Grid>

                <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start" sx={{ mt: 15 }}>
                    <Grid xs={12}>
                        <m.div variants={varFade().inRight}>
                            <Typography variant="h3" textAlign="left" sx={{ mb: 2 }}>
                                Governance
                            </Typography>
                        </m.div>
                    </Grid>
                    <Grid xs={12}>
                        <m.div variants={varFade().inRight}>
                            <Typography sx={{ mb: 5, width: '50%', color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white' }}>
                                The Watchit protocol's future is shaped by WVC token holders through a decentralized governance process. Proposals and decisions regarding content policies, fees, and community initiatives are decided by the community.
                            </Typography>
                        </m.div>
                    </Grid>

                    <Grid xs={12} md={6}>
                        <Box>
                            {selectedTab === 0 && (
                                <Box>
                                    <m.div
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={varFade().inLeft}
                                    >
                                        <Typography
                                            variant="body1"
                                            fontWeight="bold"
                                            sx={{
                                                flexGrow: 1,
                                                textAlign: 'left',
                                                mb: 1
                                            }}
                                        >
                                            Proposal Submission
                                        </Typography>
                                        <Typography variant="body1" sx={{mb: 2, color: 'text.secondary'}}>
                                            In this phase, any community member can submit a proposal for changes or new features to the protocol. These proposals can cover anything from adjusting transaction fees, modifying content policies, or adding new platform functionalities. Proposals must be clear and well-structured, detailing the potential benefits and impacts on the ecosystem. Before moving to the next phase, they must meet certain criteria to ensure feasibility and alignment with Watchit’s goals.
                                        </Typography>
                                        <Button variant="outlined" color="inherit" size="large" sx={{mt: 2}}
                                                endIcon={<Iconify icon="eva:arrow-ios-forward-fill"/>}>
                                            Read more
                                        </Button>
                                    </m.div>
                                </Box>
                                )}
                            {selectedTab === 1 && (
                                <Box>
                                    <m.div
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={varFade().inLeft}
                                    >
                                        <Typography
                                            variant="body1"
                                            fontWeight="bold"
                                            sx={{
                                                flexGrow: 1,
                                                textAlign: 'left',
                                                mb: 1
                                            }}
                                        >
                                            Discussion Period
                                        </Typography>
                                        <Typography variant="body1" sx={{mb: 2, color: 'text.secondary'}}>
                                            Once a proposal is submitted, it enters the discussion phase. The community debates the proposal, providing feedback, raising concerns, and suggesting improvements. This collaborative discussion helps refine the proposal and ensures it aligns with the community’s interests. The goal is to reach a consensus on any modifications before moving forward to the voting phase.
                                        </Typography>
                                        <Button variant="outlined" color="inherit" size="large" sx={{mt: 2}}
                                                endIcon={<Iconify icon="eva:arrow-ios-forward-fill"/>}>
                                            Read more
                                        </Button>
                                    </m.div>
                                </Box>
                                )}
                            {selectedTab === 2 && (
                                <Box>
                                    <m.div
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={varFade().inLeft}
                                    >
                                        <Typography
                                            variant="body1"
                                            fontWeight="bold"
                                            sx={{
                                                flexGrow: 1,
                                                textAlign: 'left',
                                                mb: 1
                                            }}
                                        >
                                            Voting Process
                                        </Typography>
                                        <Typography variant="body1" sx={{mb: 2, color: 'text.secondary'}}>
                                            After the discussion, the proposal moves to a vote. Token holders cast their votes based on the number of WVC tokens they hold. The voting process is transparent and secure, conducted through smart contracts to ensure fairness. If the majority approves the proposal, it is automatically implemented on the blockchain, making it an official part of the protocol.
                                        </Typography>
                                        <Button variant="outlined" color="inherit" size="large" sx={{mt: 2}}
                                                endIcon={<Iconify icon="eva:arrow-ios-forward-fill"/>}>
                                            Read more
                                        </Button>
                                    </m.div>
                                </Box>
                                )}
                        </Box>
                    </Grid>

                    <Grid xs={12} md={6}>
                        <CustomTabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            orientation="vertical"
                        >
                            <CustomTab
                                label={
                                    <Typography variant="h6">Phase 1: Proposal Submission</Typography>
                                }
                            />
                            <CustomTab
                                label={
                                    <Typography variant="h6">Phase 2: Discussion Period</Typography>
                                }
                            />
                            <CustomTab
                                label={
                                    <Typography variant="h6">Phase 3: Voting Process</Typography>
                                }
                            />
                        </CustomTabs>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

const CustomTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        display: 'none'
    },
    '& .MuiTabs-flexContainer': {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const CustomTab = styled(Tab)(({ theme }) => ({
    marginRight: '0 !important',
    marginLeft: '0 !important',
    marginBottom: '1rem',
    width: '80%',
    maxWidth: 'none',
    borderRadius: '0.5rem',
    border: `dashed 1px ${theme.palette.divider}`,
    '& h6': {
        fontWeight: '300 !important',
    },
    '&.Mui-selected': {
        border: 'dashed 1px white',
        color: '#fff',
        '& h6': {
            fontWeight: 'bold !important',
        },
    },
    padding: theme.spacing(2),
}));
