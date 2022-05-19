const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>'m a first-year student at the University of British Columbia who designs and codes websites to solve problems and inspire others. As someone who’s been doing design since high school, creation is a passion close to my heart. I hope to use my skills to help develop the future of the tech industry.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
