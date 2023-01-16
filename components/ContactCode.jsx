import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'indira.sowy@gmail.com',
    href: 'mailto:indira.sowy@gmail.com',
  },
  {
    social: 'github',
    link: 'indywip',
    href: 'https://github.com/indywip',
  },
  {
    social: 'linkedin',
    link: 'indirasowy',
    href: 'https://www.linkedin.com/in/indirasowy/',
  },

  {
    social: 'design',
    link: 'indysowy.netlify.app',
    href: 'https://indysowy.netlify.app/',
  },
  {
    social: 'website',
    link: 'indywip.vercel.app',
    href: 'https://indywip.vercel.app/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
