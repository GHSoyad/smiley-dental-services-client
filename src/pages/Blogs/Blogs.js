import React from 'react';
import { Helmet } from 'react-helmet';
import { FaComment, FaEye, FaUser } from 'react-icons/fa';

const Blogs = () => {
    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_356px)]'>
            <Helmet><title>Blogs - Smiley</title></Helmet>
            <h1 className='text-2xl md:text-3xl font-medium text-center'>My Blogs</h1>
            <div className='flex flex-col my-10 gap-6 md:gap-10'>
                <div className='flex flex-col lg:flex-row gap-0 md:gap-4 ring ring-primary/20 shadow-lg'>
                    <img src="https://i.ibb.co/Jp4T9d2/sql-vs-nosql.jpg" alt="" className='lg:w-1/2 object-cover' />
                    <div className='flex flex-col gap-6 p-6 justify-between lg:w-1/2'>
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-xl md:text-2xl font-medium'>Difference between SQL and NoSQL</h3>
                            <div className='flex gap-3 items-center'>
                                <FaUser className='text-xl'></FaUser>
                                <p className='font-medium'>Golam Hasnain Soyad</p>
                            </div>
                            <p className='text-justify'>
                                The main difference of SQL and NoSQL is that SQL databases are relational whereas NoSQL are non-relational. Relational databases model data as records in rows and tables with logical links between them. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                            </p>
                        </div>
                        <div className='flex items-center gap-10 font-medium'>
                            <div className='flex gap-3 items-center'>
                                <FaEye className='text-xl'></FaEye>
                                <p>35</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <FaComment className='text-xl'></FaComment>
                                <p>15</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-0 md:gap-4 ring ring-primary/20 shadow-lg'>
                    <img src="https://i.ibb.co/mCS101F/jwt.png" alt="" className='lg:w-1/2 object-cover' />
                    <div className='flex flex-col gap-6 p-6 justify-between lg:w-1/2'>
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-xl md:text-2xl font-medium'>What is JWT, and how does it work?</h3>
                            <div className='flex gap-3 items-center'>
                                <FaUser className='text-xl'></FaUser>
                                <p className='font-medium'>Golam Hasnain Soyad</p>
                            </div>
                            <p className='text-justify'>
                                JSON Web Token (JWT) is an open standard for securely transmitting information between client and server as JSON object. JWTare mainly used for authorization and secure information exchange. During authentication, a JWT is returned when the user successfully logs in using their credentials. User can save it locally either in the local storage, session storage, or cookies. After the user is authenticated if they want to access data from the server they need to send JWT with every request to retrieve the data. The server validates the JWT and sends response according to it.
                            </p>
                        </div>
                        <div className='flex items-center gap-10 font-medium'>
                            <div className='flex gap-3 items-center'>
                                <FaEye className='text-xl'></FaEye>
                                <p>36</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <FaComment className='text-xl'></FaComment>
                                <p>13</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-0 md:gap-4 ring ring-primary/20 shadow-lg'>
                    <img src="https://i.ibb.co/SVgj9kM/javascript-vs-node-Js.jpg" alt="" className='lg:w-1/2 object-cover' />
                    <div className='flex flex-col gap-6 p-6 justify-between lg:w-1/2'>
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-xl md:text-2xl font-medium'>What is the difference between javascript and NodeJS?</h3>
                            <div className='flex gap-3 items-center'>
                                <FaUser className='text-xl'></FaUser>
                                <p className='font-medium'>Golam Hasnain Soyad</p>
                            </div>
                            <p className='text-justify'>
                                Javascript is a programming language that is used for writing scripts on the website. Javascript is used in frontend development, it is basically used on the client-side. Javascript can only be run in the browsers. On the other hand, NodeJS is a Javascript runtime environment. Nodejs is used in server-side development, It is mostly used on the server-side. We can run Javascript outside the browser with the help of NodeJS.
                            </p>
                        </div>
                        <div className='flex items-center gap-10 font-medium'>
                            <div className='flex gap-3 items-center'>
                                <FaEye className='text-xl'></FaEye>
                                <p>45</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <FaComment className='text-xl'></FaComment>
                                <p>23</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-0 md:gap-4 ring ring-primary/20 shadow-lg'>
                    <img src="https://i.ibb.co/fdYtw3H/nodejs-server.png" alt="" className='lg:w-1/2 object-cover' />
                    <div className='flex flex-col gap-6 p-6 justify-between lg:w-1/2'>
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-xl md:text-2xl font-medium'>How does NodeJS handle multiple requests at the same time?</h3>
                            <div className='flex gap-3 items-center'>
                                <FaUser className='text-xl'></FaUser>
                                <p className='font-medium'>Golam Hasnain Soyad</p>
                            </div>
                            <p className='text-justify'>
                                NodeJS is built with the concept of event-driven architecture. When NodeJS server receives multiple client requests it places them into EventQueue. Then EventLoop which is an infinite loop is used to receive requests and processes them. When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then it runs asynchronously in the background without blocking the EventLoop and handles multiple incoming requests concurrently.
                            </p>
                        </div>
                        <div className='flex items-center gap-10 font-medium'>
                            <div className='flex gap-3 items-center'>
                                <FaEye className='text-xl'></FaEye>
                                <p>32</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <FaComment className='text-xl'></FaComment>
                                <p>24</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;