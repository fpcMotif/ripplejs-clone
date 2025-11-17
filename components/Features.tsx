
import React from 'react';

const FeatureItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <li className="py-2.5 text-sm md:text-base leading-snug text-[rgba(255,255,255,0.85)] relative">
        <strong>{title}</strong> - {children}
    </li>
);

const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <code className="bg-[rgba(120,219,226,0.15)] text-[#78dbe2] py-1 px-1.5 rounded-md font-roboto-mono text-[0.9em]">
        {children}
    </code>
);

const Features: React.FC = () => {
    return (
        <>
            <div className="text-center my-8 mx-auto max-w-[700px] p-6 bg-[rgba(255,193,7,0.1)] border border-[rgba(255,193,7,0.3)] rounded-lg backdrop-blur-sm">
                <p className="m-0 text-base text-[rgba(255,255,255,0.8)] leading-normal">
                    Ripple is currently in early development.
                </p>
            </div>

            <div className="bg-[rgba(40,44,52,0.85)] backdrop-blur-lg rounded-xl p-8 my-8 mx-auto max-w-[700px] border border-[rgba(255,255,255,0.1)]">
                <h2 className="text-lg md:text-xl font-normal mt-0 opacity-90 leading-relaxed text-[rgba(255,255,255,0.9)] [font-variation-settings:'CASL'_0.3] text-left">
                    Ripple is a TypeScript UI framework that combines the best parts of React, Solid, and Svelte into one package.
                </h2>
                <ul className="list-disc pl-8 my-6 text-left marker:text-[#78dbe2] marker:text-xl">
                    <FeatureItem title="Reactive State Management">Built-in reactivity with <Code>track()</Code> function and <Code>@</Code> access syntax</FeatureItem>
                    <FeatureItem title="Component-Based Architecture">Clean, reusable components with props and children</FeatureItem>
                    <FeatureItem title="Template Syntax">Familiar templating with Ripple-specific enhancements</FeatureItem>
                    <FeatureItem title="Performance">Fine-grain rendering, with industry-leading performance, bundle-size and memory usage</FeatureItem>
                    <FeatureItem title="TypeScript Support">Full TypeScript integration with type checking</FeatureItem>
                    <FeatureItem title="VSCode Integration">Rich editor support with diagnostics and IntelliSense</FeatureItem>
                    <FeatureItem title="Control Flow">Native <Code>if</Code>, <Code>for</Code>, and <Code>try</Code> in templates</FeatureItem>
                    <FeatureItem title="Scoped Styling">Component-local CSS with <Code>&lt;style&gt;</Code> elements</FeatureItem>
                    <FeatureItem title="Prettier Support">Full Prettier formatting support for <Code>.ripple</Code> modules</FeatureItem>
                    <FeatureItem title="ESLint Support">Full ESLint integration for <Code>.ripple</Code> modules</FeatureItem>
                </ul>
            </div>
        </>
    );
};

export default Features;
