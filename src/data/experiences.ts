import { WorkingExperienceItemStructure } from 'types';

import imgAIx2Logo from '@images/projects/logoAIx2.png';
import imgNeoBreedLogo from '@images/projects/NeoBreed.png';
import imgQPoker from '@images/projects/QPokerLogo.png';
import imgHojres from '@images/projects/hojresLogo.png';
import imgTTegLogo from '@images/projects/TTEGLogo.png';

const EXPERIENCES: Array<WorkingExperienceItemStructure> = [
  {
    companyName: 'AIx2',
    companyLogoAddress: imgAIx2Logo,
    workingDates: '01/2024 - Current',
    location: 'US, Remote',
    position: 'Full-stack Developer',
    experiences: [
      'Worked as a full-stack developer and involved in the analysis of requirements, the design, development, integration, deployment, and testing.',
      'Created a SEC 17a-4 compliant micro action log, enabling partial fulfillment of SEC certification requirements.',
      'Implemented robust server-side rendering for Node.js, enhancing TTFB metrics from one second to 70 milliseconds (14x improvement).',
    ],
  },
  {
    companyName: 'NeoBreed',
    companyLogoAddress: imgNeoBreedLogo,
    workingDates: '01/2023 - 12/2023',
    location: 'US, Remote',
    position: 'Full-stack Developer',
    experiences: [
      'Enhanced QR-Menu load performance by 44% through image and logic optimization in useEffects and lazy loading.',
      'Streamlined MVP code into a production-ready Vue.js project with a custom SDK in Nuxt store, reducing frontend development time by 30% for feature implementation.',
      'Integrated payments and orders seamlessly with Clover, enabling us to efficiently handle larger volumes of restaurant transactions without the need to alter their application.',
    ],
  },
  {
    companyName: 'QPGaming S.A.',
    companyLogoAddress: imgQPoker,
    workingDates: '01/2022 - 12/2022',
    location: 'Panama, Remote',
    position: 'Blockchain and Full-Stack Developer',
    experiences: [
      'Designed and developed the QPoker airdrop panel, encompassing frontend, backend, and blockchain integration. Achieved over 70,000 active users within a month of launch through effective collaboration and execution.',
      'Efficiently managed heavy media on the main website and optimized code, achieving a 6x improvement in FCP duration from 4.2s to 0.7s.',
      'Boosted QPoker sales team performance with an automated, transparent, and secure affiliate smart contract, attracting affiliates with trackable sales on blockchain.',
    ],
  },
  {
    companyName: 'Sepantab (Hojres)',
    companyLogoAddress: imgHojres,
    workingDates: '01/2021 - 12/2021',
    location: 'Tehran, On-site',
    position: 'Full-stack Developer',
    experiences: [
      "Integrated Hojres restaurant's online ordering with Sepidar App, leading to a 35% increase in restaurant volume.",
      'Engineered and implemented a meticulously crafted monitoring system, bolstering debugging accuracy while significantly expediting processes.',
    ],
  },
  {
    companyName: 'TalashNet (Exir)',
    companyLogoAddress: imgTTegLogo,
    workingDates: '06/2019 - 12/2020',
    location: 'Tehran, On-site',
    position: 'Software Developer',
    experiences: [
      "Developed a migrator for alternative market apps to Exir Clinic, significantly enhancing application performance and driving a 40% increase in Exir Clinic's customer base.",
      "Integrated ExirYab's online doctor reservation system with Exir Clinic, elevating reputation among doctors from 73% to 89%.",
    ],
  },
];
export { EXPERIENCES };
