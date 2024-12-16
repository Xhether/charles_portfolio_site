'use client';

import React from 'react';
import Image from 'next/image';

interface ProjectInfo {
    name: string;
    projectId: string;
    image: string;
    subtitle1?: string;
    subtitle2?: string;
}

interface ProjectBarProps {
    projects: ProjectInfo[];
}

const ProjectBar: React.FC<ProjectBarProps> = ({ projects }) => {
    const scrollToSection = (projectId: string) => {
        const element = document.getElementById(projectId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 py-4 bg-white">
            {projects.map((project) => (
                <button
                    key={project.name}
                    onClick={() => scrollToSection(project.projectId)}
                    className="w-[1200px] h-28 px-6 rounded-3xl transition-colors border-4 border-stone-300 relative"
                    style={{
                        background: 'linear-gradient(90deg, #FFE4E1, #E6E6FA)',
                    }}
                >
                    <div className="flex items-center h-full justify-between">
                        <div className="flex items-center justify-center space-x-4 w-[600px]">
                            <Image
                                src={project.image}
                                alt={`${project.name} logo`}
                                width={80}
                                height={80}
                                className="rounded-lg"
                            />
                            <span className="text-[56px] font-medium text-black flex-1 text-center">{project.name}</span>
                        </div>
                        {project.subtitle1 && project.subtitle2 && (
                            <div className="flex items-center w-72">
                                <div className="h-24 w-px bg-gray-300 mx-4"></div>
                                <div className='flex flex-col text-center'>
                                    <div className="text-lg text-gray-600">
                                        {project.subtitle1}
                                    </div>
                                    <div className="text-lg text-gray-600">
                                        {project.subtitle2}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </button>
            ))}
        </div>
    );
};

export default ProjectBar;
