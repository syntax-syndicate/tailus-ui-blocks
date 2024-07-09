import { useState, useEffect } from 'react';
import Button from '@tailus-ui/Button';
import { Moon, Sun } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const ThemeSwitcher = ({ size = 'md' }: { size?: 'md' | 'sm' | 'xs' }) => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });

    useEffect(() => {
        setDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('color-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const handleThemeToggle = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <Button.Root onClick={handleThemeToggle} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} variant="ghost" intent="gray" size={size} className="relative">
            <Button.Icon type="only" size={size} className="-rotate-180 scale-150 opacity-0 duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100">
                <Sun />
            </Button.Icon>
            <Button.Icon type="only" size={size} className="absolute inset-0 duration-300 dark:rotate-180 dark:scale-0 dark:opacity-0">
                <Moon />
            </Button.Icon>
        </Button.Root>
    );
};

export default ThemeSwitcher;

export const BlockThemeSwitcher = ({ size = 'md', id }: { size?: 'md' | 'sm' | 'xs'; id: string }) => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const iframe = document.querySelector(`#${id}`) as HTMLIFrameElement;
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
                iframeDoc.documentElement.classList.toggle('dark', darkMode);
            }
        } catch (e) {
            console.error('Could not change theme in iframe:', e);
        }
    }, [darkMode]);

    const handleThemeToggle = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <Button.Root onClick={handleThemeToggle} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} variant="ghost" intent="gray" size={size} className="relative">
            <Button.Icon type="only" size={size} className={twMerge('-rotate-180 scale-[2] opacity-0 duration-300', darkMode && 'rotate-0 scale-100 opacity-100')}>
                <Sun />
            </Button.Icon>
            <Button.Icon type="only" size={size} className={twMerge('absolute inset-0 duration-300', darkMode && 'rotate-180 scale-0 opacity-0')}>
                <Moon />
            </Button.Icon>
        </Button.Root>
    );
};
