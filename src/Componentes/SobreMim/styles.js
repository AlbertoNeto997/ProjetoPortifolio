import styled from "styled-components";

export const SobreMimContainer = styled.body`
  height: 700px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(19, 21, 79, 1) 100%
  );

  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
    height: 400px;
    border-radius: 200px;
  }

  div {
    margin-right: 8%;
    margin-left: 8%;
    margin-top: 8%;
    margin-bottom: 10%;
  }
  h1 {
    text-decoration: none;
    color: white;
    font-size: 45px;
    margin-right: 0px;
    margin-left: 250px;
    margin-top: 20px;

    text-align: center;
    color: yellow;
  }

  h2 {
    text-decoration: none;
    color: white;
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
  }
  p {
    color: white;
    font-size: 20px;
    text-align: justify;
  }
  a {
    color: turquoise;
    text-decoration: none;
  }

.buttons{
  display: flex;
  align-items: center;
  justify-content: center;

}
`;

export const divAcv = styled.main`
  width: auto;
  max-width: 200px;
  min-width: 5px;
  border: solid 1px #dfa70c;
  display: inline-block;
  align-items: center;
  justify-content: center;
  color: #eeeeee;
  background-color: transparent;
  border-radius: 20px;
  font-size: 12px;
  padding: 5px 20px;
  margin: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover {
    p {
      color: black;
    }
    color: black;
    border: solid 1px #eeeeee;
    background-color: beige;
  }
`;
