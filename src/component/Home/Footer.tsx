const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600">JobFinder</h2>
            <p className="mt-4 text-sm text-gray-300">
              Connecting top talent with great opportunities across industries.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-yellow-400">Home</a></li>
              <li><a href="/jobs" className="hover:text-yellow-400">Browse Jobs</a></li>
              <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
  
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/blog" className="hover:text-yellow-400">Blog</a></li>
              <li><a href="/faq" className="hover:text-yellow-400">FAQs</a></li>
              <li><a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-yellow-400">Terms of Use</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm text-gray-300">Email: support@jobfinder.com</p>
            <p className="text-sm text-gray-300 mt-1">Phone: +123 456 7890</p>
            <p className="text-sm text-gray-300 mt-1">Location: Lagos, Nigeria</p>
          </div>
        </div>
  
        <div className="text-center mt-10 text-sm text-gray-400">
          © {new Date().getFullYear()} JobFinder. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  