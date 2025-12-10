import { Button } from "react-bootstrap";

export default function CommonButton({
  children,
  variant = "primary",
  ...props
}) {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  );
}
