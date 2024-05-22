import accessToken from "../../assets/Access_Token.jpg";
import refreshToken from "../../assets/Refresh_token.jpg";
import expressJs from "../../assets/ExpressJs.jpg";
import nestJs from "../../assets/nest-js-logo.jpg";
import { Helmet } from "react-helmet-async";
const Blogs = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Job Nest || Blogs</title>
      </Helmet>
      <div className="space-y-3 my-5">
        <h1 className="text-center text-4xl font-bold ">Access and Refresh Tokens</h1>
        <p className="text-center max-w-4xl mx-auto ">
          Access tokens and refresh tokens are used in authentication and authorization mechanisms,
          particularly in OAuth 2.0 and OpenID Connect frameworks. They help manage user sessions
          securely in web and mobile applications.
        </p>
      </div>
      <hr />
      <div className="my-5 space-y-3">
        <h1 className="text-3xl font-bold">Access Token</h1>
        <p>
          An access token is a short-lived token that allows the client to access specific resources
          or services on behalf of the user. It usually contains information like user ID, token
          expiry time, and scopes (permissions).
        </p>
        <img className="h-[60vh] w-full object-cover object-center" src={accessToken} />
      </div>
      <div className="my-5 space-y-3">
        <h1 className="text-3xl font-bold">How it works:</h1>
        <ol className="space-y-3 list-decimal list-inside">
          <li>
            <b>User Authentication:</b> The user authenticates and consents to the application
            accessing their resources.
          </li>
          <li>
            <b>Token Issuance:</b> The authorization server issues an access token to the client.
          </li>
          <li>
            <b>Resource Access:</b> The client uses the access token to make requests to the
            resource server (API). The resource server validates the token and, if valid, processes
            the request.
          </li>
          <li>
            <b>Expiration:</b> Access tokens have a short lifespan (usually minutes to hours) to
            limit the risk of misuse if stolen.
          </li>
        </ol>
      </div>
      <div className="my-5 space-y-3">
        <h1 className="text-3xl font-bold">Refresh Token</h1>
        <p>
          A refresh token is a long-lived token that allows the client to obtain a new access token
          once the current one expires, without requiring the user to re-authenticate.
        </p>
        <img className="h-[60vh] w-full object-cover object-center" src={refreshToken} />
      </div>
      <div className="my-5 space-y-3">
        <h1 className="text-3xl font-bold">How it works:</h1>
        <ol className="space-y-3 list-decimal list-inside">
          <li>
            <b>Token Issuance:</b> Along with the access token, the authorization server issues a
            refresh token to the client.
          </li>
          <li>
            <b>Token Refresh:</b> When the access token expires, the client uses the refresh token
            to request a new access token from the authorization server.
          </li>
          <li>
            <b>Rotation (Optional):</b> Sometimes, a new refresh token is issued along with the new
            access token, a practice known as refresh token rotation.
          </li>
          <li>
            <b>Revocation:</b> Refresh tokens can be explicitly revoked, invalidating the ability to
            obtain new access tokens.
          </li>
        </ol>
      </div>
      <div className="my-5 space-y-3">
        <h1 className="text-3xl font-bold">Storing Tokens</h1>
        <ol className="space-y-3 list-decimal list-inside">
          <li>
            <b>Session Storage:</b> Suitable for single-page applications (SPAs) since tokens are
            cleared when the browser session ends. Offers some protection against cross-site
            scripting (XSS) attacks.
          </li>
          <li>
            <b>Local Storage:</b> Tokens persist across sessions but are more vulnerable to XSS
            attacks.
          </li>
          <li>
            <b>In-memory Storage:</b> Storing tokens in JavaScript variables. This is the most
            secure against XSS but tokens are lost if the page is refreshed.
          </li>
          <li>
            <b>HTTP-only Cookies:</b> These cookies are not accessible via JavaScript, reducing XSS
            risks. They should be set with the Secure and SameSite attributes to protect against
            cross-site request forgery (CSRF) attacks.
          </li>
        </ol>
      </div>

      {/*  */}
      <div className="space-y-3 my-5">
        <h1 className="text-center text-4xl font-bold ">Express.js and NestJS</h1>
        <p className="text-center max-w-4xl mx-auto ">
          Express.js is a minimal, unopinionated, and flexible framework for Node.js, suitable for a
          wide range of web applications and RESTful APIs. NestJS is a full-featured, opinionated
          framework built with TypeScript, inspired by Angular, and designed for creating scalable
          and maintainable server-side applications with a strong emphasis on modularity and
          dependency injection.
        </p>
      </div>
      <hr />
      <div className="my-5 space-y-3">
        <h1 className="text-3xl font-bold">Express.js</h1>
        <p>
          Express.js is a minimal and flexible Node.js web application framework that provides a
          robust set of features for web and mobile applications. It is designed for building
          single-page, multi-page, and hybrid web applications. Here are some key aspects of
          Express.js
        </p>
        <img className="h-[50vh] w-full object-cover object-center" src={expressJs} />
        <ol className="space-y-3 list-decimal list-inside">
          <li>
            <b>Minimal and Unopinionated:</b> Express.js is lightweight and does not enforce a
            particular way of doing things, giving developers the flexibility to structure their
            applications as they see fit.
          </li>
          <li>
            <b>Middleware:</b> Express.js makes use of middleware functions to handle requests.
            Middleware functions can execute any code, make changes to the request and response
            objects, end the request-response cycle, and call the next middleware function.
          </li>
          <li>
            <b>Routing:</b> Express.js provides a powerful routing mechanism to handle HTTP
            requests. You can define routes to handle different types of HTTP requests (GET, POST,
            PUT, DELETE, etc.) and specify the logic to execute when a route is matched.
          </li>
          <li>
            <b>Templating:</b> While not built-in, Express.js can easily be integrated with
            templating engines like Pug, EJS, or Handlebars to dynamically generate HTML pages based
            on data.
          </li>
          <li>
            <b>REST APIs:</b> Express.js is commonly used to create RESTful APIs. Its
            straightforward approach and middleware capabilities make it ideal for defining
            endpoints and handling various types of requests and responses.
          </li>
          <li>
            <b>Community and Ecosystem:</b> Being one of the most popular Node.js frameworks,
            Express.js has a large community and a rich ecosystem of plugins and extensions that add
            additional functionality.
          </li>
        </ol>
      </div>

      <div className="my-5 space-y-3">
        <h1 className="text-3xl font-bold">NestJS</h1>
        <p>
          NestJS is a progressive Node.js framework for building efficient, reliable, and scalable
          server-side applications. It is built with TypeScript and incorporates many concepts from
          Angular, which makes it a great choice for developers familiar with Angular. Here are some
          key features of NestJS
        </p>
        <img className="h-[50vh] w-full object-cover object-center" src={nestJs} />
        <ol className="space-y-3 list-decimal list-inside">
          <li>
            <b>Modular Architecture:</b> NestJS uses a modular architecture, which encourages the
            separation of concerns and allows developers to organize their code into modules. Each
            module can contain controllers, providers (services), and other components.
          </li>
          <li>
            <b>TypeScript:</b> Written in TypeScript, NestJS leverages the benefits of static
            typing, making the development process more robust and the code easier to maintain.
          </li>
          <li>
            <b>Decorators and Metadata:</b> NestJS uses decorators extensively to provide metadata
            about classes and their members. This approach is similar to how Angular works and helps
            in creating a declarative style of programming.
          </li>
          <li>
            <b>Dependency Injection:</b> NestJS has a built-in dependency injection system that
            makes it easy to manage and inject dependencies. This leads to more modular, testable,
            and maintainable code.
          </li>
          <li>
            <b>Microservices:</b> NestJS has built-in support for building microservices, allowing
            developers to create scalable, distributed systems. It supports a variety of transport
            layers like HTTP, WebSockets, gRPC, and more.
          </li>
          <li>
            <b>GraphQL:</b> NestJS provides excellent support for GraphQL, making it easy to
            integrate GraphQL APIs. It offers tools for building both code-first and schema-first
            GraphQL applications.
          </li>
          <li>
            <b>Testing:</b> NestJS includes tools and utilities to facilitate unit testing and
            end-to-end testing, ensuring that applications are well-tested and reliable.
          </li>
          <li>
            <b>Community and Ecosystem:</b> NestJS has a growing community and a comprehensive set
            of documentation and tutorials. It also integrates well with various third-party
            libraries and services.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Blogs;
