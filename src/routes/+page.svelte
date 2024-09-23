<script lang="ts">
    import Markdown from "svelte-exmarkdown";
    import Navigation from "$lib/Navigation.svelte";
    import Section from "$lib/Section.svelte";
    import { browser } from "$app/environment";

    let scrollY: number = $state(0);
    let scrollPercent: number = $state(0);
    $effect(() => {
        if (browser)
        {
            scrollPercent = (scrollY/document.body.scrollHeight) * 100;
        }
    });
</script>
<svelte:window bind:scrollY={scrollY}/>
<header>
    <Navigation/>
</header>
<main class="overflow-x-hidden w-full">
    <section id="Início" class="bg-zinc-900 relative">
        <svg class="absolute top-0 left-0 w-screen h-full" viewBox="0 0 200 70" preserveAspectRatio="xMinYMin slice">
            <foreignObject x="0" y="0" width="100%" height="100%">
                <div class="flex flex-col overflow-hidden select-none">
                    <p style="transform: translate3d({-scrollPercent * 10}px, 0px, 0px);" class="font-display text-2xl leading-[0.75em] tracking-widest text-zinc-800/40">Everyone should</p>
                    <p style="transform: translate3d({scrollPercent * 10}px, 0px, 0px);" class="font-display text-2xl leading-[0.75em] tracking-widest text-zinc-800/40">have their</p>
                    <p style="transform: translate3d({-scrollPercent * 10}px, 0px, 0px);" class="font-display text-2xl leading-[0.75em] tracking-widest text-zinc-800/40">mind blown</p>
                    <p style="transform: translate3d({scrollPercent * 10}px, 0px, 0px);" class="font-display text-2xl leading-[0.75em] tracking-widest text-zinc-800/40">once a day</p>
                </div>
            </foreignObject>
        </svg>
        <div class="flex flex-col md:flex-row justify-center items-center w-screen h-screen md:h-screen md:gap-x-52">
            <div style="transform: translate3d(0px, {-scrollPercent * 10}px, 0px);" class="h-full flex flex-col justify-center text-neutral-500 text-center md:text-left">
                <span class="ms-[0.1em] text-xl md:text-2xl uppercase font-sans">Olá, sou</span>
                <h1 class="text-7xl md:text-9xl text-nowrap uppercase font-display">Brendo Costa</h1>
                <span class="ms-[0.1em] text-xl md:text-2xl uppercase font-sans">Full Stack Software Developer</span>
            </div>
            <div style="transform: translate3d(0px, {-scrollPercent * 70}px, 0px);" class="w-[90%] md:w-[20%]">
                <img alt="The project logo" src="/images/brendo.jpeg">
            </div>
        </div>
    </section>
    <Section index={0} title="Sobre mim">
        <div class="markdown">
            <p>
                Sou uma pessoa criativa, gosto propor e ouvir novas ideias e trabalhar em conjunto para implementá-las.
                Meu primeiro contato com programação de computadores se deu em 2013, quando por curiosidade, comecei
                a programar em Visual Basic para o .NET acompanhando tutoriais pelo YouTube. Não muito tempo depois, 
                cada vez mais interessado na programação de jogos eletrônicos, aprendi GML para o Game Maker e C# para o Unity.
                Essas experiências pessoais positivas influenciaram minha escolha de carreira profissional, e assim, no começo de
                2020, iniciei minha graduação no Bacharelado em Sistemas de Informação na Universidade Federal Fluminense (UFF), o
                qual eu concluí em meados de 2024.
            </p>
        </div>
    </Section>
    <Section index={1} title="Experiência" reverse>
        <div class="markdown">
            <ul class="flex flex-col gap-y-8">
                {#each [
                    {
                        position: "Desenvolvedor Full Stack",
                        company: "Top Down Consultoria & Projetos S.A.",
                        start_date: "2022/03/28",
                        end_date: "2023/03/28",
                        description: "Atuei na TopDown como desenvolvedor full stack em soluções de TI para a área da saúde suplementar em todo território nacional, atendendo demandas por features, correções, otimizações, testes e adequações legais (compliance) em múltiplos sistemas com complexas regras de negócio empregando variadas stacks. Nesse período trabalhei sobretudo com back ends escritos em ASP, C# e PL/SQL em conjunto com o Oracle Database, versões 11g ao 19c. Realizei também testes E2E e integrei sistemas com web services e APIs da Agência Nacional de Saúde Suplementar (ANS), entregando diariamente através de pipelines de integração e entrega contínuas (CI/CD). Também atuei na manutenção e implementação de front ends construídos com Bootstrap, Kendo UI e jQuery. Nossos clientes incluíam Amil, Amil Dental, MedSênior, MetLife, NotreDame Intermédica, Porto Seguro, Seguros Unimed, Unimed Cerrado, Unimed Nacional, Unimed Odonto e Unimed Rio."
                    }
                ] as item}
                    <li>
                        <h3>{item.position}</h3>
                        <h4>{item.company} <span class="select-none">|</span> {new Date(item.start_date).toLocaleString("default", { month: "long" })}/{new Date(item.start_date).getFullYear()} — {new Date(item.end_date).toLocaleString("default", { month: "long" })}/{new Date(item.end_date).getFullYear()}</h4>
                        <p>{item.description}</p>
                    </li>
                {/each}
            </ul>
        </div>
    </Section>
    <Section index={2} title="Habilidades">
        <div class="markdown">
            <ul class="flex flex-col gap-y-12">
                {#each [
                    {
                        title: "Linguagens de Programação",
                        items: [
                            { name: "C", icon: "icon-[devicon-plain--c]" },
                            { name: "C++", icon: "icon-[devicon-plain--cplusplus]" },
                            { name: "C#", icon: "icon-[devicon-plain--csharp]" },
                            { name: "Erlang", icon: "icon-[devicon-plain--erlang]" },
                            { name: "Gleam", icon: "icon-[builtin--gleam]" },
                            { name: "Java", icon: "icon-[devicon-plain--java]" },
                            { name: "JavaScript", icon: "icon-[devicon-plain--javascript]" },
                            { name: "Kotlin", icon: "icon-[devicon-plain--kotlin]" },
                            { name: "Lua", icon: "icon-[devicon-plain--lua]" },
                            { name: "PHP", icon: "icon-[devicon-plain--php]" },
                            { name: "PL/SQL", icon: "icon-[builtin--plsql]" },
                            { name: "Python", icon: "icon-[devicon-plain--python]" },
                            { name: "Rust", icon: "icon-[devicon-plain--rust]" },
                            { name: "TypeScript", icon: "icon-[devicon-plain--typescript]" },
                        ]
                    },
                    {
                        title: "Front End",
                        items: [
                            { name: "Blazor", icon: "icon-[builtin--blazor]" },
                            { name: "Bootstrap", icon: "icon-[devicon-plain--bootstrap]" },
                            { name: "Svelte", icon: "icon-[devicon-plain--svelte]" },
                            { name: "Tailwind", icon: "icon-[builtin--tailwindcss]" },
                            { name: "Vue.js", icon: "icon-[devicon-plain--vuejs]" },
                            //{ name: "", icon: "" },
                        ]
                    },
                    {
                        title: "Back End",
                        items: [
                            { name: ".NET/ASP.NET", icon: "icon-[builtin--dotnet]" },
                            { name: "CMake", icon: "icon-[devicon-plain--cmake]" },
                            { name: "Deno", icon: "icon-[builtin--denojs]" },
                            { name: "Docker", icon: "icon-[devicon-plain--docker]" },
                            { name: "Meson", icon: "icon-[builtin--meson]" },
                            { name: "MySQL", icon: "icon-[devicon-plain--mysql]" },
                            { name: "NestJS", icon: "icon-[devicon-plain--nestjs]" },
                            { name: "Node.js", icon: "icon-[devicon-plain--nodejs]" },
                            { name: "Oracle Database", icon: "icon-[builtin--oracle]" },
                            { name: "Podman", icon: "icon-[builtin--podman]" },
                            { name: "PostgreSQL", icon: "icon-[devicon-plain--postgresql]" },
                            //{ name: "", icon: "" },
                        ]
                    },
                    {
                        title: "Outras",
                        items: [
                            { name: "Azure DevOps", icon: "icon-[devicon-plain--azuredevops]" },
                            { name: "Git", icon: "icon-[devicon-plain--git]" },
                            { name: "WebAssembly", icon: "icon-[builtin--webassembly]" },
                            //{ name: "", icon: "" },
                        ]
                    },
                ] as subsection}
                    <li>
                        <h3>{subsection.title}</h3>
                        <ul class="mt-8 grid grid-cols-3 md:grid-cols-7 gap-12">
                            {#each subsection.items as item }
                                <li class="flex flex-col justify-end items-center text-center gap-y-4">
                                    <span class="{ item.icon } text-5xl"></span>
                                    <span>{ item.name }</span>
                                </li>
                            {/each}
                        </ul>
                    </li>
                {/each}
            </ul>
        </div>
    </Section>
    <Section index={3} title="Formação" reverse>
        <div class="markdown">
            <h3>Bacharel em Sistemas de Informação</h3>
            <h4>Universidade Federal Fluminense <span class="select-none">|</span> 2020 - 2024</h4>
            <p>
                Bacharel em Sistemas de Informação pelo Instituto de Computação da UFF. Meu trabalho de conclusão de curso, intitulado "Open Innovation: Estudo de caso soba integração estratégica do software de código aberto e modelos de negócio de empresas de TI", foi desenvolvido sob a orientação do Prof. Dr. Flavio Luiz Seixas e abordou o software de código aberto de sua concepção a sua posição estratégica no mercado de TI atual. Você pode lê-lo através <a href="/documents/Open Innovation: Estudo de caso sobre a integração estratégica do software de código aberto e modelos de negócio de empresas de TI.pdf" target="_blank">deste link</a>.
            </p>
        </div>
    </Section>
    <Section index={4} title="Certificações">
        <div class="markdown">
            <p>
                Entendo que, na área da tecnologia da informação, a constante dedicação aos estudos e ao aprendizado de novas tecnologias e práticas desempenha um papel fundamental na formação de um bom profissional. Abaixo estão listadas certificações que obti durante minha carreira profissional.
            </p>
            <ul class="mt-8 flex flex-col gap-y-8">
                {#each [
                    {
                        name: "DevOps & Agile Culture",
                        institution: "FIAP",
                        certification_date: "2024/02/01",
                        description: "Introdução a cultura DevOps e suas principais práticas e ferramentas que ajudam as organizações a inovarem mais rapidamente por meio da automação e da simplificação dos processos de desenvolvimento de software e gerenciamento de infraestrutura.",
                    },
                    //{
                    //    name: "",
                    //    institution: "",
                    //    certification_date: "",
                    //    description: "",
                    //},
                ] as item}
                    <li>
                        <h3>{item.name}</h3>
                        <h4>{item.institution} <span class="select-none">|</span> {new Date(item.certification_date).toLocaleString("default", { month: "long" })}/{new Date(item.certification_date).getFullYear()}</h4>
                        <Markdown md={item.description} />
                    </li>
                {/each}
            </ul>
        </div>
    </Section>
    <Section index={5} title="Projetos" reverse>
        <div class="markdown">
            <p>
                Tenho me engajado constantemente no desenvolvimento de alguns projetos pessoais open source através de meu GitHub.
            </p>
            <ul class="mt-8 flex flex-col gap-y-8">
                {#each [
                    {
                        title: "Gleam WebAssembly Runtime (GWR)",
                        date: "2024/08/11",
                        tags: ["Erlang", "Gleam", "WebAssembly"],
                        text: "Runtime WebAssembly em fase experimental escrito em Gleam para o runtime BEAM (Erlang, Elixir, Gleam, etc). Criado como uma opção de interoperabilidade alternativa aos NIFs tradicionais do BEAM, o GWR busca possibilitar a execução segura de código escrito em outras linguagens de programação como C, C++, Rust e Zig numa máquina virtual que implementa as versões 1 e 2 da especificação WebAssembly. Há ainda a possibilidade do projeto futuramente implementar as APIs da especificação WebAssembly System Interface (WASI).",
                        github_url: "https://github.com/BrendoCosta/gwr",
                    },
                    {
                        title: "GLEB128",
                        date: "2024/07/19",
                        tags: ["Erlang", "Gleam", "JavaScript"],
                        text: "GLEB128 é uma pequena biblioteca escrita em Gleam que fornece funções para codificação e decodificação de números inteiros no formato LEB128 (Little Endian Base 128). LEB128 é um método de compressão de comprimento variável utilizado para armazenar números inteiros arbitrariamente grandes em um pequeno número de bytes. Casos de uso notáveis para LEB128 estão no formato de arquivo de depuração DWARF e no formato binário do WebAssembly. A biblioteca suporta tanto o runtime BEAM do Erlang quanto runtimes JavaScript como Node.js, Deno e Bun.",
                        github_url: "https://github.com/BrendoCosta/gleb128",
                    },
                    {
                        title: "ECS 2D Game Engine",
                        date: "2024/01/13",
                        tags: ["C++", "SDL 2", "Entity–Component–System"],
                        text: "Um motor de jogo 2D escrito em C++ utilizando o framework SDL (Simple DirectMedia Layer) 2.0. O motor utiliza o padrão de arquitetura de software Entity–Component–System (ECS). Desenvolvido tendo como referência as aulas do curso [COMP 4300 - Intro to Game Programming](https://www.youtube.com/watch?v=S7lXSihz0ac&list=PL_xRyXins848nDj2v-TJYahzvs-XW9sVV&pp=iAQB), ministrada em 2022 pelo professor David Churchill da Memorial University.",
                        github_url: "https://github.com/BrendoCosta/ecs-2d-game-engine",
                    },
                    {
                        title: "C# Windows Kernel Driver",
                        date: "2023/10/18",
                        tags: ["C#", ".NET", "Windows", "Kernel"],
                        text: "Demonstração de um simples driver de kernel para o Microsoft Windows escrito em C#, compilado nativamente com o auxílio do utilitário bflat.",
                        github_url: "https://github.com/BrendoCosta/csharp-windows-kernel-driver",
                    },
                    {
                        title: "Dodoco Launcher",
                        date: "2023/05/06",
                        tags: ["C#", "C", "C++", ".NET", "Svelte", "TypeScript", "Tailwind"],
                        text: "Um launcher que porta para o Linux um popular jogo RPG da atualidade. A aplicação permite que o jogo seja instalado, atualizado, configurado e executado em sistemas Linux com facilidade. A infraestrutura de rede e configuração da aplicação foi escrita em C# para o .NET, sua infraestrutura de suporte a execução do jogo foi escrita em C e C++ e por fim seu front end foi escrito em TypeScript e desenvolvido com o framework Svelte e Tailwind.",
                        github_url: "https://github.com/BrendoCosta/dodoco-launcher",
                    },
                    {
                        title: "WebSockets Chat",
                        date: "2022/05/25",
                        tags: ["JavaScript", "Node.js", "React", "WebSockets", "WireShark"],
                        text: "Um chat para múltiplos usuários comunicando-se simultaneamente escrito em JavaScript para o Node.js, utilizando a API Web para o protocolo RFC 6455/WebSocket como uma alternativa de menor latência de comunicação em comparação ao HTTP. Desenvolvemos um front end utilizando o framework React. Por fim, através de uma palestra em aula, detalhamos o funcionamento do protocolo a nível de transporte TCP/IP utilizando o WireShark. A aplicação desenvolvida para a disciplina TCC00228 - Redes de Computadores II para Sistemas de Informação - Turma A1 - 2022.1 - ministrada pelo Professor Flavio Luiz Seixas.",
                        github_url: "https://github.com/BrendoCosta/redesIITrab",
                    },
                    //{
                    //    title: "",
                    //    date: "1970/01/01",
                    //    tags: [],
                    //    text: "",
                    //    github_url: "",
                    //},
                ].sort((a, b) => (new Date(a.date).getTime() - new Date(b.date).getTime())).reverse() as item}
                    <li>
                        <h3>{item.title}</h3>
                        <h4>{new Date(item.date).getFullYear()} <span class="select-none">|</span> {item.tags.sort((a, b) => (a.toLowerCase().localeCompare(b.toLowerCase()))).join("・")}</h4>
                        <Markdown md={item.text} />
                        <a class="button-link mt-2" href="{item.github_url}" target="_blank">
                            <span class="icon-[simple-icons--github] align-sub"></span> GitHub
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </Section>
</main>
<footer class="bg-zinc-900 p-8 md:p-52 text-neutral-500 flex flex-col gap-y-8">
    <div class="flex flex-col gap-y-8">
        <h2 id="Siga-me" class="text-4xl uppercase font-display">Siga-me</h2>
        <ul class="flex flex-col gap-y-4">
            {#each [
                { text: "brendo-costa-439964221", url: "https://www.linkedin.com/in/brendo-costa-439964221/", icon: "icon-[bxl--linkedin-square]" },
                { text: "BrendoCosta", url: "https://github.com/BrendoCosta/", icon: "icon-[bxl--github]" },
                { text: "brendocosta@id.uff.br", url: "mailto:brendocosta@id.uff.br", icon: "icon-[bxl--gmail]" },
                //{ text: "", url: "", icon: "" },
            ] as item}
                <li>
                    <a class="flex flex-row justify-start items-center gap-x-2 transition-colors hover:text-neutral-300" href="{ item.url }" target="_blank">
                        <span class="{ item.icon } text-3xl"></span>
                        <span>{ item.text }</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="flex flex-col">
        <span>Copyright © 2024 Brendo Costa</span>
        <span>Site construído com <span class="icon-[simple-icons--svelte] align-sub"></span> Svelte + SvelteKit</span>
    </div>
</footer>
<style lang="postcss">
    .markdown :global(p)
    {
        @apply font-sans font-normal text-xl text-justify align-middle;
    }
    .markdown :global(h3)
    {
        @apply text-4xl uppercase font-display align-middle;
    }
    .markdown :global(h4)
    {
        @apply text-2xl uppercase font-display align-middle;
    }
    .markdown :global(.button-link)
    {
        @apply inline-block border-2 border-zinc-900 bg-transparent text-zinc-900 text-center px-6 py-2 transition-colors text-lg
        hover:bg-zinc-900 hover:text-neutral-300
        focus:bg-zinc-900 focus:text-neutral-500;
    }
    .markdown :global(a:not(.button-link))
    {
        @apply font-bold underline transition-colors hover:text-neutral-300;
    }
</style>
