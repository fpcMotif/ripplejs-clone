
import React, { useState, useEffect, useRef } from 'react';

const fullCodeHTML = `<span class="line-number"> 1</span> <span class="export-keyword">import</span> <span class="brace">{</span> <span class="property">Button</span> <span class="brace">}</span> <span class="export-keyword">from</span> <span class="string">'./Button.ripple'</span>;
<span class="line-number"> 2</span> <span class="export-keyword">import</span> <span class="brace">{</span> <span class="property">track</span> <span class="brace">}</span> <span class="export-keyword">from</span> <span class="string">'ripple'</span>;
<span class="line-number"> 3</span>
<span class="line-number"> 4</span> <span class="export-keyword">export</span> <span class="keyword">component</span> <span class="function">TodoList</span><span class="brace">(</span><span class="brace">{</span> <span class="property">todos</span>, <span class="property">addTodo</span> <span class="brace">}</span>: <span class="component">Props</span><span class="brace">)</span> <span class="brace">{</span>
<span class="line-number"> 5</span>   <span class="bracket">&lt;</span><span class="tag">div</span> <span class="attribute">class</span>=<span class="string">"container"</span><span class="bracket">&gt;</span>
<span class="line-number"> 6</span>     <span class="bracket">&lt;</span><span class="tag">h2</span><span class="bracket">&gt;</span><span class="template-brace">{</span><span class="string">'Todo List'</span><span class="template-brace">}</span><span class="bracket">&lt;/</span><span class="tag">h2</span><span class="bracket">&gt;</span>
<span class="line-number"> 7</span>     <span class="bracket">&lt;</span><span class="tag">ul</span><span class="bracket">&gt;</span>
<span class="line-number"> 8</span>       <span class="control-keyword">for</span> <span class="brace">(</span><span class="keyword">const</span> <span class="property">todo</span> <span class="keyword">of</span> <span class="ripple-syntax">todos</span><span class="brace">)</span> <span class="block-brace">{</span>
<span class="line-number"> 9</span>         <span class="bracket">&lt;</span><span class="tag">li</span><span class="bracket">&gt;</span><span class="template-brace">{</span><span class="property">todo.text</span><span class="template-brace">}</span><span class="bracket">&lt;/</span><span class="tag">li</span><span class="bracket">&gt;</span>
<span class="line-number">10</span>       <span class="block-brace">}</span>
<span class="line-number">11</span>     <span class="bracket">&lt;/</span><span class="tag">ul</span><span class="bracket">&gt;</span>
<span class="line-number">12</span>
<span class="line-number">13</span>     <span class="control-keyword">if</span> <span class="brace">(</span><span class="ripple-syntax">todos</span>.<span class="property">length</span> <span class="keyword">&gt;</span> <span class="value">0</span><span class="brace">)</span> <span class="block-brace">{</span>
<span class="line-number">14</span>       <span class="bracket">&lt;</span><span class="tag">p</span><span class="bracket">&gt;</span><span class="template-brace">{</span><span class="ripple-syntax">todos</span>.<span class="property">length</span><span class="template-brace">}</span><span class="template-brace">{</span><span class="string">" items"</span><span class="template-brace">}</span><span class="bracket">&lt;/</span><span class="tag">p</span><span class="bracket">&gt;</span>
<span class="line-number">15</span>     <span class="block-brace">}</span>
<span class="line-number">16</span>
<span class="line-number">17</span>     <span class="bracket">&lt;</span><span class="component">Button</span> <span class="attribute">onClick</span>=<span class="template-brace">{</span><span class="property">addTodo</span><span class="template-brace">}</span> <span class="attribute">label</span>=<span class="template-brace">{</span><span class="string">"Add Todo"</span><span class="template-brace">}</span> <span class="bracket">/&gt;</span>
<span class="line-number">18</span>   <span class="bracket">&lt;/</span><span class="tag">div</span><span class="bracket">&gt;</span>
<span class="line-number">19</span>
<span class="line-number">20</span>   <span class="bracket">&lt;</span><span class="tag">style</span><span class="bracket">&gt;</span>
<span class="line-number">21</span>     <span class="css-selector">.container</span> <span class="css-brace">{</span>
<span class="line-number">22</span>       <span class="attribute">text-align</span>: <span class="value">center</span>;
<span class="line-number">23</span>       <span class="attribute">font-family</span>: <span class="string">"Arial"</span>, <span class="value">sans-serif</span>;
<span class="line-number">24</span>     <span class="css-brace">}</span>
<span class="line-number">25</span>   <span class="bracket">&lt;/</span><span class="tag">style</span><span class="bracket">&gt;</span>
<span class="line-number">26</span> <span class="brace">}</span>
<span class="line-number">27</span>
<span class="line-number">28</span> <span class="export-keyword">export</span> <span class="keyword">component</span> <span class="function">Counter</span><span class="brace">()</span> <span class="brace">{</span>
<span class="line-number">29</span>   <span class="keyword">let</span> <span class="property">count</span> <span class="operator">=</span> <span class="function">track</span><span class="brace">(</span><span class="value">0</span><span class="brace">)</span>;
<span class="line-number">30</span>   <span class="keyword">let</span> <span class="property">double</span> <span class="operator">=</span> <span class="function">track</span><span class="brace">(</span><span class="brace">()</span> <span class="operator">=&gt;</span> <span class="reactive-var">@count</span> <span class="operator">*</span> <span class="value">2</span><span class="brace">)</span>;
<span class="line-number">31</span>
<span class="line-number">32</span>   <span class="bracket">&lt;</span><span class="tag">div</span> <span class="attribute">class</span>=<span class="string">'counter'</span><span class="bracket">&gt;</span>
<span class="line-number">33</span>     <span class="bracket">&lt;</span><span class="tag">h2</span><span class="bracket">&gt;</span><span class="template-brace">{</span><span class="string">'Counter'</span><span class="template-brace">}</span><span class="bracket">&lt;/</span><span class="tag">h2</span><span class="bracket">&gt;</span>
<span class="line-number">34</span>     <span class="bracket">&lt;</span><span class="tag">p</span><span class="bracket">&gt;</span><span class="template-brace">{</span><span class="string">"Count: "</span><span class="template-brace">}</span><span class="template-brace">{</span><span class="reactive-var">@count</span><span class="template-brace">}</span><span class="bracket">&lt;/</span><span class="tag">p</span><span class="bracket">&gt;</span>
<span class="line-number">35</span>     <span class="bracket">&lt;</span><span class="tag">p</span><span class="bracket">&gt;</span><span class="template-brace">{</span><span class="string">"Double: "</span><span class="template-brace">}</span><span class="template-brace">{</span><span class="reactive-var">@double</span><span class="template-brace">}</span><span class="bracket">&lt;/</span><span class="tag">p</span><span class="bracket">&gt;</span>
<span class="line-number">36</span>
<span class="line-number">37</span>     <span class="bracket">&lt;</span><span class="component">Button</span> <span class="attribute">onClick</span>=<span class="template-brace">{</span><span class="brace">()</span> <span class="operator">=&gt;</span> <span class="reactive-var">@count</span><span class="operator">++</span><span class="template-brace">}</span> <span class="attribute">label</span>=<span class="template-brace">{</span><span class="string">'Increment'</span><span class="template-brace">}</span> <span class="bracket">/&gt;</span>
<span class="line-number">38</span>     <span class="bracket">&lt;</span><span class="component">Button</span> <span class="attribute">onClick</span>=<span class="template-brace">{</span><span class="brace">()</span> <span class="operator">=&gt;</span> <span class="reactive-var">@count</span> <span class="operator">=</span> <span class="value">0</span><span class="template-brace">}</span> <span class="attribute">label</span>=<span class="template-brace">{</span><span class="string">'Reset'</span><span class="template-brace">}</span> <span class="bracket">/&gt;</span>
<span class="line-number">39</span>   <span class="bracket">&lt;/</span><span class="tag">div</span><span class="bracket">&gt;</span>
<span class="line-number">40</span> <span class="brace">}</span>`;

const CodeEditor: React.FC = () => {
    const [displayedCode, setDisplayedCode] = useState('');
    const charIndexRef = useRef(0);

    useEffect(() => {
        const type = () => {
            const currentPos = charIndexRef.current;
            const nextPos = currentPos + 20;

            if (currentPos < fullCodeHTML.length) {
                setDisplayedCode(fullCodeHTML.substring(0, nextPos) + '<span class="typing-cursor">|</span>');
                charIndexRef.current = nextPos;
                setTimeout(type, 10);
            } else {
                setDisplayedCode(fullCodeHTML);
            }
        };

        const startTimeout = setTimeout(type, 1000);

        return () => {
            clearTimeout(startTimeout);
        };
    }, []);


    return (
        <div className="editor-animate max-w-[700px] my-4 mx-auto bg-[rgba(30,30,35,0.95)] rounded-xl border border-[rgba(255,255,255,0.1)] backdrop-blur-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] text-left">
            <div className="bg-[rgba(20,20,25,0.9)] pt-3 px-4 border-b border-[rgba(255,255,255,0.1)] flex items-start gap-4">
                <div className="flex gap-2 self-center -mt-[7px]">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
                </div>
                <div className="bg-[rgba(25,25,30,0.95)] py-2 px-4 rounded-t-md text-[rgba(255,255,255,0.9)] font-roboto-mono text-xs border border-[rgba(255,255,255,0.1)] border-b-0 -mb-px self-end">
                    Examples.ripple
                </div>
            </div>
            <div className="bg-[rgba(25,25,30,0.95)] p-0 font-roboto-mono text-[13px] leading-relaxed text-[#e1e4e8] overflow-auto h-[400px] md:h-[800px]">
                <pre className="editor-code m-0 p-6 bg-none text-inherit font-inherit whitespace-pre overflow-x-auto text-xs md:text-sm">
                    <code dangerouslySetInnerHTML={{ __html: displayedCode }} />
                </pre>
            </div>
        </div>
    );
};

export default CodeEditor;
