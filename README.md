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
16. Suspense : 
    
    URL Link : http://localhost:3000/SuspenseDemo
    Repo Link : 
    app\SuspenseDemo\page.jsx
    app\SuspenseDemo\loading.jsx
    app\SuspenseDemo\ProductList.jsx

    Suspense only works when: 
    A child component is async
    And that child is wrapped inside <Suspense>
    ------------------------------------------------------
    Excellent question 👌 — this is a **core Next.js + React concept**.

    Let’s make it very clear and simple.

    ---

    # 🔵 What is Suspense?

    `Suspense` lets React:

    > ⏳ "Wait for something"
    > 🎭 "Show fallback UI while waiting"
    > ✅ "Render content when ready"

    It prevents blocking the whole UI.

    ---

    # 🎯 Why We Use Suspense?

    Without Suspense:

    * The whole page waits for data
    * User sees blank screen

    With Suspense:

    * Page renders immediately
    * Only slow parts show loading UI
    * Better UX 🚀

    ---

    # 🧠 Where Can Suspense Be Used?

    ## ✅ 1. Server Components (Next.js App Router) — MOST COMMON

    This is the main use case in Next.js 13+.

    Used when:

    * You have async server components
    * You fetch data inside child component

    Example:

    ```jsx
    <Suspense fallback={<Loading />}>
    <ProductList />
    </Suspense>
    ```

    Where `ProductList` is:

    ```jsx
    export default async function ProductList() {
    const data = await fetch(...);
    return <div>...</div>;
    }
    ```

    ✅ This works perfectly in **Server Components**

    ---

    ## ✅ 2. Client Components (Advanced React Usage)

    Used when:

    * Using `React.lazy()`
    * Using `use()` (experimental)
    * Using data libraries like React Query with suspense enabled

    Example:

    ```jsx
    const LazyComponent = React.lazy(() => import("./MyComp"));

    <Suspense fallback={<p>Loading...</p>}>
    <LazyComponent />
    </Suspense>
    ```

    But in Next.js App Router:

    > ⚠️ Suspense is mainly for Server Components

    ---

    # ❌ Where Suspense Does NOT Work

    ```jsx
    'use client'

    useEffect(() => {
    fetch(...)
    })
    ```

    Suspense does NOT work with:

    * `useEffect`
    * Normal client-side fetching
    * State-based loading

    Because Suspense only works when something "suspends rendering".

    ---

    # 🔥 Real-World Use Cases

    | Situation                       | Use Suspense? |
    | ------------------------------- | ------------- |
    | Fetching products list (server) | ✅ YES         |
    | Slow analytics section          | ✅ YES         |
    | Lazy loading a heavy component  | ✅ YES         |
    | Button click fetch              | ❌ NO          |
    | Form submission                 | ❌ NO          |

    ---

    # 🏗 In Next.js App Router

    You have 3 loading methods:

    ### 1️⃣ `loading.js` (Route level)

    * Automatically works
    * For entire page loading

    ### 2️⃣ `<Suspense>` (Component level)

    * Partial loading
    * More control

    ### 3️⃣ Manual loading state (Client)

    * useState + useEffect

    ---

    # 🧠 Simple Rule to Remember

    > 🔹 Server async component → Use Suspense
    > 🔹 Client useEffect fetch → Use loading state
    > 🔹 Route navigation → Use loading.js

    ---

    # 🎯 When Should YOU Use It?

    Since you're learning Server vs Client components:

    👉 Use Suspense when:

    * You want partial streaming
    * You want only part of page loading
    * You're fetching in server component

    ---


<hr />