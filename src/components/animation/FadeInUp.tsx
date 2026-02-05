import { ReactElement } from 'react';
import RevealAnimation from './RevealAnimation';

interface FadeInUpProps {
    children: ReactElement;
    delay?: number;
    duration?: number;
    className?: string; // Added className prop to pass through if needed
}

export const FadeInUp = ({ children, delay = 0, duration = 0.6, className = '' }: FadeInUpProps) => {
    return (
        <RevealAnimation direction="up" delay={delay} duration={duration} className={className}>
            {children as any}
        </RevealAnimation>
    );
};
