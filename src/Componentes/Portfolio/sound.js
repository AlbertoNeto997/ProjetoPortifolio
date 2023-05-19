import React from "react";
import BlogFoto from "../../assets/sound.png";
import styled from "styled-components";

export default function Sound() {
  const SoundImage = styled.nav`
    transition: 0.5s;
    img:hover {
      transform: scale(1.14);
      transition: 0.5s;
    }
    img {
      width: 450px;
      height: 250px;
      border-radius: 10px;

      @media (max-width: 1000px){
        scale: 1.2;
        margin: 20px;
      }
    }
  `;

  return (
    <SoundImage>
      <img src={BlogFoto} alt="foto-sound-player" />
    </SoundImage>
  );
}
