import React, { useState } from 'react';
import Image from 'next/image';
import Background from './Background';
import Progress from './Progress';
import Container from './Container'

import clickSound from '../public/sounds/click_effect.mp3';
import homeSound from '../public/sounds/deploy.mp3';
import connectSound from '../public/sounds/deploy.mp3'


export default function Public() {

    const currentSupply = 2555;
    const totalSupply = 5555;



    const [count, setCount] = useState(3);

    const handleMinusClick = () => {
        setCount((prevCount) => prevCount - 1);
        const minusBtn = document.querySelector('.minus-btn');
        minusBtn.classList.add('minus-clicked');
        const clickAudio = new Audio(clickSound);
        clickAudio.play();
        setTimeout(() => {
            minusBtn.classList.remove('minus-clicked');
        }, 500);
    };

    const handlePlusClick = () => {
        setCount((prevCount) => prevCount + 1);
        const plusBtn = document.querySelector('.plus-btn');
        plusBtn.classList.add('plus-clicked');
        const clickAudio = new Audio(clickSound);
        clickAudio.play();
        setTimeout(() => {
            plusBtn.classList.remove('plus-clicked');
        }, 500);
    };

    const handleStartClick = () => {
        const startBtn = document.querySelector('.start-btn');
        startBtn.classList.add('start-clicked');
        const clickAudio = new Audio(clickSound);
        clickAudio.play();
        setTimeout(() => {
            startBtn.classList.remove('start-clicked');
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

    const handleHomeClick = () => {
        const clickAudio = new Audio(homeSound);
        clickAudio.play();
    }
    const handleConnectClick = () => {
        const clickAudio = new Audio(connectSound);
        clickAudio.play();
    }

    return (
        <>
            <div className="public-main">
                <Container>
                    {/* webdapp background layers */}
                    <Background />

                    {/* Button group */}
                    <div className="public-buttons">

                        <button className="wallet-connect" onClick={handleConnectClick}>Connect</button>

                        <div className="counter">

                            <button className="minus-btn" onClick={handleMinusClick} />
                            <span>{count}</span>
                            <button className="plus-btn" onClick={handlePlusClick} />

                        </div>

                        <button className="start-btn" onClick={handleStartClick} />

                        <button className="open-btn" onClick={handleOpenClick} />

                        <button className="public-home" onClick={handleHomeClick} />

                        <div className="public-progress">
                            <Progress current={currentSupply} total={totalSupply} />
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

                            <div className="image-melted">
                                <Image className="melted-screen" src="/assets/md3.png" width={150} height={100} objectFit="containe" alt="Image description" />
                            </div>

                            <div className="info-table">
                                <table>

                                    <tbody>
                                        <tr>
                                            <td>Status</td>
                                            <td>Paused</td>
                                        </tr>
                                        <tr>
                                            <td>Network</td>
                                            <td>Ethereum mainnet</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>0ETh</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
