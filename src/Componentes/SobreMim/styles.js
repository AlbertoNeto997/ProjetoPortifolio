import styled from "styled-components";

export const SobreMimContainer = styled.body`
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

  @media (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  img {
    width: 400px;
    height: 400px;
    border-radius: 200px;

    @media (max-width: 1000px) {
      width: 500px;
      height: 500px;
      border-radius: 250px;
      margin-top: 20px;
    }
  }

  div {
    margin-right: 9%;
    margin-left: 9%;
    margin-top: 8%;
    margin-bottom: 10%;

    @media (max-width: 1000px) {
      margin: 15px 30px;
    }
  }

  h2 {
    text-decoration: none;
    color: white;
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 1000px) {
          font-size: 80px;
        }
  }

  p {
    color: white;
    font-size: 22px;
    text-align: justify;

    @media (max-width: 1000px) {
          font-size: 60px;
          margin: 40px;
        }
    
  }

  a {
    color: turquoise;
    text-decoration: none;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;

      p{
        @media (max-width: 1000px) {
          font-size: 40px;
          margin: 10px;
          text-align: center;
        }
      }
  }
`;

export const divAcv = styled.main`
  width: 280px;
  border: solid 1px #dfa70c;
  border-radius: 50px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  color: #eeeeee;
  background-color: transparent;
  font-size: 12px;
  padding: 5px 20px;
  margin: 5px;
  margin-bottom: 60px;
  margin-top: 20px;
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
