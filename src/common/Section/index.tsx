import { ReactNode } from "react";
import { Wrapper, Title, Header, BodyWrapper } from "./styled";

interface SectionProps {
  title: ReactNode,
  body: ReactNode,
  extraHeaderContent?: ReactNode,
  getTasks?: ReactNode
}

const Section = ({ title, body, extraHeaderContent, getTasks }: SectionProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        {getTasks}
        {extraHeaderContent}
      </Header>
      <BodyWrapper>{body}</BodyWrapper>
    </Wrapper>
  );
};

export default Section;
