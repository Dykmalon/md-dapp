import React, { useState } from 'react';
import Image from 'next/image';
import Background from './Background';
import Progress from './Progress';

import clickSound from '../public/sounds/click.mp3';
import homeSound from '../public/sounds/deploy.mp3';
import connectSound from '../public/sounds/deploy.mp3'


export default function Public() {
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

                {/* webdapp background layers */}
                <Background />

                {/* Button group */}
                <div className="public-buttons">

                    <button className="wallet-connect" onClick={handleConnectClick}>Connect</button>

                    <div className="counter">
                        <button className="minus-btn" onClick={handleMinusClick}>

                        </button>
                        <span>{count}</span>
                        <button className="plus-btn" onClick={handlePlusClick}>

                        </button>
                    </div>

                    <button className="start-btn" onClick={handleStartClick}>

                    </button>

                    <button className="open-btn" onClick={handleOpenClick}>

                    </button>

                    <button className="public-home" onClick={handleHomeClick}></button>

                    <div className="public-progress">
                    <Progress/>
                    </div>
                </div>

                {/*screens*/}
                <div className="public-screen">

                    <div className="screen-left">
                        <Image src="/assets/test.png" layout="fill" objectFit="containe" alt="Image description" />
                    </div>

                    <div className="screen-right">

                        <div>
                            <Image src="/assets/test.png" width={100} height={100} objectFit="containe" alt="Image description" />
                        </div>

                        <div>
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
            </div>
        </>
    )
}
