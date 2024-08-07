'use client';

import React, { useState } from 'react';

interface ToggleButtonProps {
    initialState?: boolean;
    label?: string;
    content?: string;
    isTop?: boolean;
    isBottom?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ initialState = false, label, content, isBottom, isTop }) => {
    const [isOn, setIsOn] = useState<boolean>(initialState);
    const handleToggle = () => {
        setIsOn(prev => !prev);
        console.log(`Toggle is now ${!isOn ? 'ON' : 'OFF'}`);
    };



    return (
        <div className="flex flex-col items-center pb-0.5">

            <button
                className={`border-2 h-8  ${isOn ? 'bg-stone-600' : 'bg-stone-800'} ${isTop ? 'rounded-t-lg' : 'rounded-t-none'} ${isBottom ? 'rounded-b-lg' : 'rounded-b-none'}`}
                style={{ width: 500 }}
                onClick={handleToggle}
            >
                <span className="sr-only">Toggle</span>
                {isOn && content && (
                    <p className="mt-8 bg-slate-300 text-sm text-gray-900">{content}</p>
                )}
            </button>
        </div>
    );
};

export default ToggleButton;