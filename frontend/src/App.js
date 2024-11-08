import logo from './logoGaamfer.svg';
import './App.css';
import { fetchCategories,fetchPosts,fetchProjects } from './services/api.js'; // Import API

function App() {
  return (
      <div className="App">
        <header class="bg-white dark:bg-gray-900">
          <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
              <div class="md:flex md:items-center md:gap-12">
                <a class="block text-teal-600 dark:text-teal-600"  href="#">
                  <span class="sr-only">Home</span>
                  <img class="h-8" src={logo} alt="logo"/>
                </a>
              </div>

              <div class="hidden md:block">
                <nav aria-label="Global">
                  <ul class="flex items-center gap-6 text-sm">
                    <li>
                      <a
                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        Projects
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        Posts
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="flex items-center gap-4">
                <div class="sm:flex sm:gap-4">
                  {/* Here Ill add the search bar apeearing */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
  );
}

export default App;
