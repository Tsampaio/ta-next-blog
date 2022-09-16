import React from 'react';
import { useState, useEffect } from 'react';

import { Container, Row } from 'reactstrap';

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
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
                <a href="/contact">Contact</a>
              </div>
            </Row>
          </Container>
        </footer>
      )}
    </>
  );
};

export default Footer;
