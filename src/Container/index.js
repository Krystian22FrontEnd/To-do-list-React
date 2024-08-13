import styled from "styled-components";

export const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {

  .button {
    margin-bottom: 10px;
  }
}
`;

export default Container;