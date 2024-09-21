import { EmblaCarouselType } from "embla-carousel";
import { Triangle } from "lucide-react";
import React, { PropsWithChildren, useCallback } from "react";

type UsePrevNextButtonsType = {
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

    return {
        onPrevButtonClick,
        onNextButtonClick,
    };
};

type PropType = PropsWithChildren<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
> & {
    direction: "prev" | "next";
    onClick: () => void;
};

export const CarouselButton: React.FC<PropType> = (props) => {
    const { children, direction, onClick, ...restProps } = props;

    return (
        <button onClick={onClick} {...restProps}>
            {direction === "prev" ? (
                <Triangle
                    color="#AC243F"
                    size="64"
                    className="w-8 md:w-auto rotate-[30deg]"
                />
            ) : (
                <Triangle
                    color="#AC243F"
                    size="64"
                    className="w-8 md:w-auto rotate-90"
                />
            )}
            {children}
        </button>
    );
};
