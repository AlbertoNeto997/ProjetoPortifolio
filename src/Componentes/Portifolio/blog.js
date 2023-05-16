import React from 'react'
import BlogFoto from '../../assets/Blog.png'
import styled from 'styled-components';

export default function Blog ( ){

    const BlogImage = styled.nav`
        transition: 0.5s;
        img:hover{
            transform: scale(1.1);
             transition: 0.5s;
        }
        img{
            width: 450px;
            height:250px;
            border-radius: 10px;
        }
    `;
    
    return(
        <BlogImage>
        <a href="https://desafio-alkabot-alberto.netlify.app/" target="_blank" rel="noreferrer" >
            <img  src={BlogFoto} alt="foto-blog"/>
        </a>  
        </BlogImage>
           
    )
}