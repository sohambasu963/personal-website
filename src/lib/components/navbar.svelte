<script>
  import SohamEmoji from '$lib/images/SohamEmoji.png'
  import WorkingEmoji from '$lib/images/desktop_computer.png'
  import ProjectsEmoji from '$lib/images/books.png'
  import House from '$lib/images/house.png'
</script>

<style>
  a {
    position: relative;
    overflow: hidden;
    z-index: 0;
  }

  a::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #FBF8EF, #d2e0f1);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }

  a:hover::after {
    opacity: 1;
  }
</style>

<nav class="mt-2">
  <ul class="flex space-x-1 md:space-x-4">
    <li class="group relative">
      <a
        href="/"
        class="shadow-sm flex items-center space-x-1 md:space-x-2 py-2 px-2 pr-8 md:pr-2 rounded-full transition-colors duration-500 ease-in-out"
      >
        <img src={House} alt="Home" class="w-6 h-6" />
        <span class="text-orange font-sf-mono uppercase font-bold">home</span>
      </a>
    </li>
    <li class="group">
      <a
        href="/about"
        class="shadow-sm flex items-center space-x-1 md:space-x-2 py-2 px-2 pr-8 md:pr-2 rounded-full transition-colors duration-500 ease-in-out"
      >
        <img src={SohamEmoji} alt="Soham" class="w-6 h-6" />
        <span class="text-orange font-sf-mono uppercase font-bold">about</span>
      </a>
    </li>
    <li class="group">
      <a
        href="/work"
        class="shadow-sm flex items-center space-x-1 md:space-x-2 py-2 px-2 pr-8 md:pr-2 group-hover:bg-gray-200 rounded-full transition-colors duration-500 ease-in-out"
      >
        <img src={WorkingEmoji} alt="Working" class="w-6 h-6" />
        <span class="text-orange font-sf-mono uppercase font-bold">work</span>
      </a>
    </li>
    <li class="group">
      <a
        href="/projects"
        class="shadow-sm flex items-center space-x-1 md:space-x-2 py-2 px-2 pr-8 md:pr-2 group-hover:bg-gray-200 rounded-full transition-colors duration-500 ease-in-out"
      >
        <img src={ProjectsEmoji} alt="Projects" class="w-6 h-6" />
        <span class="text-orange font-sf-mono uppercase font-bold"
          >projects</span
        >
      </a>
    </li>
  </ul>
</nav>
