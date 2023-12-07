import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        property="og:description"
        content="A web developer designing and building websites that solve problems."
      />
      <meta property="og:image" content="https://imgur.com/YXpApwy.png" />
      <meta property="og:url" content="https://indywip.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Developer Portfolio',
};
