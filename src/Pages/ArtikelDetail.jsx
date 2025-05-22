import React from 'react';
import App from '../App';
import { useParams } from 'react-router-dom';

const ArtikelDetail = () => {
    const { id } = useParams();

    const content = `
Thanks for reading! These are some of the tips I’ve personally bookmarked for myself—things I’ve learned the hard way while coding, talking to dev friends, and working on real projects.

When I first started, I used to guess why my code was slow instead of measuring. I’d optimize random parts of my code and still wonder why things weren’t getting faster. Over time, I realized that pro developers don’t just “write fast code” by instinct—they use tools, measure, and optimize what actually matters.

I wrote this to save you from making the same mistakes I did. Hopefully, now you have a clearer roadmap to writing faster, more efficient code—without the frustration I went through! 🚀

If you found this helpful, bookmark it for later, and feel free to share it with a fellow dev who might be struggling with slow code too.
  `;

    return (
        <App>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1743176201295/448f0407-8a15-4b59-a91f-8a197bc07578.png"
                        alt="Article Cover"
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="text-emerald-500 text-sm">12 Mei 2024</span>
                            <span className="text-gray-400 text-sm">Oleh Admin</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-4">
                            Why Your Code is Slow: Common Performance Mistakes Beginners Make {id}
                        </h1>
                        <div className="prose prose-invert max-w-none">
                            <div className="space-y-6 text-gray-300">
                                {/* Introduction */}
                                <p>
                                    Here's the truth: slow code doesn't have to be the end of the world. And it's a rite of passage if you're a developer.
                                </p>

                                <p>
                                    When you're learning to code, you're focused on making things work—not making them fast. But eventually, you'll hit a wall: your app freezes, your data script takes hours, or your game lags like a PowerPoint slideshow.
                                </p>

                                <p>
                                    The difference between working code and blazing-fast code often comes down to avoiding a few common mistakes. Mistakes that are easy to make when you're starting out, like using the wrong tool for the job, writing unnecessary code, or accidentally torturing your computer with hidden inefficiencies.
                                </p>

                                {/* Table of Contents */}
                                <div className="my-8">
                                    <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
                                    <ul className="space-y-2">
                                        <li>
                                            <a href="#mistake1" className="text-emerald-500 hover:text-emerald-400">
                                                Mistake #1: Logging Everything in Production
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#mistake2" className="text-emerald-500 hover:text-emerald-400">
                                                Mistake #2: Using the Wrong Loops
                                            </a>
                                        </li>
                                        {/* Add other table of contents items */}
                                    </ul>
                                </div>

                                {/* Main Content Sections */}
                                <section id="mistake1" className="space-y-4">
                                    <h2 className="text-2xl font-bold text-white">
                                        Mistake #1: Logging Everything in Production
                                    </h2>
                                    <p>
                                        Logging is supposed to help you understand what's happening in your code—but if you're logging everything, you're actually slowing it down. A common beginner mistake is leaving print() statements everywhere or enabling verbose logging even in production, where performance matters most.
                                    </p>

                                    <div className="bg-zinc-700 rounded-lg p-4 my-4">
                                        <pre className="text-sm text-gray-300">
                                            <code>
                                                {`def process_data(data):
                                                print(f"Processing data: {data}")  # Logging every input
                                                result = data * 2
                                                print(f"Result: {result}")  # Logging every result
                                                return result`}
                                            </code>
                                        </pre>
                                    </div>
                                </section>

                                <p className="whitespace-pre-line text-white text-base">
                                    {content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default ArtikelDetail;