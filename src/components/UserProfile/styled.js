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

export const PageTitle = styled.div`
  width: 970px;
  position: relative;
`;

export const UserListContainer = styled.div`
  width: 970px;
  margin: auto;
`;

export const UserContentWrapper = styled.div`
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

export const Col = styled.div`
  p {
    margin-bottom: 16px;
    width: 260px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 100px 300px;
  grid-column-gap: 75px;
  overflow-wrap: break-word;
  p:nth-of-type(2n) {
    font-weight: 400;
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