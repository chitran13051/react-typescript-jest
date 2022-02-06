import styled from "styled-components";

/* istanbul ignore next */
export const AdContainer = styled.div`
  position: relative;
  > div {
    padding-top: 600px;
  }

  @media (max-width: 767px) {
    > div {
      padding-top: 300px;
      border-radius: 5px;
    }
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
