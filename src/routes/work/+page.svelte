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

<div class="min-h-screen flex flex-col items-center" style="background: linear-gradient(to bottom, #FBF8EF 0%, #F7EFD7 100%);">
  <div class="w-4/5 flex flex-col items-center">
    <div class="typewriter mt-4 mt-[40vh]">
      <h1 class="text-4xl font-tiempos-headline">Work</h1>
    </div>
    <Navbar />
    <div class="mt-8 w-full text-left">
      <ul class="list-disc pl-6">
        <li>
          <p class="font-sf-mono text-lg">
            <span class="font-bold">Full Stack Engineer</span> @
            <a
              href="https://www.bronco.ai/"
              target="_blank"
              class="border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white px-1 transition duration-500 ease-in-out"
            >
              Bronco AI
            </a>
          </p>
          <ul class="list-disc pl-6">
            <li class="font-sf-mono text-soft-grey text-lg mt-2">
              Leveraged GPT-4 subscription to build prototypes that help factories run more efficiently
            </li>
          </ul>
        </li>
        <li>
          <p class="font-sf-mono text-lg mt-8">
            <span class="font-bold">Software Engineer</span> @
            <a
              href="https://www.portfolioxpressway.com/"
              target="_blank"
              class="border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white px-1 transition duration-500 ease-in-out"
            >
              Portfolio Xpressway
            </a>
          </p>
          <ul class="list-disc pl-6">
            <li class="font-sf-mono text-soft-grey text-lg mt-2">
              Built dashboards and data visualizations that help advisors and clients track their investments
            </li>
          </ul>
        </li>
        <li>
          <p class="font-sf-mono text-lg mt-8">
            <span class="font-bold">Full Stack Engineer</span> @
            <a
              href="https://www.birdseyeglobal.com/"
              target="_blank"
              class="border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white px-1 transition duration-500 ease-in-out"
            >
              Birdseye
            </a>
          </p>
          <ul class="list-disc pl-6">
            <li class="font-sf-mono text-soft-grey text-lg mt-2">
              Developed an ad-tech query engine to help clients track customer insights and boost ad traffic 
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
