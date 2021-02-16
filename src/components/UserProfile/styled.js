import styled from 'styled-components';

export const PreviousPage = styled.button`
  background: transparent;
  position: absolute;
  display: flex;
  height: 30px;
  bottom: 0;
  border: 0;
  align-items: center;
  color: #9bb0cb;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 28px;
  top: ${(props) => props.positionTop};
`;

export const TitleWrapper = styled.div`
  width: 970px;
  position: relative;
`;

export const Title = styled.h1`
  margin: 45px 0px;
  text-align: center;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #475666;
`;

export const Main = styled.main`
  width: 970px;
  margin: auto;
`;

export const UserContentWrapper = styled.article`
  background: #e7f0ff;
  display: flex;
  .avatar {
    margin: 35px 54px;
  }
`;

export const EditContainer = styled.div`
  display: grid;
  grid-column-gap: 50px;
  margin-bottom: 40px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 16px;
  grid-template-columns: repeat(2, 120px);
  div:nth-child(-n + 2) {
    color: #475666;
    font-weight: 600;
  }
`;

export const Column = styled.div`
  p {
    margin-bottom: 16px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 115px 300px;
  grid-column-gap: 75px;
  overflow-wrap: break-word;

  p:nth-of-type(2n) {
    font-weight: 400;
  }
`;

export const Link = styled.a`
  width: fit-content;
  color: inherit;
  font-weight: 400;

  :hover {
    color: #2f68c8;
  }
`;
export const EditContainerWrapper = styled.div`
  margin-top: 65px;
`;

export const EditButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
