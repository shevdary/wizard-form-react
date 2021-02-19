import styled from 'styled-components';

export const UserListWrapper = styled.div`
  width: 970px;
`;

export const FlexTable = styled.article`
  background: ${(props) => props.color};
  width: 970px;
  display: flex;
  flex-flow: row;

  height: ${(props) => props.height};
  justify-content: space-between;

  &.header {
    color: white;
    border-bottom: 15px solid white;
  }

  &.body {
    color: black;
    transition: 0.5s;

    &:nth-of-type(2n) {
      background: white;
    }
    & div:first-of-type {
      display: flex;
    }
  }
  &.body div:first-of-type {
    place-self: center;
  }
  &.body .flex-right {
    margin-left: 15px;
  }
`;

export const Section = styled.section`
  position: relative;
  & article {
    background: ${(props) => (props.count % 2 ? 'white' : '#e7f0ff')};
    transition: 0.5s;
  }
  &.body {
    color: black;
    transition: 0.5s;
    &.slide {
      transform: translate(-80px, 0px);
      transition: 0.5s;
    }
    &.slide button {
      transition: 0.5s;
      left: 100%;
    }

    &:nth-of-type(2n) {
      background: white;
    }
    & div:first-of-type {
      display: flex;
    }
  }
`;

export const FlexCol = styled.div`
  width: calc(970px / 4);
  place-self: center;
  min-width: ${(props) => props.minWidth};
  font-size: 15px;
  &.with-avatar p {
    padding: 0 0 0 70px;
  }

  &.childDisplay {
    display: flex;
    flex: 1 auto;
    justify-content: space-between;
  }
  .flex-button {
    margin-right: 30px;
    button {
      margin: 0 10px;
    }
  }
  .flex-right {
    margin-left: 10px;
    font-size: small;
  }
`;

export const TrHead = styled.tr`
  height: 45px;
  width: 1500%/4;
`;

export const TableWrapper = styled.div`
  width: 970px;
  position: relative;
`;

export const TrBody = styled.div`
  position: relative;
  height: 95px;
  transition: 0.5s;
  display: flex;
  border-top: 15px solid white;

  &:nth-of-type(1) {
    background: white;
  }
  &.slide {
    transform: translate(-80px, 0px);
  }
  .slide td {
    opacity: 40%;
  }
`;

export const ConfirmButton = styled.button`
  display: inline-flex;
  background: transparent;
  position: absolute;
  width: 70px;
  top: 35px;
  border: none;
  font-weight: bold;
  left: 92%;
  z-index: -1;
  color: ${(props) => (props.delete ? '#FF8989' : '#4E86E4')}}
`;

export const EmptyListContainer = styled.div`
  position: relative;
  background: #fafcff;
  height: 475px;
  width: 970px;
`;

export const TextShadow = styled.h1`
  text-align: center;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #9bb0cb;
`;

export const CreateUserButton = styled.button`
  height: 40px;
  margin: ${(props) => (props.margin ? props.margin : '65 0 0 0')};
  padding: 15px;
  border: none;
  color: #ffffff;
  background: #5e97f3;
`;
export const EmptyListArticle = styled.div`
  display: inline-block;
  width: fit-content;
  position: absolute;
  top: 40%;
  left: 40%;
  text-align-last: center;
`;
