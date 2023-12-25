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
      typewriter 3s steps(40) 0s forwards,
      blinkCursor 750ms steps(40) 2s 5 forwards;
  }

  .icon-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    padding: 5px;
    border: 2px solid;
    border-radius: 9999px;
    overflow: hidden;
  }
  .icon {
    display: block;
    width: 80%;
    height: auto;
  }
</style>

<script>
  import Navbar from '$lib/components/navbar.svelte'
  import TwitterLogo from '$lib/images/TwitterLogo.svg'
  import LinkedinLogo from '$lib/images/LinkedinLogo.svg'
  import GithubLogo from '$lib/images/GithubLogo.svg'
</script>

<svelte:head>
  <title>Soham Basu</title>
  <meta name="description" content="Soham Basu's personal website" />
</svelte:head>

<div
  class="min-h-screen flex flex-col items-center"
  style="background: linear-gradient(to bottom, #FBF8EF 0%, #F7EFD7 100%);"
>
  <div
    class="md:w-4/5 mt-[30vh] md:mt-[40vh] flex flex-col items-center"
    style="width: 90%"
  >
    <div class="typewriter">
      <h1 class="text-4xl font-tiempos-headline">Hi, I'm Soham!</h1>
    </div>
    <div class="-ml-3 md:ml-0">
      <Navbar />
    </div>
  </div>

  <div class="md:w-4/5 flex flex-col items-center mt-8" style="width: 90%">
    <p class="text-lg font-sf-mono text-soft-grey text-center">
      Software developer and Computer Science + Finance at the University of
      Waterloo!
    </p>
    <p class="text-lg font-sf-mono text-soft-grey text-center mt-1">
      Always on the lookout for cool projects and internships!
    </p>
    <p class="text-lg font-sf-mono text-soft-grey text-center mt-1">
      Reach me at {''}
      <a
        href="mailto:sohambasu963@gmail.com"
        class="border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white px-1 transition duration-500 ease-in-out"
      >
        sohambasu963@gmail.com
      </a>
      or {''}
      <a
        href="https://twitter.com/sohambasu963"
        target="_blank"
        class="border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white px-1 transition duration-500 ease-in-out"
      >
        @sohambasu963
      </a>
      anywhere else!
    </p>
  </div>
  <div
    class="absolute bottom-4 md:bottom-8 transform -translate-x-1/2 flex items-center gap-4"
    style="left: 49%;"
  >
    <a
      href="https://twitter.com/sohambasu963"
      target="_blank"
      class="icon-container"
      style="border-color: #649AEA;"
    >
      <img src={TwitterLogo} alt="Twitter" class="icon" />
    </a>
    <a
      href="https://www.linkedin.com/in/sohambasu963/"
      target="_blank"
      class="icon-container"
      style="border-color: #327BE6;"
    >
      <img src={LinkedinLogo} alt="LinkedIn" class="icon" />
    </a>
    <a
      href="https://github.com/sohambasu963"
      target="_blank"
      class="icon-container"
      style="border-color: #303030;"
    >
      <img src={GithubLogo} alt="GitHub" class="icon" />
    </a>
  </div>
</div>
