import React from "react";
import { HeadingTwo, Paragraph } from "../UI/FontStyles";
import LinksPlaceholder from "./LinksPlaceholder";

const QuickLinks = () => {
  const links = [
    {
      bgColor: "bg-circle-orange",
      action: "Add new Wallet",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0002 10.97V13.03C22.0002 13.58 21.5602 14.03 21.0002 14.05H19.0402C17.9602 14.05 16.9702 13.26 16.8802 12.18C16.8202 11.55 17.0602 10.96 17.4802 10.55C17.8502 10.17 18.3602 9.94995 18.9202 9.94995H21.0002C21.5602 9.96995 22.0002 10.42 22.0002 10.97Z"
            fill="currentColor"
          />
          <path
            d="M20.47 15.55H19.04C17.14 15.55 15.54 14.12 15.38 12.3C15.29 11.26 15.67 10.22 16.43 9.48C17.07 8.82 17.96 8.45 18.92 8.45H20.47C20.76 8.45 21 8.21 20.97 7.92C20.75 5.49 19.14 3.83 16.75 3.55C16.51 3.51 16.26 3.5 16 3.5H7C6.72 3.5 6.45 3.52 6.19 3.56C3.64 3.88 2 5.78 2 8.5V15.5C2 18.26 4.24 20.5 7 20.5H16C18.8 20.5 20.73 18.75 20.97 16.08C21 15.79 20.76 15.55 20.47 15.55ZM13 9.75H7C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25H13C13.41 8.25 13.75 8.59 13.75 9C13.75 9.41 13.41 9.75 13 9.75Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      bgColor: "bg-circle-green",
      action: "Add new Card",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 7.5499C22 8.2099 21.46 8.7499 20.8 8.7499H3.2C2.54 8.7499 2 8.2099 2 7.5499V7.5399C2 5.2499 3.85 3.3999 6.14 3.3999H17.85C20.14 3.3999 22 5.2599 22 7.5499Z"
            fill="currentColor"
          />
          <path
            d="M2 11.45V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.45C22 10.79 21.46 10.25 20.8 10.25H3.2C2.54 10.25 2 10.79 2 11.45ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      bgColor: "bg-circle-amber",
      action: "Balance Exchange",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2499 8.08008V10.9401L10.2399 10.5901C9.72992 10.4101 9.41992 10.2401 9.41992 9.37008C9.41992 8.66008 9.94992 8.08008 10.5999 8.08008H11.2499Z"
            fill="currentColor"
          />
          <path
            d="M14.58 14.6301C14.58 15.3401 14.05 15.9201 13.4 15.9201H12.75V13.0601L13.76 13.4101C14.27 13.5901 14.58 13.7601 14.58 14.6301Z"
            fill="currentColor"
          />
          <path
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM14.26 12C15.04 12.27 16.08 12.84 16.08 14.63C16.08 16.17 14.88 17.42 13.4 17.42H12.75V18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V17.42H10.89C9.25 17.42 7.92 16.03 7.92 14.33C7.92 13.92 8.25 13.58 8.67 13.58C9.08 13.58 9.42 13.92 9.42 14.33C9.42 15.21 10.08 15.92 10.89 15.92H11.25V12.53L9.74 12C8.96 11.73 7.92 11.16 7.92 9.37C7.92 7.83 9.12 6.58 10.6 6.58H11.25V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V6.58H13.11C14.75 6.58 16.08 7.97 16.08 9.67C16.08 10.08 15.75 10.42 15.33 10.42C14.92 10.42 14.58 10.08 14.58 9.67C14.58 8.79 13.92 8.08 13.11 8.08H12.75V11.47L14.26 12Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      bgColor: "bg-circle-lightGreen",
      action: "Transfer to Account",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.93 17.15C10.93 17.25 10.91 17.34 10.87 17.44C10.79 17.62 10.65 17.77 10.46 17.85C10.37 17.89 10.27 17.91 10.17 17.91C10.07 17.91 9.98 17.89 9.88 17.85C9.79 17.81 9.71 17.76 9.64 17.69L6.6 14.65C6.31 14.36 6.31 13.88 6.6 13.59C6.89 13.3 7.37 13.3 7.66 13.59L9.42 15.35V6.85C9.42 6.44 9.76 6.1 10.17 6.1C10.58 6.1 10.92 6.44 10.92 6.85V17.15H10.93ZM17.39 10.42C17.24 10.57 17.05 10.64 16.86 10.64C16.67 10.64 16.48 10.57 16.33 10.42L14.57 8.66V17.16C14.57 17.57 14.23 17.91 13.82 17.91C13.41 17.91 13.07 17.57 13.07 17.16V6.85C13.07 6.75 13.09 6.66 13.13 6.56C13.21 6.38 13.35 6.23 13.54 6.15C13.72 6.07 13.93 6.07 14.11 6.15C14.2 6.19 14.28 6.24 14.35 6.31L17.39 9.35C17.68 9.65 17.68 10.12 17.39 10.42Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      bgColor: "bg-circle-purple",
      action: "Generate Voucher",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 10.75C22.41 10.75 22.75 10.41 22.75 10V9C22.75 4.59 21.41 3.25 17 3.25H10.75V5.5C10.75 5.91 10.41 6.25 10 6.25C9.59 6.25 9.25 5.91 9.25 5.5V3.25H7C2.59 3.25 1.25 4.59 1.25 9V9.5C1.25 9.91 1.59 10.25 2 10.25C2.96 10.25 3.75 11.04 3.75 12C3.75 12.96 2.96 13.75 2 13.75C1.59 13.75 1.25 14.09 1.25 14.5V15C1.25 19.41 2.59 20.75 7 20.75H9.25V18.5C9.25 18.09 9.59 17.75 10 17.75C10.41 17.75 10.75 18.09 10.75 18.5V20.75H17C21.41 20.75 22.75 19.41 22.75 15C22.75 14.59 22.41 14.25 22 14.25C21.04 14.25 20.25 13.46 20.25 12.5C20.25 11.54 21.04 10.75 22 10.75ZM10.75 14.17C10.75 14.58 10.41 14.92 10 14.92C9.59 14.92 9.25 14.58 9.25 14.17V9.83C9.25 9.42 9.59 9.08 10 9.08C10.41 9.08 10.75 9.42 10.75 9.83V14.17Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      bgColor: "bg-circle-yellow",
      action: "Mobile Money",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM6.25 14.5C6.25 14.91 5.91 15.25 5.5 15.25C5.09 15.25 4.75 14.91 4.75 14.5V9.5C4.75 9.09 5.09 8.75 5.5 8.75C5.91 8.75 6.25 9.09 6.25 9.5V14.5ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15ZM19.25 14.5C19.25 14.91 18.91 15.25 18.5 15.25C18.09 15.25 17.75 14.91 17.75 14.5V9.5C17.75 9.09 18.09 8.75 18.5 8.75C18.91 8.75 19.25 9.09 19.25 9.5V14.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      bgColor: "bg-circle-pink",
      action: "Payment Link",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0703 14.2401C18.7803 14.5301 18.3203 14.5301 18.0403 14.2401C17.7503 13.9501 17.7503 13.4901 18.0403 13.2101C20.0403 11.2101 20.0403 7.9601 18.0403 5.9701C16.0403 3.9801 12.7903 3.9701 10.8003 5.9701C8.81027 7.9701 8.80027 11.2201 10.8003 13.2101C11.0903 13.5001 11.0903 13.9601 10.8003 14.2401C10.5103 14.5301 10.0503 14.5301 9.77027 14.2401C7.20027 11.6701 7.20027 7.4901 9.77027 4.9301C12.3403 2.3701 16.5203 2.3601 19.0803 4.9301C21.6403 7.5001 21.6403 11.6701 19.0703 14.2401Z"
            fill="currentColor"
          />
          <path
            d="M4.92973 9.75998C5.21973 9.46998 5.67973 9.46998 5.95973 9.75998C6.24973 10.05 6.24973 10.51 5.95973 10.79C3.95973 12.79 3.95973 16.04 5.95973 18.03C7.95973 20.02 11.2097 20.03 13.1997 18.03C15.1897 16.03 15.1997 12.78 13.1997 10.79C12.9097 10.5 12.9097 10.04 13.1997 9.75998C13.4897 9.46998 13.9497 9.46998 14.2297 9.75998C16.7997 12.33 16.7997 16.51 14.2297 19.07C11.6597 21.63 7.47973 21.64 4.91973 19.07C2.35973 16.5 2.35973 12.33 4.92973 9.75998Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="flex flex-col mt-10">
      <HeadingTwo>Quick Links</HeadingTwo>
      <Paragraph
        fontSize="text-sm"
        textColor="text-gray-light"
        fontWeight="font-normal"
      >
        Your frequently used actions for easy access
      </Paragraph>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between space-x-2 mt-8">
        {links.map((link) => {
          return (
            <LinksPlaceholder
              bgColor={link.bgColor}
              icon={link.icon}
              action={link.action}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;