class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
          color: #d1d5db;
          padding: 3rem 2rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-section h3 {
          color: white;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }
        .footer-section h3:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 50%;
          height: 2px;
          background: linear-gradient(to right, #818cf8, #c7d2fe);
        }
        .footer-section p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          color: #d1d5db;
          transition: color 0.2s;
        }
        .social-links a:hover {
          color: white;
        }
        .copyright {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #374151;
          text-align: center;
          font-size: 0.875rem;
        }
        @media (max-width: 640px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>About the Project</h3>
            <p>Ultrasonic Radar detection system is an Arduino-based radar detection system with real-time web visualization using Python Flask.</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <p><a href="/">Home</a></p>
            <p><a href="/code.html">Source Code</a></p>
            <p><a href="/about.html">About</a></p>
          </div>
          <div class="footer-section">
            <h3>Connect</h3>
            <div class="social-links">
              <a href="#" aria-label="GitHub"><i data-feather="github"></i></a>
              <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
              <a href="#" aria-label="YouTube"><i data-feather="youtube"></i></a>
              <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2025 Radar Detection . All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);