/* eslint-disable */

export interface RoadmapSection {
    title: string,
    color: string,
    items: { name: string, done: boolean }[]
}

export const RoadMapSections: RoadmapSection[] = [
    {
        title: '2022 Q3',
        color: '#5EC363',
        items: [
            {
                name: 'LANDING_ROADMAP_WEBSITE',
                done: true
            },
            {
                name: 'LANDING_ROADMAP_TOOLKIT',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_DESKTOP_DESIGN',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_MOBILE_TV_DESIGN',
                done: false
            },
        ]
    },
    {
        title: '2022 Q4',
        color: '#47BC9F',
        items: [
            {
                name: 'LANDING_ROADMAP_ALPHA_WEB_APP',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_ALPHA_DESKTOP_APP',
                done: false
            }
        ]
    },
    {
        title: '2023 Q1',
        color: '#1E91CF',
        items: [
            {
                name: 'LANDING_ROADMAP_ALPHA_TV_APP',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_ALPHA_MOBILE_APP',
                done: false
            }
        ]
    },
    {
        title: '2023 Q2',
        color: '#8B58C6',
        items: [
            {
                name: 'LANDING_ROADMAP_ONE_CLICK_DEPLOY',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_ALPHA_WORKER_NODE',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_DISTRIBUTION_CONTRACT',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_ALPHA_MARKETPLACE',
                done: false
            }
        ]
    },
    {
        title: '2023 Q3',
        color: '#FE9900',
        items: [
            {
                name: 'LANDING_ROADMAP_GOVERNANCE_TOKEN',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_WVC',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_BETA_MARKETPLACE',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_BETA_TOOLKIT',
                done: false
            }
        ]
    },
    {
        title: '2023 Q4',
        color: '#FB7422',
        items: [
            {
                name: 'LANDING_ROADMAP_BETA_WORKER_NODE',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_ORACLE',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_BITSWAP',
                done: false
            }
        ]
    },
    {
        title: '2024 +',
        color: '#BF1461',
        items: [
            {
                name: 'LANDING_ROADMAP_MULTI_LANGUAGE',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_PRODUCTION_MARKETPLACE',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_PRODUCTION_MULTI_PLATFORM_APPS',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_MAIN_CHAIN_CONTRACTS',
                done: false
            }
        ]
    }
]


