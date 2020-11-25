import React from 'react'
import styled from 'styled-components'
import { FaFacebookF , FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {AiOutlineGithub , AiFillHeart} from 'react-icons/ai';
export default function Footer() {
    return (
        <StyledFooter>
            <div className ="general-info">
                <p>Thanks for being here.</p>
                <p>Smile , it’s a good day - “Rohan P.”</p>
                <p>It’s 3 PM in Rohan’s City.</p>
            </div>
            <div className ="social-info">

                    <div className="social-handles">
                    <FaLinkedinIn/>
                    <AiOutlineGithub/>
                    <FaFacebookF/>
                    <FaYoutube/>
                    <GrInstagram/>
                    </div>
                <div>
                Designed & Built with <AiFillHeart/> by Rohan P.
                </div>
                
            </div>
        </StyledFooter>
    )
}


const StyledFooter = styled.footer`
    display:flex;
    justify-content:space-between;
    bottom:0;
    margin: 0 auto;
    min-width: 960;
    font-family: 'Comfortaa', cursive;

    padding: 1.45rem 1.0875rem;


    .general-info{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        p{
            padding:0;
        }
    }
    .social-info{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        .social-handles{
            display:flex;
            justify-content:space-between;
        }
    }    

    
`;