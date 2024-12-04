export const SvgComponent = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: "80%",
      height: "80%",
      // margin: "auto",
    }}
    viewBox="0 0 16 16"
    // {...props}
  >
    <path
      fill={color}
      d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm0-1C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"
    />
    <path
      fill={color}
      d="M8 13.2c-2 0-3.8-1.2-4.6-3.1l.9-.4c.6 1.5 2.1 2.4 3.7 2.4s3.1-1 3.7-2.4l.9.4c-.8 2-2.6 3.1-4.6 3.1zM7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM11 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
    />
  </svg>
);
