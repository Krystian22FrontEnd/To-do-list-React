import { Wrapper, Title, Header, BodyWrapper } from "./styled";

const Section = ({ title, body, extraHeaderContent, getTasks }) => {
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
