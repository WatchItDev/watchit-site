// REACT IMPORTS
import React from 'react'
import LandingFeatureModal from "@pages/Landing/components/LandingFeatureModal";

/* eslint-disable */

interface FooterSectionItem { name: string, url: string }

interface FooterSection {
    [key:string] : {
        obj?: FooterSectionItem
        content?: JSX.Element
    }[]
}

export const FooterSections: FooterSection = {
    "Comunity": [
        {
            content: <LandingFeatureModal />
        },
        {
            obj: {
                "name": "Development",
                "url": "https://github.com/ZorrillosDev",
            }
        }
    ],
    "Help": [
        {
            obj: {
                "name": "Customer Support",
                "url": "https://matrix.to/#/#watchitsupport:matrix.org",
            }
        }
    ]
}
