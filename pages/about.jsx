const AboutPage = () => {
  return (
    <>
      <h2>Who Am I?</h2>
      <h4>I'm a first-year student at the University of British Columbia who designs and codes websites to solve problems and inspire others. </h4>
      <p>As someone who’s been doing design since high school, creation is a passion close to my heart. I hope to use my skills to help develop the future of the tech industry.</p>
      <br></br>
      <h3>My Experience</h3>
      <ul>
        <li><strong>Software Engineer Intern</strong> @ Dashlabs.ai / <i>June 2022 - Present</i></li>
        <li><strong>Prep Fellow</strong> @ Major League Hacking / <i>July 2022</i></li>
        <li><strong>Web Development Intern</strong> @ The Coding Foundation / <i>Feb. - June 2022</i></li>
        <li><strong>Web Developer</strong> @ UBC eProjects / <i>May 2022 - Present</i></li>
        <li><strong>Developer and Designer</strong> @ Elevate Tech / <i>Dec. 2021 - Feb. 2022</i></li>
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
