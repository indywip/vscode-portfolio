import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Indy Sowy is a web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="indy sowy, indy, sowy, web developer portfolio, indy web developer, indy developer, mern stack, indy sowy portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Indy Sowy's Portfolio" />
      <meta
        property="og:description"
        content="A web developer designing and building websites that solve problems."
      />
      <meta property="og:image" content="https://imgur.com/YXpApwy.png" />
      <meta property="og:url" content="https://indysowy.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Indy Sowy',
};
