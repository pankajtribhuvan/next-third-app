THIS PROJECT CONTENT THE EXAMPLES OF :

1. CLIENT COMPONENTS DEMO - 
2. CLIENT COMPONENTS  - FETCH DATA
3. SERVER COMPONENTS  - FETCH DATA

<hr />
4. DYNAMIC ROUTES - Profiles
<br>
    https://example.com/profiles/profile/aarush <br>
    https://example.com/profiles/profile/kabir/ <br>

<hr />
5. NESTED DYNAMIC ROUTES - LIKE FOLLOWING <br>
    https://example.com/profiles/profile/aarush/post/101 <br>
    https://example.com/profiles/profile/aarush/post/102 <br>
    https://example.com/profiles/profile/aarush/post/103 <br>

<hr />
6. DYNAMIC ROUTING IN CLIENT COMPONENT - <br>

    REACT use API - <br>
    // so we can use dynamic routing inside client component <br>
    Example Page : <br>
    app\Profiles\Profile\[user]\posts\[postId]\page.jsx <br>

<hr />
7. How to use URL - string - searchParams <br><br>
    http://localhost:3000/products?category=laptop&price=340000 <br>

    Example  : <br>
    app\products\page.jsx  <br>

<hr />
8. How to use URL - string - useSearchParams - in Client Components <br><br>
    http://localhost:3000/products?category=laptop&price=340000 <br>

    Example  : <br>
    app\products2\page.jsx  <br>

    ------------------- <br>
    URL : http://localhost:3000/Blogs <br>

<hr />
9.  Slug Segment - Here exact routes name are difficult to  remember and maintaing.<br>
    
    http://localhost/blog/technologies/post-11Feb-01<br>
    http://localhost/blog/technologies/post-12Feb-01<br>
    http://localhost/blog/technologies/post-12Feb-02<br>
    <p>
    In Next.js, a slug segment is a key feature of dynamic routing, allowing developers to create user-friendly, SEO-optimized URLs when the exact route names are not known ahead of time. Instead of using generic IDs in the URL (e.g., /posts/123), you can use human-readable identifiers (e.g., /blog/my-awesome-post). 
    </p>
    <p>
    Example :  <br>
    app\Blogs\page.jsx <br>
    app\Blogs\[...slug]\page.jsx <br>
    </p>
    <hr />
    URLS : <br>
    http://localhost:3000/Blogs <br>
    http://localhost:3000/Blogs/Technologies/blog1 <br>
    http://localhost:3000/Blogs/Technologies/blog2 <br>


<hr />
    10. Receipe - We have fetch data from URL in Server Component 

    //This is Dynamic Routing Example - for server component data fetching.<br>
    Here we made simple project <br>
    We have created Dynamic Recipes List with Button -> Dynamic Routes -> Recipes/1 , Recipes/2 etc... <br>
    - app\Recipes\page.jsx
    <br>
    We have create /Recipes/[id]/page.jsx for dynamic route. <br>
    - app\Recipes\[id]\page.jsx <br>
    Here we fetch Id from app/Recipes/01 ,02 so on. <br>
    We use fetch('https://dummyjson.com/recipes/1')  <br>
    for dynamic data fetching from url. <br>
<hr />

11. ServerComp - 

    This is Search Example - for server component data fetching on the basis of url query string.(?id=2)
    <br>
    http://localhost:3000/ServerComp/Recipes/SingleRecipe?id=2

<hr />
12. Difference between :
    Project Link : app\Recipes

    * Dynamic routing : 
    http://localhost:3000/Recipes/1
    http://localhost:3000/Recipes/2
    http://localhost:3000/Recipes/3

    In Receipe/[id]/page.jsx => Dynamic routing
    
    We use  
    const { id } = await props.params;
    it will give id = 1 ,2 ,3
    <hr>
    ==============================
    ==============================

    
    * searchParams : ?id=1&name=Vadapav
    Project Link : app\ServerComp\Recipes

    http://localhost:3000/ServerComp/Recipes/SingleRecipe?id=1
    http://localhost:3000/ServerComp/Recipes/SingleRecipe?id=2

    const obj = await props.searchParams;
    // we are fetch the Id send to URL - it will return obj.
    console.log(obj)  // {id:1,name:"Vadapav"}
    console.log(obj.id) // 1 

    Note : Both prejects are same with different techniques 
<hr />
13. ClientComponent Example Ready using searchParam - data fetching.

    Check following Example : Links are below : <br>
    http://localhost:3000/ClinetComp/Recipes/ <br>
    http://localhost:3000/ClinetComp/Recipes/SingleRecipe?id=1 <br>

<hr />
14. Loading Page - server Components - only

    🔴 loading.js only works for Server Components or route-level suspense — NOT for client-side useEffect fetching. 

    ✅ Solution 1 (Recommended) – Use Server Component Fetching
        app\LoadingDemo\page.jsx
        app\LoadingDemo\loading.jsx
    ✅ Solution 2 – Keep Client Component (Manual Loading State)
        app\LoadingDemo\ClientLoading.jsx
<hr />
15. Random Joke Generator Project on Client Component 

    URL Link : <br>
        http://localhost:3000/ClientComp/Joke-Project <br>
    Repo Link : <br>
        app\ClientComp\Joke-Project\page.jsx

<hr />