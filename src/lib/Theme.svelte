<script lang="ts">
  import { theme } from '../stores/theme';
  import { onMount } from 'svelte';

  onMount(() => {
    // Get stored theme or system preference
    const storedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = storedTheme || (systemDark ? 'dark' : 'dark');
    theme.set(initialTheme);

    // Update HTML attribute and localStorage when theme changes
    const unsubscribe = theme.subscribe((value: string) => {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    });

    return () => unsubscribe();
  });
</script>