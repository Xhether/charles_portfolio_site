'use client';

import React, { useState, useRef, useEffect } from 'react';

interface ToggleButtonProps {
    initialState?: boolean;
    label?: string;
    content?: string;
    isTop?: boolean;
    isBottom?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ initialState = false, label, content, isTop, isBottom }) => {
    const [isOn, setIsOn] = useState<boolean>(initialState);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsOn(prev => !prev);
        console.log(`Toggle is now ${!isOn ? 'ON' : 'OFF'}`);
    };

    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            containerRef.current.style.setProperty('--content-top', `${rect.height}px`);
        }
    }, [isOn]);

    return (
        <div ref={containerRef} className="relative inline-block" style={{ width: 600 }}>
            <div className="flex flex-col items-center">
                <button
                    className={`border-t-2 border-r-2 border-l-2 h-11 bg-opacity-20 border-stone-500  ${isOn ? 'bg-stone-600 ' : 'bg-stone-800'} ${isBottom ? 'rounded-b-lg border-b-2' : 'rounded-b-none'} ${isTop ? 'rounded-t-lg' : 'rounded-t-none'}`}
                    style={{ width: 500 }}
                    onClick={handleToggle}
                >
                    <span className="font-medium text-stone-600">{label}</span>
                    {isOn && content && (
                        <div
                            className="absolute z-10  bg-white border border-gray-200 rounded-lg shadow-lg p-4 mt-0.5 "
                            style={{
                                top: 'var(--content-top)',
                                width: '500px', // Adjust as needed
                            }}
                        >
                            <p className="text-sm text-gray-600">{content}</p>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ToggleButton;