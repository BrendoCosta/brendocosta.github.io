<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import { slide} from "svelte/transition";
    import { backInOut } from "svelte/easing";

    let old_scrollY: number = $state(0);
    let scrollY: number = $state(0);
    let innerWidth: number = $state(0);
    let is_mobile: boolean = $derived(innerWidth <= 768);
    let mobile_menu_open: boolean = $state(false);
    let is_nav_show: boolean = $state(true);

    $effect(() => {
        if (browser)
        {
            if (scrollY < old_scrollY)
            {
                is_nav_show = true;
            }
            else if (scrollY > old_scrollY)
            {
                if (is_nav_show)
                {
                    is_nav_show = false;

                }
            }
            old_scrollY = scrollY;
        }
    });

</script>
<svelte:window bind:scrollY bind:innerWidth />
{#if is_nav_show}
    <nav in:slide={{ duration: 500, delay: 0, easing: backInOut }} out:slide={{ duration: 500, delay: 0, easing: backInOut }} class="fixed left-0 z-10 w-full bg-zinc-900 flex flex-row justify-center items-center font-display text-neutral-500 text-2xl { mobile_menu_open ? "touch-none" : "" }">
        <div class="fixed top-0 md:hidden flex flex-row justify-stretch w-full p-4 bg-zinc-900">
            <div class="w-full"></div>
            <div class="w-full flex flex-col justify-center items-center text-center">
                <span class="font-display uppercase text-md">Brendo Costa</span>
                <span class="font-sans uppercase text-xs text-nowrap">Full Stack Developer</span>
            </div>
            <button class="w-full text-right" type="button" onclick={() => mobile_menu_open = !mobile_menu_open }>☰</button>
        </div>
        {#if mobile_menu_open || !is_mobile }
            <ul in:slide={{ duration: 500, delay: 0, easing: backInOut, axis: "x" }} out:slide={{ duration: 500, delay: 0, easing: backInOut, axis: "x" }} class="fixed md:relative top-0 flex flex-col md:flex-row md:justify-center items-center w-full h-full md:h-auto mt-16 md:mt-0 p-8 gap-8 bg-zinc-900">
                {#each [
                    { text: "Início", href: "#" },
                    { text: "Sobre mim", href: "#Sobre mim" },
                    { text: "Experiência", href: "#Experiência" },
                    { text: "Habilidades", href: "#Habilidades" },
                    { text: "Formação", href: "#Formação" },
                    { text: "Certificações", href: "#Certificações" },
                    { text: "Projetos", href: "#Projetos" },
                    { text: "Siga-me", href: "#Siga-me" },
                    //{ text: "", href: "" },
                ] as item}
                    <li><a href="{item.href}" onclick={(e) => { e.preventDefault(); document.getElementById(item.text)?.scrollIntoView({ behavior: "smooth" }); mobile_menu_open = false; } } >{item.text}</a></li>
                {/each}
            </ul>
        {/if}
    </nav>
{/if}