const AboutPage = () => {
  return (
    <>
      <h2>Who Am I?</h2>
      <h4>I'm a second-year student at the University of British Columbia who designs and codes websites to solve problems and inspire others. </h4>
      <p>As someone who’s been doing design since high school, creation is a passion close to my heart. I hope to use my skills to help develop the future of the tech industry.</p>
      <br></br>
      <h3>My Past Experiences</h3>
      <ul>
        <li><strong>Software Developer Intern</strong> @ Copperleaf Technologies / <i>May - Dec. 2023</i></li>
        <li><strong>Operations Engineer</strong> @ UBC CEDaR Space Lab / <i>Oct. - Apr. 2022</i></li>
        <li><strong>Software Developer</strong> @ The Creative Solution / <i>Aug. - Dec. 2022</i></li>
        <li><strong>Software Engineer Intern</strong> @ Dashlabs.ai (YC W21) / <i>Jun. - Aug. 2022</i></li>
        <li><strong>Prep Fellow</strong> @ Major League Hacking / <i>Jul. 2022</i></li>
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
