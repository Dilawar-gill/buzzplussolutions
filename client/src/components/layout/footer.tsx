import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Buzzplussolutions</h3>
            <p className="text-gray-300 mb-4">Your partner for digital growth and business process optimization.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-social-facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-social-twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-social-linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-social-instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="link-footer-website-dev">Website Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="link-footer-seo">SEO Optimization</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="link-footer-graphic-design">Graphic Design</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="link-footer-content-writing">Content Writing</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="link-footer-social-media">Social Media</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="link-footer-call-center">Call Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors" data-testid="link-footer-portfolio">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors" data-testid="link-footer-contact">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-terms">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p data-testid="text-footer-email">hello@buzzplussolutions.com</p>
              <p data-testid="text-footer-phone">+1 (555) 123-4567</p>
              <p data-testid="text-footer-hours">Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p data-testid="text-footer-copyright">&copy; 2024 Buzzplussolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
