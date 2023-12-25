<style>
  @keyframes typewriter {
    from {
      width: 0;
      visibility: visible;
    }
    to {
      width: 100%;
      visibility: visible;
    }
  }

  @keyframes blinkCursor {
    0%,
    100% {
      border-right-color: transparent;
    }
    50% {
      border-right-color: rgba(128, 128, 128, 0.75);
    }
  }

  .typewriter h1 {
    overflow: hidden;
    border-right: 0.15em solid rgba(128, 128, 128, 0.75);
    white-space: nowrap;
    letter-spacing: 0.05em;
    width: 0;
    visibility: hidden;
    animation:
      typewriter 1.5s steps(40) 0s forwards,
      blinkCursor 750ms steps(40) 2s 5 forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 1s ease-in forwards;
  }
</style>

<script>
  import Navbar from '$lib/components/navbar.svelte'
  import Soham from '$lib/images/Soham.png'
</script>

<img
  src={Soham}
  alt="Soham"
  class="absolute top-0 m-4 mt-4 md:m-8 md:w-1/4 w-4/5 transform -translate-x-1/2 fade-in left-44.5 md:left-48"
/>

<div
  class="min-h-screen flex flex-col items-center"
  style="background: linear-gradient(to bottom, #FBF8EF 0%, #F7EFD7 100%);"
>
  <div class="flex flex-col items-center" style="width: 90%;">
    <div class="typewriter mt-4 mt-[30vh] md:mt-[40vh]">
      <h1 class="text-4xl font-tiempos-headline">About</h1>
    </div>
    <div class="-ml-3 md:ml-0">
      <Navbar />
    </div>
    <div class="flex flex-row justify-between w-full mt-8">
      <div class="w-1/2 text-left md:mb-0 mb-4">
        <h2 class="text-2xl font-tiempos-headline">
          What I'm currently up to:
        </h2>
        <ul class="list-disc pl-6 mt-4">
          <li>
            <p class="font-sf-mono text-soft-grey text-lg">
              Building out cool software for startups
            </p>
          </li>
          <li>
            <p class="font-sf-mono text-soft-grey text-lg">
              Hosting
              <a
                href="https://www.socratica.info/"
                target="_blank"
                class="border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white px-1 transition duration-500 ease-in-out"
              >
                Socratica
              </a>
              sessions (I got to build the website!!)
            </p>
          </li>
          <li>
            <p class="font-sf-mono text-soft-grey text-lg">
              Tinkering with LLMs and the latest frontend frameworks
            </p>
          </li>
          <li>
            <p class="font-sf-mono text-soft-grey text-lg">
              Playing some 🔥 jazz improv on the piano
            </p>
          </li>
          <li>
            <p class="font-sf-mono text-soft-grey text-lg">
              Playing bullet chess to improve my reaction time
            </p>
          </li>
          <li>
            <p class="font-sf-mono text-soft-grey text-lg">
              Working out, swimming, playing soccer
            </p>
          </li>
          <li>
            <p class="font-sf-mono text-soft-grey text-lg">All of the above</p>
          </li>
        </ul>
      </div>
      <div class="w-1/2 text-left">
        <h2 class="text-2xl font-tiempos-headline">What keeps me going:</h2>
        <ul class="list-disc pl-6 mt-4">
          <li>
            <p class="font-sf-mono text-soft-grey text-lg">
              Playing pianos on campus and <a
                href="https://youtu.be/v9qndL3QweY"
                target="_blank"
                class="border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white px-1 transition duration-500 ease-in-out"
              >
                recording reactions
              </a>
            </p>
          </li>
          <li>
            <p class="font-sf-mono text-soft-grey text-lg">
              Signing up for as many intramural sports as possible
            </p>
          </li>
          <li>
            <p class="font-sf-mono text-soft-grey text-lg">
              Hosting friends and building a community
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
