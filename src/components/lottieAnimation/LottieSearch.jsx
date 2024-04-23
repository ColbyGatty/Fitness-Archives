"use client";

import dynamic from 'next/dynamic';
import Search from "./Search.json";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LottieSearch() {
    return (
        <div>
        <Lottie animationData={Search} />
        </div>
    );
}