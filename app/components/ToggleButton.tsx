'use client';

import React from 'react';

interface ToggleButtonProps {
    isOn: boolean;
    label?: string;
    content?: string;
    isTop?: boolean;
    isBottom?: boolean;
    onToggle: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isOn, label, content, isTop, isBottom, onToggle }) => {
    console.log('ToggleButton rendered with isOn:', isOn);

    return (
        <div className="relative inline-block" style={{ width: 600 }}>
            <div className="flex flex-col items-center">
                <button
                    className={`relative border-t-2 border-r-2 border-l-2 h-11 bg-opacity-20 border-stone-500 ${isOn ? 'bg-stone-600' : 'bg-stone-800'} ${isBottom ? 'rounded-b-lg border-b-2' : 'rounded-b-none'} ${isTop ? 'rounded-t-lg' : 'rounded-t-none'}`}
                    style={{ width: 500 }}
                    onClick={onToggle}
                >
                    <span className={`font-medium ${isOn ? 'text-white' : 'text-stone-600'}`}>{label}</span>
                </button>
                {isOn && content && (
                    <div
                        className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg p-8"
                        style={{
                            width: '500px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            top: '100%',
                            marginTop: '2px'
                        }}
                    >
                        <p className="text-sm text-gray-600">{content}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ToggleButton;