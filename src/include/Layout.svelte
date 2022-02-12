<script>

    export let title = undefined;
    export let date = undefined;
    export let author = undefined;
    export let layout = undefined;

    import Head from "./Head.svelte";
    import Navigation from "./Navigation.svelte";
    import Icon from "@iconify/svelte";

    let dateString = (new Date(date)).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        weekday: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });

</script>

<Head title="{title}"/>

<Navigation/>

{#if layout === "page"}

    <article>
        <main>
            <slot/>
            <p><i>Atualizado por {author} em {dateString}.</i></p>
        </main>
    </article>

{:else if layout === "post"}

    <article>
        <header>
            <h1>{title}</h1>
            <time datetime="{(new Date(date)).toISOString()}">{dateString}</time>
        </header>
        <main>
            <slot/>
            <p><i>Escrito por {author} em {dateString}.</i></p>
        </main>
    </article>

{:else}

	<p>Template desconhecido.</p>

{/if}
<svg class="wave" viewBox="0 0 500 150" preserveAspectRatio="none">
    <path d="M0,0 C150.17,150.24 349.61,-50.06 500.57,50.06 L500.57,150.24 L-0.00,150.24 Z"></path>
</svg>
<footer>
    <h2>That's All, Folks!</h2>
    <p>
        Construído com <a title="Svelte" href="https://svelte.dev/"><Icon icon="logos:svelte-icon" inline={true} /></a> e
        hospedado pelo <a title="GitHub" href="https://github.com/BrendoCosta/brendocosta.github.io"><Icon icon="akar-icons:github-fill" color="white" inline={true} /></a>
        sob a licença <a href="https://github.com/BrendoCosta/brendocosta.github.io/blob/main/LICENSE">MIT</a>.
    </p>
</footer>
