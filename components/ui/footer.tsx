import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Web Studio</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">DynamicBox Flex</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Programming Forms</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Integrations</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Command-line</a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorials & Guides</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Support Center</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Partners</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Company values</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Instagram">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 5c-3.455 0-3.883.016-5.238.076-1.35.062-2.238.278-2.966.594a4.936 4.936 0 0 0-1.79 1.091 4.938 4.938 0 0 0-1.09 1.79c-.316.727-.532 1.615-.594 2.966C5.016 12.117 5 12.545 5 16s.016 3.883.076 5.238c.062 1.35.278 2.238.594 2.966a4.938 4.938 0 0 0 1.09 1.79 4.938 4.938 0 0 0 1.79 1.09c.727.316 1.615.532 2.966.594C12.117 26.984 12.545 27 16 27s3.883-.016 5.238-.076c1.35-.062 2.238-.278 2.966-.594a4.938 4.938 0 0 0 1.79-1.09 4.938 4.938 0 0 0 1.09-1.79c.316-.727.532-1.615.594-2.966.06-1.355.076-1.883.076-5.238s-.016-3.883-.076-5.238c-.062-1.35-.278-2.238-.594-2.966a4.938 4.938 0 0 0-1.09-1.79 4.938 4.938 0 0 0-1.79-1.09c-.727-.316-1.615-.532-2.966-.594C19.883 5.016 19.455 5 16 5zm0 1.695c2.964 0 3.313.014 4.465.072 1.122.052 1.72.254 2.117.42.488.213.84.464 1.212.836.372.372.623.724.836 1.212.166.397.368.995.42 2.117.058 1.152.072 1.501.072 4.465s-.014 3.313-.072 4.465c-.052 1.122-.254 1.72-.42 2.117-.213.488-.464.84-.836 1.212-.372.372-.724.623-1.212.836-.397.166-.995.368-2.117.42-1.152.058-1.501.072-4.465.072s-3.313-.014-4.465-.072c-1.122-.052-1.72-.254-2.117-.42-.488-.213-.84-.464-1.212-.836-.372-.372-.623-.724-.836-1.212-.166-.397-.368-.995-.42-2.117-.058-1.152-.072-1.501-.072-4.465s.014-3.313.072-4.465c.052-1.122.254-1.72.42-2.117.213-.488.464-.84.836-1.212.372-.372.724-.623 1.212-.836.397-.166.995-.368 2.117-.42 1.152-.058 1.501-.072 4.465-.072z"/>
                  <path d="M16 8.768c-4.028 0-7.232 3.204-7.232 7.232s3.204 7.232 7.232 7.232 7.232-3.204 7.232-7.232-3.204-7.232-7.232-7.232zm0 12c-2.98 0-5.408-2.428-5.408-5.408S13.02 10.952 16 10.952s5.408 2.428 5.408 5.408S18.98 20.768 16 20.768z"/>
                  <circle cx="22.5" cy="9.5" r="1.5"/>
                </svg>
              </a>
            </li>
          </ul>


          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; WereldDigitaal.nl. Alle rechten voorbehouden. KvK: 93593910 | BTW: NL005030011B68</div>

        </div>

      </div>
    </footer>
  )
}
