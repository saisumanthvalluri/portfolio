import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
        new SplitType(scope.current, {
            types: "lines,words",
            tagName: "span",
        });
    }, [scope]);

    const entranceAnimation = (delayVal: number) => {
        return animate(
            scope.current.querySelectorAll(".word"),
            {
                transform: "translateY(0)",
            },
            {
                duration: 0.5,
                delay: stagger(delayVal),
            }
        );
    };

    return {
        scope,
        entranceAnimation,
    };
};

export default useTextRevealAnimation;
