import React, { useState } from 'react';
import { Button } from 'primereact/button';

const Home = () => {

    const [speed] = useState<number>(10)
    const [spin, setSpin] = useState<boolean>(false)

    return (
        <div className="card mb-0">
            <p className='font-bold uppercase text-lg'>Roulette</p>
            <Button label='Start' onClick={()=>setSpin(true)}></Button>
            <Button label='Stop' onClick={()=>setSpin(false)}></Button>
            <div id="container">
                <div className="photobanner" style={{
                    // @ts-ignore
                    '--time': `${speed}s`, animationPlayState: `${spin ? 'running': 'paused'}`
                    }}>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                    <img src="/layout/images/silver-coin.svg" alt=""/>
                    <img src="/layout/images/black-coin.svg" alt=""/>
                    <img src="/layout/images/gold-coin.svg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Home;