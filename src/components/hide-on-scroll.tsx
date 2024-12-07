import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

interface HideOnScrollProps {
    children: React.ReactElement;
}

export default function HideOnScroll({ children }: HideOnScrollProps) {
    const trigger = useScrollTrigger({ threshold: 50 });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
