
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-lg font-bold text-gradient mb-4">
            &lt;Felipe Santos /&gt;
          </div>
          <p className="text-gray-400 mb-4">
            Building the future, one line of code at a time.
          </p>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Felipe Maia Santos. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
