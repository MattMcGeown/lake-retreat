import { forwardRef } from 'react';
import type { ISearchProps } from './types';
import { Box } from '../Box';

const Search = forwardRef<HTMLInputElement, ISearchProps>(
  ({ icon, ...inputProps }, ref) => {
    return (
      <Box>
        <div className="w-1/5 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            className="w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-transparent focus:outline-none focus:border-red-500"
            type="search"
            ref={ref}
            {...inputProps}
          />
        </div>
      </Box>
    );
  }
);

export default Search;

Search.displayName = 'Search';
