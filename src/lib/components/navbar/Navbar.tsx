import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky inset-0 z-50 border-b border-slate-100 bg-gray-100 shadow-sm backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        <div className="relative flex items-center">
          <Link href="/">
          <h1 className="pt-1.5 text-black ">Edu. Sanjaal</h1>
          </Link>
        </div>
        <ul className="hidden items-center justify-center gap-6 md:flex">
      <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
        <a href="#">Pricing</a>
      </li>
      <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
        <a href="#">Blog</a>
      </li>
      <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
        <a href="#">Docs</a>
      </li>
    </ul>
        <div className="flex-grow" />
        <div className="hidden items-center justify-center gap-6 md:flex">
          <Link href="/auth/register" className="font-dm text-sm font-medium text-slate-700">
            Sign in
          </Link>
          <Link
            href="/institute/become"
            className="rounded-md bg-gradient-to-br from-blue-600 to-blue-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-blue-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Become an Institute
          </Link>
        </div>
        <div className="relative flex items-center justify-center md:hidden">
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-auto text-slate-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
