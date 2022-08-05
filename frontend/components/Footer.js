import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { Container, Row } from 'reactstrap';

import styles from './Footer.module.css';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.footerSocialCtn}>
          <div class={styles.footerLogoSocialCtn}>
            <div class={styles.footerRights}>
              <p>© Telmo Academy 2022</p>
            </div>
            <div class={styles.footerSocial}>
              <a
                href="https://www.youtube.com/user/Telmo87/"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.socialLink}
              >
                <i class="fab fa-youtube"></i>
              </a>
              <a
                href="https://twitter.com/DevTelmo"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.socialLink}
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/sampaiotravels"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.socialLink}
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div class={styles.footerLinks}>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
