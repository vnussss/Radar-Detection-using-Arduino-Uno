class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          background: linear-gradient(to right, #818cf8, #c7d2fe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #d1d5db;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
        }
        a:hover {
          color: white;
          background: rgba(79, 70, 229, 0.2);
        }
        a.active {
          color: white;
          background: rgba(79, 70, 229, 0.4);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
<<<<<<< HEAD
        <a href="index.html" class="logo">
=======
        <a href="/" class="logo">
>>>>>>> 4ec08fa948cd1bf17e1545ec1dad3072e15a77ca
          <i data-feather="eye" class="logo-icon"></i>
          <span>Ultrasonic Sentinel</span>
        </a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul>
<<<<<<< HEAD
          <li><a href="index.html" class="active"><i data-feather="home"></i> Home</a></li>
          <li><a href="code.html"><i data-feather="code"></i> Source Code</a></li>
          <li><a href="about.html"><i data-feather="info"></i> About</a></li>
=======
          <li><a href="/" class="active"><i data-feather="home"></i> Home</a></li>
          <li><a href="/code.html"><i data-feather="code"></i> Source Code</a></li>
          <li><a href="/about.html"><i data-feather="info"></i> About</a></li>
>>>>>>> 4ec08fa948cd1bf17e1545ec1dad3072e15a77ca
          <li><a href="https://github.com/arduino-radar-project" target="_blank"><i data-feather="github"></i> GitHub</a></li>
        </ul>
      </nav>
    `;
  }
}
<<<<<<< HEAD
customElements.define('custom-navbar', CustomNavbar);
=======
customElements.define('custom-navbar', CustomNavbar);
>>>>>>> 4ec08fa948cd1bf17e1545ec1dad3072e15a77ca
