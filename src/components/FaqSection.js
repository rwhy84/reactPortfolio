import React from 'react';
import styled from 'styled-components';
import {StyledAbout} from '../style';
const FaqSection = () => {
    return (
        <StyledFaq >
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do i Start</h4>
                <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi ea aut unde, nemo libero.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>How do i Start</h4>
                <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi ea aut unde, nemo libero.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>How do i Start</h4>
                <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi ea aut unde, nemo libero.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>How do i Start</h4>
                <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi ea aut unde, nemo libero.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </StyledFaq >
    )
}

const StyledFaq = styled(StyledAbout)`
display: block;
span{
    display: block;
}
h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
}

.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}

.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem;
    }
}


`
export default FaqSection;