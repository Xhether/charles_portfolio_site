'use client';

import React, { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import Slider from './Slider';
import ToggleButton from './ToggleButton';

interface ProjectCardProps {
    id: string;
    title: string;
    subtitle: string;
    sliderImages: StaticImageData[];
    sliderDescriptions: string[];
    tags: string[];
    techStack: { logo: StaticImageData; name: string }[];
    toggleQuestions: { question: string; answer: string }[];
    links: { icon: StaticImageData; label: string; url: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    id,
    title,
    subtitle,
    sliderImages,
    sliderDescriptions,
    tags,
    techStack,
    toggleQuestions,
    links
}) => {
    const [activeToggle, setActiveToggle] = React.useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(id);
            if (element) {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

                if (isVisible) {
                    document.body.style.backgroundColor = getBackgroundColor(id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [id]);

    const getBackgroundColor = (projectId: string) => {
        switch (projectId) {
            case 'urmc':
                return '#F5F5F5';  // Light gray
            case 'ecolens':
                return '#E8F5E9';  // Light green
            case 'studone':
                return '#E3F2FD';  // Light blue
            default:
                return 'white';
        }
    };

    const handleToggle = (index: number) => {
        setActiveToggle(activeToggle === index ? null : index);
    };

    return (
        <div id={id} className='pt-24 pl-12 pb-24 flex items-center justify-between'>
            <div className='w-1/2'>
                <Slider images={sliderImages} descriptions={sliderDescriptions} />
            </div>
            <div className='w-1/2'>
                <div className='flex flex-col items-center'>
                    <p className='font-semibold text-2xl text-black italic'>
                        {subtitle}
                    </p>
                    <p className='font-bold text-4xl text-black bg-clip-text'>
                        {title}
                    </p>
                    <div className="relative inline-block ml-8 mr-8 text-center text-black border-b-2 border-gray-300" />
                </div>

                <div className='items-center ml-4 flex justify-center'>
                    <div className="flex flex-wrap justify-center gap-4">
                        {tags.map((tag, index) => (
                            <div key={index} className="relative inline-block p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>
                                    {tag}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='font-semibold flex flex-col text-black items-center mb-2'>
                    <div className='flex flex-row'>
                        {techStack.map((tech, index) => (
                            <div key={index} className='flex items-center justify-between pt-2 pr-4'>
                                <Image
                                    src={tech.logo}
                                    className='rounded-lg'
                                    alt={`${tech.name} Logo`}
                                    style={{ width: 'auto', height: 20 }}
                                />
                                <p className='ml-4'>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <ul className='pb-8 flex flex-col items-center'>
                    {toggleQuestions.map((q, index) => (
                        <li key={index}>
                            <ToggleButton
                                isOn={activeToggle === index}
                                isTop={index === 0}
                                isBottom={index === toggleQuestions.length - 1}
                                label={q.question}
                                content={q.answer}
                                onToggle={() => handleToggle(index)}
                            />
                        </li>
                    ))}
                </ul>

                <div className='flex justify-center'>
                    <div className='flex flex-wrap justify-center gap-4'>
                        {links.map((link, index) => (
                            <div key={index} className='flex flex-row items-center border-2 p-2 rounded-2xl border-black bg-stone-400'>
                                <a href={link.url}>
                                    <Image
                                        src={link.icon}
                                        className='rounded-lg'
                                        alt={`${link.label} Logo`}
                                        style={{ width: 'auto', height: 36 }}
                                    />
                                </a>
                                <p className='ml-2 font-semibold text-xl'>
                                    {link.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard; 