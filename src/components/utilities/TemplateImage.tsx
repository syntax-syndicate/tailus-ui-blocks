import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const CustomImage: React.FC<ImageProps> = (props) => {
    const [isFullView, setIsFullView] = useState(false);

    const handleClick = () => {
        setIsFullView(!isFullView);
    };

    useEffect(() => {
        if (isFullView) {
            document.body.style.pointerEvents = 'none';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.pointerEvents = 'auto';
            document.body.style.overflow = 'auto';
        }
    }, [isFullView]);

    return (
        <>
            {isFullView && <div className="fixed inset-0 bg-white/75 dark:bg-gray-950/90 z-40 pointer-events-auto" onClick={handleClick}></div>}
            <div className='aspect-[4/3] mt-6'>
                <motion.div
                    layout
                    initial={{ opacity: 0, transform: "perspective(1000px)rotateX(6deg)scale(0.95)" }}
                    whileInView={{ opacity: 1, transform: "perspective(1000px)rotateX(0deg)scale(1)" }}
                    className={twMerge("cursor-zoom-in pointer-events-auto origin-bottom", isFullView && 'px-2 fixed max-h-fit max-w-4xl m-auto inset-0 w-full z-50 cursor-zoom-out lg:px-0')}
                    onClick={handleClick}
                >
                    <img className={twMerge("border shadow-sm shadow-gray-950/5 dark:border-white/5 rounded-[--card-radius] transition-[borderRadius] duration-300", isFullView && "w-full h-auto rounded-2xl")} {...props} loading="lazy" />
                </motion.div>
            </div>
        </>
    )
};

export default CustomImage;