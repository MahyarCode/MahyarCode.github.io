import { ProjectItemStructure } from 'types';
import { SKILLS } from './skills';

import imgAIx2Logo from '@images/projects/logoAIx2.png';
import imgAIx2InvestAI from '@images/projects/AppAix2.png';
import imgStratAI from '@images/projects/StratAi.png';
import imgNeoBreedLogo from '@images/projects/NeoBreed.png';
import imgNeoQR from '@images/projects/NeoQRApp.png';
import imgQPoker from '@images/projects/QPokerLogo.png';
import imgQPokerMainWebsite from '@images/projects/Qpoker-main-website.png';
import imgQPokerQMaticToken from '@images/projects/QMaticToken.png';
import imgQPokerNFTToken from '@images/projects/QPokerNFT.png';
import imgQPokerGuessEmGame from '@images/projects/QpokerGame.jpg';
import imgQPokerGameWebsite from '@images/projects/QpokerGameServerOnline.jpg';
import imgQPokerNftMarketPlace from '@images/projects/QPokerNFT-MarketPlace.jpg';
import imgQPokerAirdropPanel from '@images/projects/QpokerAirdropPanel.gif';
import imgExirMatab from '@images/projects/loginExir.png';
import imgExirLogo from '@images/projects/logoExir.png';
import imgExirYab from '@images/projects/exiryab.png';
import imgSamCRM from '@images/projects/SamCRM.png';
import imgTTegLogo from '@images/projects/TTEGLogo.png';

const PROJECTS: Array<ProjectItemStructure> = [
  {
    title: 'AIx2 - InvestAi',
    paragraph: 'Tailored Alpha with AI for Alternative Investment',
    content:
      'InvestAI instantly provides you with AI-boosted targeted insights and AI-generated templated documents, and empowers you with finding source reports from both fund internal and external data. Examples of input data sources include CRM, deal room, research management system (RMS) as well as internet public data. This will immediately allow you to respond to LP queries, prepare investment memos and due diligence documents, find relevant market reports, and look up deal history, among other use cases.',
    contentDuty: 'Full-Stack Developer',
    screenShot: imgAIx2InvestAI,
    logo: imgAIx2Logo,
    projectUrl: 'https://aix2.ai/',
    selectedSkills: SKILLS.filter((skill) =>
      [
        'Typescript',
        'Node-js',
        'Mocha js',
        'Express.js',
        'PostgreSQL',
        'Prisma',
        'Tailwind',
        'Vue js',
        'Nuxt js',
      ].includes(skill.alt),
    ),
  },
  {
    title: 'AIx2 - StratAI',
    paragraph:
      'Customized Plan To Unlock The Value of AI Internally And for Portfolio Companies',
    content:
      "Unlock tailored AI strategies with StratAI from AIx2. Leveraging extensive expertise in strategy consulting and engineering, StratAI delivers precise plans for both fund and portfolio company AI transformations, ensuring strategic success in today's dynamic financial environment.",
    contentDuty: 'Full-Stack Developer',
    screenShot: imgStratAI,
    logo: imgAIx2Logo,
    projectUrl: 'https://aix2.ai/',
    selectedSkills: SKILLS.filter((skill) =>
      [
        'Typescript',
        'Node-js',
        'Mocha js',
        'Express.js',
        'PostgreSQL',
        'Prisma',
        'Tailwind',
        'React js',
        'Next js',
        'Material UI',
      ].includes(skill.alt),
    ),
  },
  {
    title: 'NeoBreed - NeoQR',
    paragraph: 'An Online QR Menu With AI Waitress',
    content:
      "NeoQR revolutionizes restaurant management with its next-generation cloud services, powered by Amazon Web Services (AWS). Offering unparalleled accessibility and security, our solution ensures seamless operations and real-time insights for restaurants of all sizes. Stay ahead of the competition and optimize your dining experience with NeoQR's cutting-edge technology and unwavering commitment to excellence.",
    contentDuty: 'Full-Stack Developer',
    screenShot: imgNeoQR,
    logo: imgNeoBreedLogo,
    projectUrl: 'https://neobreed.org/',
    selectedSkills: SKILLS.filter((skill) =>
      [
        'Typescript',
        'Node-js',
        'Mocha js',
        'DynamoDB',
        'Tailwind',
        'React js',
        'Next js',
        'Material UI',
      ].includes(skill.alt),
    ),
  },
  {
    title: 'QPGaming S.A. - QPoker Main Website',
    paragraph: 'Main Website of QPoker project',
    content:
      'QPoker is a proprietary poker game developed by QP Gaming S.A., featuring unique rules and structures owned exclusively by the company. It offers an immersive gambling experience while asserting stringent control over its intellectual property, ensuring that competing operators cannot replicate its gameplay without authorization.',
    contentDuty: 'Front-End Developer',
    screenShot: imgQPokerMainWebsite,
    logo: imgQPoker,
    projectUrl: 'https://qpoker-website-preview.vercel.app/',
    selectedSkills: SKILLS.filter((skill) =>
      [
        'Typescript',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'REST-API',
        'React js',
        'Gsap',
      ].includes(skill.alt),
    ),
  },
  {
    title: 'QPGaming S.A. - $QMatic',
    paragraph: 'An Algorithmic ERC20 Token',
    content:
      'QMatic token employs a robust dual locking mechanism, featuring Cliff and Vesting Schedule, ensuring controlled token distribution across Airdrop, Private Sale, and Pre-sale phases prior to public exchange listing.',
    contentDuty: 'Blockchain Developer',
    screenShot: imgQPokerQMaticToken,
    logo: imgQPoker,
    projectUrl: 'https://github.com/QPoker/QMatic',
    selectedSkills: SKILLS.filter((skill) =>
      ['Python', 'Solidity'].includes(skill.alt),
    ),
  },
  {
    title: 'QPGaming S.A. - Algorithmic NFTs',
    paragraph: 'An Algorithmic NFT Token Collection',
    content:
      'QPoker NFT token, an ERC-1155-based algorithmic token, offers community prizes and seamless exchange to QMatic tokens, featuring specific cliff and vesting schedules, accessible through the QPoker Airdrop panel for lucky users.',
    contentDuty: 'Blockchain Developer',
    screenShot: imgQPokerNFTToken,
    logo: imgQPoker,
    projectUrl: 'https://rarible.com/qpokerairdrop/items',
    selectedSkills: SKILLS.filter((skill) =>
      ['Python', 'Solidity'].includes(skill.alt),
    ),
  },
  {
    title: 'QPGaming S.A. - QPoker Game',
    paragraph: "A Fully Decentralized Poker Game With New Guess'em Role",
    content:
      "QPoker revolutionizes the traditional Texas Hold'em with Guess'em Poker, a dynamic variant where folded players engage by suggesting hands to active players, enriching the gameplay and generating supplementary revenue for Poker Casinos through innovative rake mechanisms.",
    contentDuty: 'Blockchain and Game Developer',
    screenShot: imgQPokerGuessEmGame,
    logo: imgQPoker,
    projectUrl: '',
    selectedSkills: SKILLS.filter((skill) =>
      [
        'Node-js',
        'Typescript',
        'C-Sharp',
        'REST-API',
        'Swagger',
        'PostgreSQL',
        'Solidity',
        'Unity GE',
      ].includes(skill.alt),
    ),
  },
  {
    title: 'QPGaming S.A. - Game Web DApp',
    paragraph: 'Main Website of QPoker Game Center Project',
    content:
      'QPoker offered additional decentralized gambling games built on blockchain, ensuring transparency. Users could engage in various games using QMatic, facilitated by the Developer Gate, providing developers with an opportunity to build their own games on the QMatic platform.',
    contentDuty: 'Blockchain Developer',
    screenShot: imgQPokerGameWebsite,
    logo: imgQPoker,
    projectUrl: '',
    selectedSkills: SKILLS.filter((skill) =>
      [
        'Typescript',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'REST-API',
        'React js',
        'Next js',
        'Solidity',
        'Gsap',
        'Godot GE',
      ].includes(skill.alt),
    ),
  },
  {
    title: 'QPGaming S.A. - In Game NFT Marketplace',
    paragraph: 'Fully Decentralized and User-Friendly NFT Marketplace',
    content:
      'QPoker provides users with in-game NFTs available for purchase across Official General NFT marketplaces. Users can also acquire them using $QMatic through the dedicated In-Game-NFT-Marketplace, offering a seamless space for players to access and purchase NFTs.',
    contentDuty: 'Blockchain and Game Developer',
    screenShot: imgQPokerNftMarketPlace,
    logo: imgQPoker,
    projectUrl: '',
    selectedSkills: SKILLS.filter((skill) =>
      [
        'Node-js',
        'Typescript',
        'C-Sharp',
        'REST-API',
        'Swagger',
        'PostgreSQL',
        'Solidity',
        'Unity GE',
      ].includes(skill.alt),
    ),
  },
  {
    title: 'QPGaming S.A. - QPoker Airdrop Panel',
    paragraph: 'A decentralized Cutting The Edge Airdrop Panel',
    content:
      "In a milestone development, qpoker's marketing team has unleashed a groundbreaking decentralized airdrop panel, setting a new benchmark for transparency and innovation. Utilizing an advanced lottery system, this cutting-edge platform redefines the airdrop landscape, ensuring fairness by monitoring user activity across Telegram and Twitter. Winners are rewarded with coveted Winner tokens, exchangeable for real currency, driving unprecedented engagement. With a staggering online audience of 80,000 users, its launch marks a pivotal moment in digital marketing evolution.",
    contentDuty: 'Full-Stack Developer',
    screenShot: imgQPokerAirdropPanel,
    logo: imgQPoker,
    projectUrl: '',
    selectedSkills: SKILLS.filter((skill) =>
      [
        'Typescript',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'REST-API',
        'React js',
        'Solidity',
      ].includes(skill.alt),
    ),
  },
  {
    title: 'TalashNet - Exir Clinic',
    paragraph: 'Powerful Clinic Management Software',
    content:
      "Effortlessly manage new and returning patients with Exir Clinic Management software. Retrieve patient details swiftly using just one key detail—whether it's a return number, patient ID, return date, name, or mobile number. Exir Clinic Management Software simplifies the process, making patient management a breeze.",
    contentDuty: 'Software Developer',
    screenShot: imgExirMatab,
    logo: imgExirLogo,
    projectUrl: 'https://exirmatab.com/en/',
    selectedSkills: SKILLS.filter((skill) =>
      [
        'C-Sharp',
        'ASP.Net',
        'REST-API',
        'SQL-Server',
        'Swagger',
        'REST-API',
      ].includes(skill.alt),
    ),
  },
  {
    title: 'TalashNet - Exir Yab',
    paragraph: 'Online Doctor Reservation',
    content:
      'Introducing ExirYab, a dynamic web application seamlessly integrated with ExirClinic. Patients can effortlessly register accounts to reserve appointments and discover suitable doctors based on community recommendations and revenue. With ExirYab, finding the right healthcare professional has never been easier, streamlining the patient-doctor connection for optimal healthcare experiences.',
    contentDuty: 'Full-Stack Developer',
    screenShot: imgExirYab,
    logo: imgExirLogo,
    projectUrl: 'https://exirmatab.com/en/',
    selectedSkills: SKILLS.filter((skill) =>
      [
        'C-Sharp',
        'ASP.Net',
        'REST-API',
        'SQL-Server',
        'Swagger',
        'REST-API',
      ].includes(skill.alt),
    ),
  },
  {
    title: 'TalashNet - SAM CRM',
    paragraph: 'Customer Relationship Management Software',
    content:
      'SAM CRM is a versatile customer relationship management tool designed to enhance communication and organization. It facilitates seamless interaction tracking and contact management, helping businesses of all sizes cultivate stronger relationships with their clients. With its user-friendly interface and intuitive features, SAM CRM empowers teams to efficiently manage their customer interactions and foster long-lasting connections.',
    contentDuty: 'Full-Stack Developer',
    screenShot: imgSamCRM,
    logo: imgTTegLogo,
    projectUrl: 'https://talashnet.com/',
    selectedSkills: SKILLS.filter((skill) =>
      [
        'C-Sharp',
        'REST-API',
        'ASP.Net',
        'SQL-Server',
        'Swagger',
        'REST-API',
      ].includes(skill.alt),
    ),
  },
];

export { PROJECTS };
