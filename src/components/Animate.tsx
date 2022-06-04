// // REACT IMPORTS
// import React, { FC, PropsWithChildren } from 'react'
//
// // MUI IMPORTS
// import { Box } from '@mui/material'
//
// // THIRD PARTY IMPORTS
// import "animate.css"
// import ScrollAnimation, { ScrollAnimationProps } from "react-animate-on-scroll"
// import { AnimationOnScroll,  } from 'react-animation-on-scroll';
//
// // ===========================|| TRANSITIONS ||=========================== //
//
// const Animate: FC<PropsWithChildren<ScrollAnimationProps>> = ({ children, ...props }): JSX.Element => {
//
//   return (
//     <ScrollAnimation
//       {...props}
//       className={`animate__animated ${props.className ?? ""}`}
//       animateIn={props.animateIn && `animate__${props.animateIn}`}
//       animateOut={props.animateOut &&`animate__${props.animateOut}`}
//     >
//       {children}
//     </ScrollAnimation>
//   )
// }
//
// export default Animate
