import React from 'react';

const Blog = () => {
    return (
      <div>
        <section className="dark:text-gray-800 dark:bg-gray-100 rounded-lg">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Question & Answer Blog Section
            </h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
              <div>
                <h3 className="text-xl font-bold">
                  What is JWT, and how does it work?
                </h3>
                <p className="mt-1 text-black font-semibold">
                  JSON Web Token (JWT) is an open standard (RFC 7519) for
                  securely transmitting information between parties as JSON
                  object. It is compact, readable and digitally signed using a
                  private key/ or a public key pair by the Identity
                  Provider(IdP). So the integrity and authenticity of the token
                  can be verified by other parties involved. The purpose of
                  using JWT is not to hide data but to ensure the authenticity
                  of the data. JWT is signed and encoded, not encrypted. JWT is
                  a token based stateless authentication mechanism. Since it is
                  a client-side based stateless session, server doesn't have to
                  completely rely on a datastore(database) to save session
                  information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Difference between SQL and NoSQL
                </h3>
                <p className="mt-1 text-black font-semibold">
                  SQL is the programming language used to interface with
                  relational databases. (Relational databases model data as
                  records in rows and tables with logical links between them).
                  NoSQL is a class of DBMs that are non-relational and generally
                  do not use SQL.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  What is the difference between javascript and NodeJS?
                </h3>
                <p className="mt-1 text-black font-semibold">
                  JavaScript is a simple programming language that can be used
                  with any browser that has the JavaScript Engine installed.
                  Node. js, on the other hand, is an interpreter or execution
                  environment for the JavaScript programming language.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  How does NodeJS handle multiple requests at the same time?
                </h3>
                <p className="mt-1 text-black font-semibold">
                  NodeJS receives multiple client requests and places them into
                  EventQueue. NodeJS is built with the concept of event-driven
                  architecture. NodeJS has its own EventLoop which is an
                  infinite loop that receives requests and processes them.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Blog;