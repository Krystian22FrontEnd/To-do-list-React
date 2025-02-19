import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.mercury};
  margin: 5px 0;
  box-shadow: 3px -3px 10px 1px hsl(0deg 2.77% 80%);
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mercury};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const BodyWrapper = styled.div`
  padding: 20px;
`;
