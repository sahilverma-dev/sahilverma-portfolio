type Props = React.SVGProps<SVGSVGElement>;

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="75" cy="75" r="75" fill="#E95000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.9244 46.65H128.72C129.531 46.65 130.004 47.5644 129.537 48.2268L119.422 62.55H70.5001C67.5178 62.55 65.1001 64.9676 65.1001 67.95C65.1001 70.9323 67.5178 73.35 70.5001 73.35H111.795L76.4942 123.34C76.0951 123.905 75.2566 123.904 74.859 123.338L57.0287 97.95H75.1502C78.1325 97.95 80.5502 95.5323 80.5502 92.55C80.5502 89.5676 78.1325 87.15 75.1502 87.15H49.4437L22.106 48.2247C21.6406 47.5621 22.1146 46.65 22.9244 46.65Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
