import React from 'react';

const Blog = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            Todays Questions !!
          </h2>
          <p className='text-base text-center text-gray-700 md:text-lg'>
            Here is our some questions about Course related. Assessment, instruction, and practice that motivate every student to mastery.
          </p>
        </div>
      </div>
      <div className='max-w-screen-xl sm:mx-auto '>
        <div className='grid grid-cols-1 px-10 py-5 mx-auto shadow-lg bg-slate-200  gap-16 row-gap-8 lg:grid-cols-1'>
          <div className='space-y-8 '>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              What is cors ??
              </p>
              <p className='text-gray-700'>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources

                <br />
                <br />
                Setting up the Cors: From the server cmd type npm i cors.
              </p>
            </div>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              Why are you using firebase? What other options do you have to implement authentication? ??
              </p>
              <p className='text-gray-700'>
              Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                <br />
                <br />
                Setting up the firebase: npm i firebase 
              </p>
            </div>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              How does the private route work?
              </p>
              <p className='text-gray-700'>
              The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in) <br /> <br />
           
              </p>
            </div>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              What is Node? How does Node work??
              </p>
              <p className='text-gray-700'>
              It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    );
};

export default Blog;