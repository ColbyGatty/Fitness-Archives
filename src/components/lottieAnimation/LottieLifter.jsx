"use client";

import dynamic from 'next/dynamic';
import Lifter from "./Lifter.json";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LottieSearch() {
    return (
        <div>
        <Lottie animationData={Lifter} />
        </div>
    );
}