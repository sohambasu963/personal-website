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
</style>

<script>
  import Navbar from '$lib/components/navbar.svelte'
</script>

<div class="bg-primary min-h-screen flex flex-col items-center">
  <div class="w-4/5 flex flex-col items-center">
    <div class="typewriter mt-4 mt-[40vh]">
      <h1 class="text-4xl font-tiempos-headline">Projects</h1>
    </div>
    <Navbar />
    <div class="mt-8 w-full text-left">
      <ul class="list-disc pl-6">
        <li>
          <p class="font-sf-mono font-bold text-lg">Socratica Website</p>
          <ul class="list-disc pl-6">
            <li class="font-sf-mono text-soft-grey text-lg mt-2">
              Description or details about the role
            </li>
          </ul>
        </li>
        <li>
          <p class="font-sf-mono font-bold text-lg mt-8">Meal Metrics</p>
          <ul class="list-disc pl-6">
            <li class="font-sf-mono text-soft-grey text-lg mt-2">
              Description or details about the role
            </li>
          </ul>
        </li>
        <li>
          <p class="font-sf-mono font-bold text-lg mt-8">School AI Agent</p>
          <ul class="list-disc pl-6">
            <li class="font-sf-mono text-soft-grey text-lg mt-2">
              Description or details about the role
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- <div class="mt-8 w-full text-left">
        <h2 class="text-2xl font-tiempos-headline">What I'm currently up to:</h2>
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
                Working out at the gym, swimming, playing soccer
              </p>
            </li>
            <li>
              <p class="font-sf-mono text-soft-grey text-lg">
                All of the above
              </p>
            </li>
        </ul>
      </div> -->
  </div>
</div>
