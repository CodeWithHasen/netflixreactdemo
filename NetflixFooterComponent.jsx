import NetflixDropdown from "./NetflixDropdown";

export default function NetflixFooterComponent() {
  return (
    <div className="footer-container">
      <p className="text-start">Questions? Call <a href="tel:000-800-919-1743">000-800-919-1743</a></p>

      <div className="row text-start">
        <div className="col-6 col-md-3">
          <ul className="list-unstyled">
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
        </div>

        <div className="col-6 col-md-3">
          <ul className="list-unstyled">
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>

        <div className="col-6 col-md-3">
          <ul className="list-unstyled">
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
        </div>

        <div className="col-6 col-md-3">
          <ul className="list-unstyled">
            <li>Media Centre</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="mt-3 text-start">
        <NetflixDropdown />
      </div>

      <div className="mt-3 text-start">
        <p>Netflix India</p>
      </div>
    </div>
  );
}
