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

<!-- <img
  src={Soham}
  alt="Soham"
  class="absolute top-0 m-4 mt-0 md:m-8 md:w-1/4 w-2/3 transform -translate-x-1/2 fade-in left-44.5 md:left-48"
/> -->

<div
  class="min-h-screen flex flex-col items-center md:pb-0 pb-8"
  style="background: linear-gradient(to bottom, #FBF8EF 0%, #F7EFD7 100%);"
>
  <div class="flex flex-col items-center" style="width: 90%;">
    <div class="typewriter mt-4 mt-[7vh] md:mt-[40vh]">
      <h1 class="text-4xl font-tiempos-headline">About</h1>
    </div>
    <div class="md:ml-0">
      <Navbar />
    </div>
    <div class="flex flex-row justify-between w-full mt-8">
      <div class="w-1/2 text-left">
        <h2 class="text-xl md:text-2xl font-tiempos-headline tracking-tight">
          What I'm currently up to:
        </h2>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>
            <p
              class="tracking-tight font-sf-mono text-soft-grey md:text-lg text-md"
            >
              Building out cool software for startups
            </p>
          </li>
          <li>
            <p
              class="tracking-tight font-sf-mono text-soft-grey md:text-lg text-md"
            >
              Hosting
              <a
                href="https://www.socratica.info/"
                target="_blank"
                class="border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                Socratica
              </a>
              sessions (I built the website!!)
            </p>
          </li>
          <li>
            <p
              class="tracking-tight font-sf-mono text-soft-grey md:text-lg text-md"
            >
              Tinkering with LLMs and the latest frontend frameworks
            </p>
          </li>
          <li>
            <p
              class="tracking-tight font-sf-mono text-soft-grey md:text-lg text-md"
            >
              Playing some 🔥 jazz improv on the piano
            </p>
          </li>
          <li>
            <p
              class="tracking-tight font-sf-mono text-soft-grey md:text-lg text-md"
            >
              Playing bullet chess to improve my reaction time
            </p>
          </li>
          <li>
            <p
              class="tracking-tight font-sf-mono text-soft-grey md:text-lg text-md"
            >
              Working out, swimming, playing soccer
            </p>
          </li>
          <li>
            <p
              class="tracking-tight font-sf-mono text-soft-grey md:text-lg text-md"
            >
              All of the above
            </p>
          </li>
        </ul>
      </div>
      <div class="w-1/2 text-left">
        <h2 class="text-xl md:text-2xl font-tiempos-headline tracking-tight">
          What keeps me going:
        </h2>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>
            <p
              class="tracking-tight font-sf-mono text-soft-grey md:text-lg text-md"
            >
              Playing pianos on campus and <a
                href="https://youtu.be/v9qndL3QweY"
                target="_blank"
                class="border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
              >
                recording reactions
              </a>
            </p>
          </li>
          <li>
            <p
              class="tracking-tight font-sf-mono text-soft-grey md:text-lg text-md"
            >
              Signing up for as many intramural sports as possible
            </p>
          </li>
          <li>
            <p
              class="tracking-tight font-sf-mono text-soft-grey md:text-lg text-md"
            >
              Hosting friends and building a community
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
