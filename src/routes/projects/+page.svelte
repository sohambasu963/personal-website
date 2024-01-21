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
</style>

<script>
  import Navbar from '$lib/components/navbar.svelte'
</script>

<div
  class="min-h-screen flex flex-col items-center md:pb-0 pb-8"
  style="background: linear-gradient(to bottom, #FBF8EF 0%, #F7EFD7 100%);"
>
  <div class="md:w-4/5 flex flex-col items-center" style="width: 90%">
    <div class="typewriter mt-4 mt-[7vh] md:mt-[40vh]">
      <h1 class="text-4xl font-tiempos-headline">Projects</h1>
    </div>
    <div class="md:ml-0">
      <Navbar />
    </div>
    <div class="mt-8 mb-8 w-full text-left">
      <ul class="list-disc pl-6 space-y-4 md:space-y-8">
        <li>
          <a
            href="https://www.socratica.info/"
            target="_blank"
            class="font-sf-mono font-bold md:text-lg text-md border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
          >
            Socratica Website
          </a>
          <ul class="list-disc pl-6">
            <li
              class="tracking-tight font-sf-mono text-soft-grey md:text-lg text-md mt-1 md:mt-2"
            >
              Built a website for Socratica, with a map that tracks nodes from
              around the world
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://invoicer-soham.vercel.app/"
            target="_blank"
            class="tracking-tight font-sf-mono font-bold md:text-lg text-md border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
          >
            Invoicer
          </a>
          <ul class="list-disc pl-6">
            <li
              class="font-sf-mono text-soft-grey md:text-lg text-md mt-1 md:mt-2"
            >
              Built an app that allows users to generate and export custom
              invoices
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://finance-portfolio.vercel.app/signup"
            target="_blank"
            class="tracking-tight font-sf-mono font-bold md:text-lg text-md border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
          >
            Portfolio Builder
          </a>

          <ul class="list-disc pl-6">
            <li
              class="font-sf-mono text-soft-grey md:text-lg text-md mt-1 md:mt-2"
            >
              Developed a full-stack app that builds custom portfolios for users
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://github.com/sohambasu963/MealMetrics"
            target="_blank"
            class="tracking-tight font-sf-mono font-bold md:text-lg text-md border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
          >
            Meal Metrics
          </a>

          <ul class="list-disc pl-6">
            <li
              class="font-sf-mono text-soft-grey md:text-lg text-md mt-1 md:mt-2"
            >
              Created an app that uses a picture of your meal to identify its
              nutritional value
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://devpost.com/software/agents-school"
            target="_blank"
            class="tracking-tight font-sf-mono font-bold md:text-lg text-md border-b-2 border-orange hover:bg-orange hover:text-white px-1 transition duration-500 ease-in-out"
          >
            School AI Agent
          </a>
          <ul class="list-disc pl-6">
            <li
              class="font-sf-mono text-soft-grey md:text-lg text-md mt-1 md:mt-2"
            >
              Developed an AI agent that solves assignments from MIT
              OpenCourseWare (won our team a hackathon!)
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
