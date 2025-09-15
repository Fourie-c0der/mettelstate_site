const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-black text-white">
              <img src="./src/assets/mettelstate_logo.png" alt="Mettlestate Logo" className="w-5 h-5" />
            </div>
            <p className="text-gray-400 text-sm mt-2">Powering the future of esports</p>
          </div>
          
          <div className="flex space-x-6">
            {['Twitter', 'Discord', 'Twitch', 'YouTube'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-400 hover:text-lime-400 transition-colors duration-200 font-medium px-3 py-2 border border-gray-700 hover:border-lime-400"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          
          <p className="text-gray-400 text-sm">
            © 2025 Mettlestate. All rights reserved. | Terms of Service | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;