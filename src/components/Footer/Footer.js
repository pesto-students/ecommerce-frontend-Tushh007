import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import translate from '../../utils/i18n/translate';

function Footer() {
  const translator = (item) =>
    translate(item) === item ? item : translate(item);
  return (
    <div className="footer">
      <div className="container"></div>
      <footer>
        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">{translator('About')}</h2>
            <ul>
              <li>
                <a href="#">{translator('Services')}</a>
              </li>
              <li>
                <a href="#">{translator('Portfolio')}</a>
              </li>
              <li>
                <a href="#">{translator('Pricing')}</a>
              </li>
              <li>
                <a href="#">{translator('Customers')}</a>
              </li>
              <li>
                <a href="#">{translator('Careers')}</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">{translator('Resources')}</h2>
            <ul>
              <li>
                <a href="#">{translator('Docs')}</a>
              </li>
              <li>
                <a href="#">{translator('Blog')}</a>
              </li>
              <li>
                <a href="#">{translator('eBooks')}</a>
              </li>
              <li>
                <a href="#">{translator('Webinars')}</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">{translator('Contact')}</h2>
            <ul>
              <li>
                <a href="#">{translator('Help')}</a>
              </li>
              <li>
                <a href="#">{translator('Sales')}</a>
              </li>
              <li>
                <a href="#">{translator('Advertise')}</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">{translator('Stay Updated')}</h2>
            <p>
              {translator('Subscribe to our newsletter to get our latest news')}
              .
            </p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </section>

        <section className="ft-social">
          <ul className="ft-social-list">
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <YouTubeIcon />
              </a>
            </li>
          </ul>
        </section>

        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>
              <a href="#">{translator('Terms & Conditions')}</a>
            </li>
            <li>
              <a href="#">{translator('Privacy Policy')}</a>
            </li>
            <li>&copy; 2021 {translator('Copyright')} Ecommerce Inc.</li>
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
