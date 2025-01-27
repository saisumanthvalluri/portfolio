import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
    children,
    size,
    rotation,
    orbitSpeed,
    orbitRotate = false,
    spinSpeed,
    spin = false,
}: PropsWithChildren<{
    size: number;
    rotation: number;
    orbitSpeed: string;
    orbitRotate: boolean;
    spinSpeed?: string;
    spin?: boolean;
}>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
                className={twMerge(orbitRotate === true && "animate-spin")}
                style={{
                    animationDuration: orbitSpeed,
                }}>
                <div
                    className="flex items-start justify-start"
                    style={{ width: `${size}px`, height: `${size}px`, transform: `rotate(${rotation}deg)` }}>
                    <div className={twMerge(spin === true && "animate-spin")} style={{ animationDuration: spinSpeed }}>
                        <div
                            className="inline-flex"
                            style={{
                                transform: `rotate(${rotation * -1}deg)`,
                            }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroOrbit;
