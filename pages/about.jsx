const AboutPage = () => {
  return (
    <>
      <h2>Who Am I?</h2>
      <h4>I'm a first-year student at the University of British Columbia who designs and codes websites to solve problems and inspire others. </h4>
      <p>As someone who’s been doing design since high school, creation is a passion close to my heart. I hope to use my skills to help develop the future of the tech industry.</p>
      <br></br>
      <h3>My Experience</h3>
      <ul>
        <li>Software Engineer Intern @ Dashlabs.ai / June 2022 - Present</li>
        <li>Web Development Intern @ The Coding Foundation / Feb. - June 2022</li>
        <li>Web Developer @ UBC eProjects / May 2022 - Present</li>
        <li>Developer and Designer @ Elevate Tech Dec. 2021 - Feb. 2022</li>
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
