import React from 'react';

const Blog = () => {
  return (
    <div className='container pb-5'>
      <div className='border border-2 p-4 rounded shadow mb-5'>
        <div className='fw-semibold mb-2 fs-4'>1. What is cors?</div>
        <div className='border-bottom border-2 border-muted mb-4'></div>
        <div className='text-secondary'>
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. <br />

        An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json. <br />

        For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers. <br />
        The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.
        </div>
      </div>
      <div className='border border-2 p-4 rounded shadow mb-5'>
        <div className='fw-semibold mb-2 fs-4'>2. Why are you using firebase? What other options do you have to implement authentication?</div>
        <div className='border-bottom border-2 border-muted mb-4'></div>
        <div className='text-secondary'>
        Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. <br />

        An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json. <br />

        While just one facet of cybersecurity, authentication is the first line of defense. It is the process of determining whether a user is who they say they are. Not to be confused with the step it precedes—authorization—authentication is purely the means of confirming digital identification, so users have the level of permissions to access or perform a task they are trying to do. <br />

        There are many authentication technologies, ranging from passwords to fingerprints, to confirm the identity of a user before allowing access. Doing so adds a layer of protection and prevents security lapses like data breaches. Though, it’s often the combination of different types of authentication that provides secure system reinforcement against possible threats. <br />

        Others option: <br />
        1. Google authentication. <br />
        2. Github authentication. <br />
        3. Facebook authentication. <br />
        4. Twitter authentication. <br />
        5. LinkedIn authentication. <br />
        </div>
      </div>
      <div className='border border-2 p-4 rounded shadow mb-5'>
        <div className='fw-semibold mb-2 fs-4'>3. How does the private route work?</div>
        <div className='border-bottom border-2 border-muted mb-4'></div>
        <div className='text-secondary'>
        CPrivate Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
        The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
        In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start <br />
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). <br />
        Here we have wrapped non authenticated routes with component and authenticated routes with component.
        We have used suspense to add lazy loading to components. 
        Now we have configured Private and Public Routes. If there is no match will be rendered.
        </div>
      </div>
      <div className='border border-2 p-4 rounded shadow mb-5'>
        <div className='fw-semibold mb-2 fs-4'>4. What is Node? How does Node work?</div>
        <div className='border-bottom border-2 border-muted mb-4'></div>
        <div className='text-secondary'>
        Scalability, latency, and throughput are key performance indicators for web servers. Keeping the latency low and the throughput high while scaling up and out is not easy. Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return. <br />

        In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead. <br />

        While spawning threads incurs less memory and CPU overhead than forking processes, it can still be inefficient. The presence of a large number of threads can cause a heavily loaded system to spend precious cycles on thread scheduling and context switching, which adds latency and imposes limits on scalability and throughput. Node.js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire. The callback function can handle requests with non-blocking I/O calls, and if necessary can spawn threads from a pool to execute blocking or CPU-intensive operations and to load-balance across CPU cores. Node’s approach to scaling with callback functions requires less memory to handle more connections than most competitive architectures that scale with threads, including Apache HTTP Server, the various Java application servers, IIS and ASP.NET, and Ruby on Rails. <br />


        Node.js turns out to be quite useful for desktop applications in addition to servers. Also note that Node applications aren’t limited to pure JavaScript. You can use any language that transpiled to JavaScript, for example TypeScript and CoffeeScript. Node.js incorporates the Google Chrome V8 JavaScript engine, which supports ECMAScript 2015 (ES6) syntax without any need for an ES6-to-ES5 transpiler such as Babel. <br />
        </div>
      </div>
    </div>
  );
};

export default Blog;