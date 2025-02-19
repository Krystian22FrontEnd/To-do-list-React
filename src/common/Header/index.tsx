import { ReactNode } from "react";
import { Title } from "./styled";

interface HeaderProps {
  title: ReactNode;
}

const Header = ({ title }: HeaderProps) => <Title>{title}</Title>;

export default Header;
