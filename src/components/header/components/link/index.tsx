import { Link, LinkProps } from "react-router-dom";

interface PropsLinkNavigation extends LinkProps {}

export function LinkNavigation({ ...props }: PropsLinkNavigation) {
  return (
    <li className="rotate-90">
      <Link {...props} />
    </li>
  );
}
