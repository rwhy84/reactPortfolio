import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

import styled from 'styled-components';


import {StyledAbout, StyledDescription, StyledImage} from '../style';
const ServicesSection = () => {
    return (
        <StyledServices>
            <StyledDescription>
                <h2>High <span>quality</span> services</h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>TEST1</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>TEST2</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>TEST3</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>TEST4</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt="home2"/>
            </StyledImage>

        </StyledServices>
    )
}

const StyledServices = styled(StyledAbout)`
h2 {
    padding-bottom: 5rem;

}

p {
    width: 70%;
    padding-top: 2rem 0rem 4rem 0rem;
}
`

const StyledCards = styled.div`
display: flex;
flex-wrap:wrap;
`

const StyledCard = styled.div`
flex-basis: 20rem;
.icon{
    display: flex;
    align-items: center;
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
}
`

export default ServicesSection;