export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-brand-border/60 text-white py-16 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-4 gap-12 border-b border-brand-border/60 pb-12">
          {/* Logo & Career Summary */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 via-teal-300 to-emerald-500 text-zinc-950 font-black shadow-lg shadow-emerald-500/25 border border-emerald-300/40">
                <span className="font-mono text-sm font-black text-zinc-950">
                  ⬢S
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                  Shajeda
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-md ml-1.5 shadow-sm">
                  .dev
                </span>
              </div>
            </div>

            <p className="text-gray-400 max-w-sm leading-relaxed font-sans text-sm">
              Frontend developer specializing in React.js &amp; Next.js with experience building responsive web applications, authentication systems, and MongoDB-powered full-stack solutions.
            </p>

            {/* Embedded Social Buttons (GitHub, LinkedIn, Codeforces, Twitter, Facebook) */}
            <div className="flex flex-wrap gap-3">
              <a
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-brand-border/60 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-400 text-gray-400 hover:text-emerald-400 transition-all duration-300"
                href="https://github.com/SSLiza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-brand-border/60 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-400 text-gray-400 hover:text-emerald-400 transition-all duration-300"
                href="https://www.linkedin.com/in/ssliza59"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-brand-border/60 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-400 text-gray-400 hover:text-emerald-400 transition-all duration-300"
                href="https://codeforces.com/profile/_S_S_LIZA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codeforces"
                title="Codeforces Profile"
              >
                <span className="font-mono text-xs font-bold text-emerald-400">CF</span>
              </a>
              <a
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-brand-border/60 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-400 text-gray-400 hover:text-emerald-400 transition-all duration-300"
                href="https://www.facebook.com/shajeda.liza.5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-xs font-sans text-emerald-400 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-gray-400 text-xs font-sans">
              <li>
                <a className="hover:text-white transition-colors duration-200" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors duration-200" href="#about">
                  About Me
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors duration-200" href="#education">
                  Education
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors duration-200" href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors duration-200" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors duration-200" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors duration-200" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold mb-4 text-xs font-sans text-emerald-400 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3 text-gray-400 font-sans text-xs">
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-400 text-base">📍</span>
                Sylhet, Bangladesh
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-400 text-base">✉️</span>
                <a href="mailto:shajedasultanaliza2002@gmail.com" className="hover:text-white transition-colors truncate">
                  shajedasultanaliza2002@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-400 text-base">📞</span>
                <a href="tel:+8801616190004" className="hover:text-white transition-colors">
                  +880 1616190004
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-400 text-base">💬</span>
                <a href="https://wa.me/8801616190004" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline transition-colors font-semibold">
                  WhatsApp Direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-gray-500 text-xs font-sans">
          <p>© 2026 Shajeda Sultana. Built with Next.js &amp; Tailwind CSS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
