import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function LinkButton({
  href,
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  if (href) {
    // Handle the case for <a> elements
    const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
      href,
      className: `group inline-flex items-center gap-2 px-4 py-2 rounded-full
                  bg-purple-100 text-purple-700 
                  hover:border-2 hover:border-purple-700 
                  transition-all duration-300 ease-in-out 
                  ${className}`,
    };
    return (
      <a {...anchorProps}>
        {children}
        <svg
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path
            d="M8.49966 1.01851C8.50988 0.742553 8.29446 0.510563 8.01851 0.500342L3.52159 0.33379C3.24564 0.32357 3.01365 0.538989 3.00343 0.814942C2.99321 1.09089 3.20862 1.32288 3.48458 1.33311L7.48184 1.48115L7.33379 5.47841C7.32357 5.75436 7.53899 5.98635 7.81494 5.99657C8.09089 6.0068 8.32288 5.79138 8.3331 5.51542L8.49966 1.01851ZM1.34023 7.8664L8.34023 1.3664L7.65977 0.633603L0.659774 7.1336L1.34023 7.8664Z"
            fill="currentColor"
          />
        </svg>
      </a>
    );
  } else {
    // Handle the case for <button> elements
    return (
      <button
        {...props}
        className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-purple-100 text-purple-700 
                    hover:border-2 hover:border-purple-700 
                    transition-all duration-300 ease-in-out 
                    ${className}`}
      >
        {children}
        <svg
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path
            d="M8.49966 1.01851C8.50988 0.742553 8.29446 0.510563 8.01851 0.500342L3.52159 0.33379C3.24564 0.32357 3.01365 0.538989 3.00343 0.814942C2.99321 1.09089 3.20862 1.32288 3.48458 1.33311L7.48184 1.48115L7.33379 5.47841C7.32357 5.75436 7.53899 5.98635 7.81494 5.99657C8.09089 6.0068 8.32288 5.79138 8.3331 5.51542L8.49966 1.01851ZM1.34023 7.8664L8.34023 1.3664L7.65977 0.633603L0.659774 7.1336L1.34023 7.8664Z"
            fill="currentColor"
          />
        </svg>
      </button>
    );
  }
}
