<script>
  import { theme } from '../stores/theme';
  let balls = $state(0);

  function toggleTheme() {
    balls = 1;
    // theme.update(current => current === 'light' ? 'dark' : 'light');
  }

</script>
<div class="flex">
  <span class='absolute' class:boll={!balls}></span>
  <button onclick={toggleTheme} class='animate-spin' class:dark={$theme == 'dark'} class:fuckoff={balls} aria-label='theme'></button>
</div>
<style>
  button {
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    text-transform: uppercase;
    background-image: url('/light.svg');
    width: 2rem;
    height: 2rem;
  }
  .dark {
    background-color: transparent;
    background-image: url('/dark.svg');
    color: white;
  }
  .fuckoff {
    position: relative;
    animation: slide 500ms 1 linear forwards;
  }

  .boll {
    display: none;
  }

  span::before {
    display: flex;
    font-size: small;
    content: '(ヘ･_･)ヘ┳━┳';
    color: white;
    width: 200px;
    animation: tableflip 200ms 1 linear forwards;
  }

  @keyframes slide {
    0% {
      left: 0px;
      bottom: 0px;
      rotate: 0deg;
      opacity: 1;
    }
    99% {
      left: 400px;
      bottom: 200px;
      rotate: 360deg;
      opacity: 1;
    }
    100% {
      left: 100%;
      opacity: 0;
    }
  }

  @keyframes tableflip {
    0% {
      content: '(ヘ･_･)ヘ┳━┳';
    }
    75% {
      content: '(╯°□°）╯︵ ┻━┻';
    }
    100% {
      display: none;
    }
  }
</style>