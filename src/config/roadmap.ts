/* eslint-disable */

export interface RoadmapSection {
    title: string,
    color: string,
    items: { name: string, done: boolean }[]
}

export const RoadMapSections: RoadmapSection[] = [
    {
        title: '2024 Q1',
        color: '#5EC363',
        items: [
            {
                name: 'LANDING_ROADMAP_WEBSITE',
                done: true
            },
            {
                name: 'LANDING_ROADMAP_DESKTOP_DESIGN',
                done: true
            }

        ]
    },
    {
        title: '2024 Q2',
        color: '#47BC9F',
        items: [
            {
                name: 'LANDING_ROADMAP_ALPHA_WEB_APP',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_ALPHA_DESKTOP_APP',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_ALPHA_MOBILE_APP_START',
                done: false
            },
        ]
    },
    {
        title: '2024 Q3',
        color: '#1E91CF',
        items: [
            {
                name: 'LANDING_ROADMAP_ALPHA_MOBILE_APP_FINISH',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_ALPHA_TV_APP',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_DISTRIBUTION_CONTRACT',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_NFT_CONTRACT',
                done: false
            }
        ]
    },
    {
        title: '2024 Q4',
        color: '#8B58C6',
        items: [
            {
                name: 'LANDING_ROADMAP_BLOCKBUSTER',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_DISTRIBUTION_NODE',
                done: false
            }
        ]
    },
    {
        title: '2025 Q1',
        color: '#FE9900',
        items: [
            {
                name: 'LANDING_ROADMAP_WVC',
                done: false
            },
            {
                name: 'LANDING_ROADMAP_BLOCKBUSTER_TESTNET',
                done: false
            }
        ]
    },
    {
        title: '2025 Q2',
        color: '#BF1461',
        items: [
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


