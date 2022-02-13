<script>
	export let title = undefined;
</script>

<svelte:head>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>BrendoCosta | {title}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rajdhani">

    <style>

        :root {

            --light-color: #69F0AE;
            --dark-color: #000033;

        }

        @font-face {
            font-family: Zector;
            src: url(/assets/fonts/Zector/Zector.otf);
        }

        html, body {

            margin: 0;
            padding: 0;

            font-size: 1.05vw;

        }

        body {

            height: 100vh;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

        }

        * {

            text-decoration: none !important;
            box-sizing: border-box;

        }

        menu {

            height: 6.8rem;
            width: 100%;
            top: 0;
            left: 0;

            position: fixed;

            margin: 0;
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0;
            margin-inline-end: 0;

            padding: 0 6rem 0 6rem;

            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-evenly;
            overflow: hidden;

            background-color: var(--dark-color);
            list-style-type: none;
            z-index: 10;

        }

        menu nav {

            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;

        }

        menu nav a, menu nav a:visited {

            margin-right: 2rem;

            color: white;
            font-family: "Zector";
            font-weight: 700;
            font-size: 1.2rem;

            display: flex;
            flex-direction: column;
            align-items: center;

            opacity: 0.5;

            transition: opacity 300ms ease-in-out;

        }

        menu nav a::after, menu nav a::before {

            content: '';
            width: 0;
            height: 0.1rem;

            margin-top: 0.25rem;

            background: var(--light-color);

            transition: width 300ms ease-in-out;

        }

        menu nav a:hover, menu nav a.active  {

            opacity: 1;

        }

        menu nav a:hover::after, menu nav a.active::after  {

            width: 100%;

        }

        a { text-decoration: none; }

        @keyframes fade {
            0%   { transform: translateY(-5rem); filter: blur(10px); }
            100% { transform: translateY(0); filter: blur(0); }
        }

        section.main-section { margin-top: 6.8rem; }
        /* section.footer-section { margin-top: 6.8rem; } */

        article {

            color: var(--dark-color);

            animation: fade 0.5s ease-in-out;

        }

        article h1, h2, h3, article header time, footer h2 {

            font-family: "Zector";
            text-transform: uppercase;

        }

        article a, article a:visited, footer a, footer a:visited {

            color: var(--light-color);

        }

        article header {

            width: 100%;
            height: 20rem;

            font-family: "Zector";
            font-size: 1.2rem;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: #f4f4f4;
            overflow: hidden;

        }

        article header img {

            width: 100%;

            filter: brightness(0.5) blur(3px);

        }

        article header div {

            position: absolute;
            text-align: center;

        }

        article header div h1 {

            margin: 0 0 1rem 0;

            font-size: 3rem;

        }

        article header div h1 span {

            padding: 0.35rem 0.5rem 0 0.5rem;

            background-color: var(--light-color);

        }

        article header div time {

            font-weight: bold;

        }

        article header div time span {

            padding: 0.25rem 0.5rem 0.25rem 0.5rem;

            background-color: var(--light-color);

        }

        article main {

            padding: 3% 15% 7.5% 15%;
            font-family: "Quicksand";

        }

        article main hr {

            background-color: var(--dark-color);
            height: 0.15rem;
            border: none;
            margin: 4rem auto 0 auto;

        }

        article main h2 {

            font-size: 2rem;
            text-align: center;

            margin: 4rem auto;

        }

        article main a, article main a:visited {

            color: var(--light-color);
            font-weight: bold;

        }

        .wave {

            height: 12vw;
            width: 100%;

            display: inherit;

            overflow: hidden;

        }

        .wave path {

            stroke: none;
            fill: var(--dark-color);

        }

        footer {

            width: 100%;
            height: auto;

            color: white;
            font-family: "Quicksand";
            text-align: center;

            padding: 4.5% 15% 4.5% 15%;

            background-color: var(--dark-color);

        }

        @media (max-width: 1024px) {

            html, body {

                font-size: 4vw;

            }

    		menu nav a {

    			margin-right: 0.8rem;

    		}

            article header {

                font-size: 1rem;

            }

            article header img {

                width: auto;
                height: 100%;

            }

            article header div h1 {

                font-size: 2rem;

            }

            article main {

                padding: 1% 5% 1.5% 5%;

            }

            article main h2 {

                margin: 3rem auto;

            }

    	}

    </style>

</svelte:head>
