import React from 'react';

import Navbar from '@components/Navbar/Navbar';
import Header from '@components/Header/Header';
import Skills from '@components/Skills/Skills';
// import WorkingExperiences from '@components/WorkingExperiences/WorkingExperiences';
// import Projects from '@components/Projects/Projects';
import Footer from '@components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header />
      {/* <Projects /> */}
      {/* <WorkingExperiences /> */}
      {/* TODO: fix skils */}
      {/* <Skills /> */}
      <Footer />
    </>
  );
};

export default Home;
