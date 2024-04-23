"use client";

import dynamic from 'next/dynamic';
import Mail from "./Mail.json";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LottieMail() {
    return (
        <div>
        <Lottie animationData={Mail} />
        </div>
    );
}