import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-white shadow-md flex flex-col md:flex-row items-center justify-between py-4 px-8">
      <div className="flex items-center space-x-4">
        <Image
          src="/education logo.png"
          alt="logo"
          className="w-12 h-12"
          width={50}
          height={50}
        />
        <h1 className="text-xl font-semibold text-gray-800">Examination Portal</h1>
      </div>
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <li>
            <Link href="/" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link href="/result" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
              Results
            </Link>
          </li>
          <li>
            <Link href="/help" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
