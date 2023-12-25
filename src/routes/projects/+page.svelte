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
  <div class="md:w-4/5 flex flex-col items-center" style="width: 90%">
    <div class="typewriter mt-4 mt-[30vh] md:mt-[40vh]">
      <h1 class="text-4xl font-tiempos-headline">Projects</h1>
    </div>
    <div class="-ml-3 md:ml-0">
      <Navbar />
    </div>
    <div class="mt-8 w-full text-left">
      <ul class="list-disc pl-6">
        <li>
          <a href="https://www.socratica.info/" target="_blank" class="font-sf-mono font-bold text-lg border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white px-1 transition duration-500 ease-in-out">
            Socratica Website
          </a>
          <ul class="list-disc pl-6">
            <li class="font-sf-mono text-soft-grey text-lg mt-2">
              Built a website for Socratica, with a map that tracks nodes from around the world
            </li>
          </ul>
        </li>
        <li class="mt-8">
          <a href="https://github.com/sohambasu963/MealMetrics" target="_blank" class="font-sf-mono font-bold text-lg border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white px-1 transition duration-500 ease-in-out">
            Meal Metrics
          </a>
    
          <ul class="list-disc pl-6">
            <li class="font-sf-mono text-soft-grey text-lg mt-2">
              Created an app that identifies the nutritional value of a meal from a picture
            </li>
          </ul>
        </li>
        <li class="mt-8">
          <a href="https://devpost.com/software/agents-school" target="_blank" class="font-sf-mono font-bold text-lg border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white px-1 transition duration-500 ease-in-out">
            School AI Agent
          </a>
          <ul class="list-disc pl-6">
            <li class="font-sf-mono text-soft-grey text-lg mt-2">
              Developed an AI agent that solves assignments from MIT OpenCourseWare (won our team a hackathon!)
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
