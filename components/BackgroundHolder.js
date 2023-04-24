import React from 'react';
import Image from 'next/image';


export default function BackgroundHolder() {

    return (
        <>

            <div className="public-bg">

                <div>
                    <Image src="/assets/background.png" layout="fill" objectFit="containe" alt="Image description" />
                </div>

                <div>
                    <Image src="/assets/wires.png" layout="fill" objectFit="containe" alt="Image description" />
                </div>

                <div>
                    <Image src="/assets/pods.png" layout="fill" objectFit="containe" alt="Image description" />
                </div>

                <div>
                    <Image src="/assets/hmachine.png" layout="fill" objectFit="containe" alt="Image description"   />
                </div>

            </div>

            <div className="public-pods">

                <div>
                    <Image src="/assets/allpods.png" layout="fill" objectFit="containe" alt="Image description" />
                </div>

                <div>
                    <Image src="/assets/left-floater.gif" layout="fill" objectFit="containe" alt="Image description" />
                </div>

                <div>
                    <Image src="/assets/right-floater.gif" layout="fill" objectFit="containe" alt="Image description" />
                </div>

            </div>

        </>
    )
}