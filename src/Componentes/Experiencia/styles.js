import styled from "styled-components";

export const ExperienciaContainer = styled.div`
  background: white;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  a {
    margin: 15px 20px;
    text-align: center;
    font-size: 18px;
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    
    }
  }

  li {
    min-width: 80px;
    min-height: 60px;
    width: 50%px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: white;
    border-style: groove;
    color: gray;
    background: transparent;
    border-radius: 10px;
    font-size: 20px;
    margin-bottom: 25px;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    transition-duration: 0.3s;

    @media (max-width: 1024px){
      width: 90%;
      font-size: 50px;
    }

    &:hover {
      color: black;
      border: solid 3px gray;
      transition-duration: 0, 1s;
      background-color: #0d4e71;

      h3 {
        color: white;
      }
      h5 {
        color: white;
      }
      a {
        color: white;
      }
    }
  }

  h5 {
    padding: 8px;
  }

  h3 {
    text-align: center;
    padding: 8px;
  }
  h2 {
    text-align: center;
    font-size: 45px;
    padding: 5px;
    color: gold;
  }

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;
