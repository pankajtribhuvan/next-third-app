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
9.  Slug Segment - Here exact routes name are difficult to remember and maintaing.<br>
    
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