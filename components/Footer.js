export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <p className="text-sm">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
