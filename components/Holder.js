import React, { useState } from 'react';
import Image from 'next/image';
import BackgroundHolder from './BackgroundHolder';
import Hprogress from './Hprogress';
import Container from './Container'

import clickSound from '../public/sounds/click_effect.mp3';
import homeSound from '../public/sounds/deploy.mp3';
import connectSound from '../public/sounds/deploy.mp3'


export default function Holder() {

    const currentSupply = 2555;
    const totalSupply = 5555;

    const [count, setCount] = useState(3);

    const handleLLeftClick = () => {
        setCount((prevCount) => prevCount - 1);
        const leftBtn = document.querySelector('.leftBtn');
        leftBtn.classList.add('leftBtn-clicked');
        const clickAudio = new Audio(clickSound);
        clickAudio.play();
        setTimeout(() => {
            leftBtn.classList.remove('leftBtn-clicked');
        }, 500);
    };

    const handleRBtnClick = () => {
        setCount((prevCount) => prevCount + 1);
        const rightBtn = document.querySelector('.rightBtn');
        rightBtn.classList.add('rightBtn-clicked');
        const clickAudio = new Audio(clickSound);
        clickAudio.play();
        setTimeout(() => {
            rightBtn.classList.remove('rightBtn-clicked');
        }, 500);
    };

    const handleHolderStartClick = () => {
        const HolderstartBtn = document.querySelector('.HolderstartBtn');
        HolderstartBtn.classList.add('HolderstartBtn-clicked');
        const clickAudio = new Audio(clickSound);
        clickAudio.play();
        setTimeout(() => {
            HolderstartBtn.classList.remove('HolderstartBtn-clicked');
        }, 500);
    };

    const handleLRightClick = () => {
        const righRtBtn = document.querySelector('.righRtBtn');
        righRtBtn.classList.add('righRtBtn-clicked');
        const clickAudio = new Audio(clickSound);
        clickAudio.play();
        setTimeout(() => {
            righRtBtn.classList.remove('righRtBtn-clicked');
        }, 500);
    };

    const handleRRightBtnClick = () => {
        const rightLBtn = document.querySelector('.rightLBtn');
        rightLBtn.classList.add('rightLBtn-clicked');
        const clickAudio = new Audio(clickSound);
        clickAudio.play();
        setTimeout(() => {
            rightLBtn.classList.remove('rightLBtn-clicked');
        }, 500);
    };

    const handleOpenClick = () => {
        const osBtn = document.querySelector('.open-btn');
        osBtn.classList.add('open-clicked');
        const clickAudio = new Audio(clickSound);
        clickAudio.play();
        setTimeout(() => {
            osBtn.classList.remove('open-clicked');
        }, 500);
    };

    // const handleHomeClick = () => {
    //     const clickAudio = new Audio(homeSound);
    //     clickAudio.play();
    // }
    // const handleConnectClick = () => {
    //     const clickAudio = new Audio(connectSound);
    //     clickAudio.play();
    // }

    //images hover//
    //1



    return (
        <>

            <div className="public-main">
                <Container>
                    {/* webdapp background layers */}
                    <BackgroundHolder />

                    {/* Button group */}
                    <div className="public-buttons">

                        <button className="wallet-connect">Connect</button>

                        <div className="holder-leftBtns">

                            <button
                                className="leftBtn"
                                onClick={handleLLeftClick}

                            />

                            <button className="rightBtn" 
                                    onClick={handleRBtnClick} 
                            />

                        </div>

                        <div className="holder-start">

                            <button className="HolderstartBtn" onClick={handleHolderStartClick} />

                        </div>

                        <div className="holder-rightBtns">

                            <button className="righRtBtn" onClick={handleLRightClick} />

                            <button className="rightLBtn" onClick={handleRRightBtnClick} />

                        </div>


                        <button className="open-btn" onClick={handleOpenClick} />

                        <button className="public-home"/>

                        <div className="holders-progress">
                            <Hprogress current={currentSupply} total={totalSupply} />
                        </div>
                    </div>

                    {/*screens*/}
                    <div className="public-screen">

                        <div className="screen-left">
                            <video loop autoPlay muted>
                                <source src="/assets/md-video.webm" type="video/webm" />
                            </video>

                        </div>

                        <div className="screen-right">

                            <video loop autoPlay muted>
                                <source src="/assets/right.webm" type="video/webm" />
                            </video>

                        </div>

                    </div>

                    <div className="sticky-notes">

                        <div>
                            <Image className="sticky1" src="/assets/notes/step1.png" layout="fill" objectFit="containe" alt="step one" />
                        </div>

                        <div>
                            <Image className="sticky2" src="/assets/notes/step2.png" layout="fill" objectFit="containe" alt="step two" />
                        </div>

                        <div>
                            <Image className="sticky3" src="/assets/notes/step3.png" layout="fill" objectFit="containe" alt="step three" />
                        </div>

                        <div>
                            <Image className="sticky4" src="/assets/notes/step4.png" layout="fill" objectFit="containe" alt="step four" />
                        </div>

                    </div>
                </Container>
            </div>

        </>
    )
}
