import styled from 'styled-components';

export const CropImageWrapper = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  height: 100vh;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

export const Section = styled.section`
  width: 550px;
  position: absolute;
  background: white;
  top: 30%;
  right: 35%;
  height: 250px;
  height: fit-content;

  .ReactCrop {
    margin: 35px 35px 3px 35px;
    max-width: 350px;
    height: fit-content;

    .ReactCrop__crop-selection {
      border-radius: 50%;
    }
  }
`;

export const ReactCropPreview = styled.article`
  height: fit-content;
  min-height: 100px;
  min-width: 100px;
  align-self: flex-end;
  justify-content: center;
`;

export const Canvas = styled.canvas`
  align-self: flex-end;
  min-width: 100px;
  min-height: 100px;
  max-width: 100px;
  max-height: 100px;
  border: 2px solid #5e97f3;
  padding: 5px;
`;

export const Article = styled.article`
  height: fit-content;
  display: flex;
  place-self: flex-end;
`;
export const CropImageText = styled.span`
  display: block;
  text-align: center;
  margin: 25px 0;
`;

export const CropButton = styled.button`
  display: block;
  margin: 25px auto;
  background: #5e97f3;
  height: 40px;
  width: 100px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
`;
