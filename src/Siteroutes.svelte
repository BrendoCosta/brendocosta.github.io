<script>

    // Routing

    import { Route, router } from 'tinro';
    router.mode.hash();

    // Pages

    import Inicio from "./pages/inicio.svx";
    import Sobre from "./pages/sobre.svx";
    import Posts from "./pages/posts.svx";
    import Fotos from "./pages/fotos.svx";
    import Contato from "./pages/contato.svx";

    // Posts

    import Primeiro_post from "./posts/primeiro-post.svx";

</script>

<!-- Pages --->

<Route path="/"><Inicio/></Route>
<Route path="/sobre"><Sobre/></Route>
<Route path="/posts"><Posts/></Route>
<Route path="/fotos"><Fotos/></Route>
<Route path="/contato"><Contato/></Route>

<!-- Posts --->

<Route path="/posts/*">
    <Route path="/primeiro-post"><Primeiro_post/></Route>
</Route>
