import { Wrapper, Title, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    {body}
  </Wrapper>
);

export default Section;
