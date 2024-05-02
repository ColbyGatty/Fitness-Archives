"use client";

import dynamic from 'next/dynamic';
import Check from "./Check.json";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LottieCheck() {
    return (
        <div>
        <Lottie animationData={Check} />
        </div>
    );
}