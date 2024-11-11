import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledSpan } from "./styled";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section 
      title="Krystian Krupiński" 
      body={<><StyledSpan>Lubię uczyć się nowych rzeczy oraz jestem otwarty na nowe poglądy i idee. <em>Uwielbiam</em> spędzać czas na treningach na siłowni lub w domu. Zagłębiać się w książki z zakresu psychologii.<br/>
       Lubię też sporty drużynowe (zwłaszcza piłkę nożną) oraz filmy, jak chociażby trylogia Władcy Pierścieni.</StyledSpan></>} 
    />
  </Container>
);
