import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row } from 'reactstrap';
import { PRIVACY_PAGE, TERMS_PAGE, CONTACT_PAGE, OLD_WEBSITE } from '../config';

import styles from './Footer.module.css';

const Footer = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (!pageLoaded) {
      setPageLoaded(true);
    }
  }, []);

  return (
    <>
      {pageLoaded && (
        <footer className={styles.footer}>
          <Container>
            <Row className={styles.footerSocialCtn}>
              <div className={styles.footerLogoSocialCtn}>
                <div className={styles.footerRights}>
                  <p>© Telmo Academy 2022</p>
                </div>
                <div className={styles.footerSocial}>
                  <a
                    href="https://www.youtube.com/user/Telmo87/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.socialLink}
                  >
                    <i className="fab fa-youtube" />
                  </a>
                  <a
                    href="https://twitter.com/DevTelmo"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.socialLink}
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://www.instagram.com/sampaiotravels"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.socialLink}
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className={styles.footerLinks}>
                <div>
                  <Link href={PRIVACY_PAGE}>
                    <a>Privacy</a>
                  </Link>

                  <Link href={TERMS_PAGE}>
                    <a>Terms</a>
                  </Link>
                </div>
                <div>
                  <Link href={OLD_WEBSITE}>
                    <a>Old Website</a>
                  </Link>
                  <Link href={CONTACT_PAGE}>
                    <a>Contact</a>
                  </Link>
                </div>
                <div>
                  <Link href={`/`}>
                    <a>Blog</a>
                  </Link>
                </div>
              </div>
            </Row>
          </Container>
        </footer>
      )}
    </>
  );
};

export default Footer;
