import styled from "styled-components";

const TitulosWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  h3{
    margin-bottom: 1rem;
  }
`;

const InfoList = styled.ul`

  display: flex;
  flex-flow: column nowrap;
  gap: 5rem;

  li{

    display: flex;
    flex-flow: row nowrap;

  }

`;

export { InfoList, TitulosWrapper };