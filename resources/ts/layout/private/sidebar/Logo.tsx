/* eslint-disable @next/next/link-passhref */
import {Link} from 'react-router-dom';
import React from 'react';

const Logo = () => {
    return (
      <Link to="/" >
        <span className="inline-flex items-center justify-center h-20 w-full bg-purple-600 hover:bg-purple-500 focus:bg-purple-500 cursor-pointer">
          <svg fill="none" viewBox="0 0 64 64" className="h-12 w-14">
            <title>Company logo</title>
            <path d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z" fill="#fff" />
          </svg>
        </span>
      </Link>
    );
};

export default Logo;