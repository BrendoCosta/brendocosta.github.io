<script lang="ts">
    import { onMount, type Snippet } from "svelte";
    import { slide } from "svelte/transition";
    import { browser } from "$app/environment";
    import IntersectionObserver from "svelte-intersection-observer";

    type Props =
    {
        index: number;
        title: string;
        reverse?: boolean;
        children: Snippet;
    };

    let { index, title, reverse, children = $bindable() }: Props = $props();

    let section_title_node: HTMLElement | null | undefined = $state(null);
    let section_bar_node: HTMLElement | null | undefined = $state(null);
    let text_node: HTMLParagraphElement | null | undefined = $state(null);

    let scrollY: number = $state(1);
    let elemScrollPos: number = $state(1);
    
    onMount(() => {
        if (browser && text_node)
        {
            elemScrollPos = scrollY + text_node.getBoundingClientRect().top;
        }
    });

</script>
<svelte:window bind:scrollY={scrollY}/>
<section class="{ reverse ? "bg-zinc-900" : "bg-neutral-500" } flex flex-col md:min-h-screen">
    <div id="{title}" class="{ reverse ? "bg-neutral-500" : "bg-zinc-900" } relative overflow-hidden h-[50vh] md:h-screen flex flex-col justify-center items-center">
        <svg class="absolute top-0 left-0 w-screen h-full" viewBox="0 0 200 70" preserveAspectRatio="xMinYMin slice">
            <foreignObject x="0" y="0" width="100%" height="100%">
                <div class="flex flex-col h-full justify-center">
                    <p bind:this={text_node} style="transform: translateX({(elemScrollPos - scrollY)/50}px);" class="text-5xl text-nowrap font-display tracking-widest { reverse ? "text-neutral-600/40" : "text-zinc-800/40" } select-none">{title}</p>
                </div>
            </foreignObject>
        </svg>
        <IntersectionObserver element={section_title_node} let:intersecting>
            <div bind:this={section_title_node}>
                {#if intersecting}
                    <h2 transition:slide={{ delay: 200, axis: "y" }} class="text-[15vw] text-center uppercase font-display { reverse ? "text-zinc-900" : "text-neutral-500" } relative">{title}</h2>
                {/if}
            </div>
        </IntersectionObserver>
    </div>
    <div class="flex flex-col { reverse? "md:flex-row-reverse" : "md:flex-row" } md:justify-stretch md:items-start md:min-h-screen">
        <div class="hidden md:block md:p-16 { reverse ? "bg-neutral-500" : "bg-zinc-900" } { reverse ? "text-zinc-800/40" : "text-neutral-600/40" } md:w-[20%] md:self-stretch">
            <IntersectionObserver element={section_bar_node} let:intersecting>
                <div bind:this={section_bar_node} class="flex { reverse? "md:flex-row-reverse" : "md:flex-row" } md:gap-x-8 font-display font-bold">
                    {#if intersecting}
                        <span transition:slide={{ delay: 500, axis: "x" }} class="text-8xl select-none">#{String(index).padStart(2, "0")}</span>
                        <h2 transition:slide={{ delay: 500, axis: "x" }} class="text-8xl uppercase orientation-sideways vertical-writing-sideways-lr select-none">{title}</h2>
                    {/if}
                </div>
            </IntersectionObserver>
        </div>
        <div class="md:w-[80%] p-8 md:px-52 md:pb-52 md:pt-16 { reverse ? "bg-neutral-500" : "bg-zinc-900" } { reverse ? "text-zinc-900" : "text-neutral-500" } md:self-stretch">
            {#if children}
                {@render children()}
            {/if}
        </div>
    </div>
</section>