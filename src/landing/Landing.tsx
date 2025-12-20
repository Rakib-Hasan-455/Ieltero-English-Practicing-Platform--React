import './Landing.css'
import {Navbar} from "./Navbar.tsx";

export function Landing() {
    return (<>

            <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
                <Navbar
                    isLandingPage={true}
                    onGetStarted={() => true}
                />

                <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                    {/* Hero Section */}
                    <main className="pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                            <div
                                className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl dark:bg-primary/10 pointer-events-none"></div>
                            <div
                                className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <div className="space-y-8 relative z-10 animate-fade-in-up">
                                    <div
                                        className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-sm font-medium text-primary dark:text-blue-300">New Mock Exams Available</span>
                                    </div>
                                    <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                        Practice <span
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">IELTS Exam</span>
                                        <br/> with Confidence
                                    </h1>
                                    <p className="text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-lg">
                                        Your ultimate platform for mastering IELTS skills. Join thousands of students
                                        achieving their dream scores in Listening, Reading, Writing, and Speaking.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button
                                            className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                                            Start Practice Now
                                            <span className="material-icons text-sm">arrow_forward</span>
                                        </button>
                                        <button
                                            className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                                            <span className="material-icons text-primary">play_circle_outline</span>
                                            How it works
                                        </button>
                                    </div>
                                    <div
                                        className="pt-8 flex items-center gap-6 text-sm text-text-muted-light dark:text-text-muted-dark">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="material-icons text-green-500 text-base">check_circle</span>
                                            <span>Real Exam Format</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="material-icons text-green-500 text-base">check_circle</span>
                                            <span>Instant Results</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative lg:h-[600px] flex items-center justify-center">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-[2rem] transform rotate-3 scale-95"></div>
                                    <div
                                        className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform transition-transform hover:-translate-y-2 duration-500 group">
                                        <img alt="International flags at United Nations representing global education"
                                             className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuB41eebP-7u9dqT9xn0P7DXhVkKzxRN82jsq2IbJ83HNLdHQUeszlQred9_yQTgflp9drm-w5Yu6bkkRsJJiqOix9blmb7BYedTSMGYZJqL0GJMs4Yf4fSFKKBVE6B8_2E-18KAvuOOQhdmJM-qnKLo0nPADibyJeRXbQZDqyPKkPANcjKE2-cLUxk2HH7ukDk56PD-mhkB-u__dgv77N4yCse3tTcCBjIW8Eiq4kYIZu5lideZrfAag4re5op3ifNsZXhKIZ9JPeSV"/>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div
                                            className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">Global
                                                        Reach</p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">Accepted by
                                                        11,000+ organizations</p>
                                                </div>
                                                <div className="flex -space-x-2">
                                                    <img alt="User"
                                                         className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                                                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdjHRfJJsaIjjCmGY1c1YlgKTjemi3EvUzxej17h6kxn2llcZGz2ote1nHtdOTkIt6pqfqTmHyO1_d_3BCu1XWc_IFfdmeobV9DlDc0P7WvYAjYGKrsI6b0Uxlshj2haxCK-tstnmNELL7i2PsPokwXCWwtKeKu3uOr6gPJzlGPPAX7qJ2HqU8sDtEHHKC472842XipyxuBOYBNaN87LFQCcwOTslsMEymYIOmYPOWfBzGWVh08r8hMwlgzirDB0Jci6qQIpmvgygr"/>
                                                    <img alt="User"
                                                         className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                                                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTjEmbUAE-6KFmaGWBDXr5Qax_cMRS24NY3MO8m2e8lG1Bq3xENg76C_cBd2ju95QG5ASIIW9qWC-OS6CXDsQ4gk7t63XH1JtKDh0lcSKIvCATdB6Hz1LtRbIGODgFbw9q9kI-A1XwjAxXuuCvk5WRgLdooVp5cnRu6hCXlHNfjg7GUIiw1sEJD0fr-XgEDSRkoe4ycwXpms4ER8w5lHpXARK4w6Lmfy9Qnc2as35qjYSF6YXWKqOczQ5MgYSWDcchr_ovm2Gs6D9L"/>
                                                    <img alt="User"
                                                         className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                                                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3GjYoo65N7_8hT40EsLukO7X4P1IjJkXrro2rm_uam5JDfObtgLRR4wAnpDH0iTAaOrnU35uRVVpPsVl987w4LSJ3Qiw2s4XlzuG1TducH5E0I2sMXx4E8C9_j9T3VNayQQfyUYXJZpKbWZx6ztklc7eXGl5aLJZJEQmQaEU2CAgomZNU5EuCz2kdwwNhg6JMvLrVTN9EvRcdyp6Jqnx_OzG3tRWTIq4M1qdEIXe_XkxDPrSZ4GtshQhL9IQRQboFWzn-e6LqKcE8"/>
                                                    <div
                                                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-500">+2k
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute -top-6 -right-6 bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg">
                                                <span
                                                    className="material-icons text-yellow-600 dark:text-yellow-400">emoji_events</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">Success Rate</p>
                                                <p className="text-lg font-bold text-gray-900 dark:text-white">98.5%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* Features Section */}

                    <section
                        className="py-24 bg-white dark:bg-[#131b26] border-y border-gray-100 dark:border-gray-800 relative overflow-hidden"
                        id="ai-features">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                            <div
                                className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary/5 dark:bg-primary/5 rounded-full blur-[100px]"></div>
                            <div
                                className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-secondary/5 dark:bg-secondary/5 rounded-full blur-[100px]"></div>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center max-w-3xl mx-auto mb-20">
                                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">AI-Powered
                                    Features</h2>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Boost
                                    Your Score with <br/><span
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Smart Technology</span>
                                </h3>
                                <p className="text-lg text-text-muted-light dark:text-text-muted-dark">Experience the
                                    future of IELTS preparation with our cutting-edge AI tools designed to maximize your
                                    potential in every module.</p>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24 lg:mb-32">
                                <div className="lg:w-1/2 space-y-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-2">
                                        <span className="material-icons text-3xl">mic</span>
                                    </div>
                                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white">AI Speaking
                                        Evaluation</h4>
                                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                        Receive an instant estimated band score after every recording. Our AI analyzes
                                        your pronunciation, fluency, and vocabulary to provide detailed, actionable
                                        feedback just like a real examiner.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <div
                                            className="flex items-center gap-3 p-3 bg-surface-light dark:bg-surface-dark rounded-xl">
                                            <span className="material-icons text-green-500">check_circle</span>
                                            <span className="font-medium text-gray-700 dark:text-gray-300">Instant Band Score &amp; Breakdown</span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-surface-light dark:bg-surface-dark rounded-xl">
                                            <span className="material-icons text-green-500">check_circle</span>
                                            <span
                                                className="font-medium text-gray-700 dark:text-gray-300">Fluency &amp; Pronunciation Analysis</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <div
                                        className="relative bg-white dark:bg-surface-dark rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
                                        <div
                                            className="absolute -top-6 -right-6 bg-white dark:bg-surface-dark p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce duration-[4000ms]">
                                            <span
                                                className="text-xs font-bold text-gray-500 dark:text-gray-400 block uppercase mb-1">Band Score</span>
                                            <span className="text-2xl font-black text-primary">7.5</span>
                                        </div>
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                            <div>
                                                <div
                                                    className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                                <div className="h-2 w-20 bg-gray-100 dark:bg-gray-800 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-end justify-between h-24 gap-1 mb-8">
                                            <div className="w-3 bg-primary/20 rounded-full h-12"></div>
                                            <div className="w-3 bg-primary/40 rounded-full h-16"></div>
                                            <div className="w-3 bg-primary rounded-full h-20"></div>
                                            <div className="w-3 bg-primary/80 rounded-full h-14"></div>
                                            <div className="w-3 bg-primary/30 rounded-full h-8"></div>
                                            <div className="w-3 bg-primary/60 rounded-full h-18"></div>
                                            <div className="w-3 bg-primary rounded-full h-24"></div>
                                            <div className="w-3 bg-primary/70 rounded-full h-16"></div>
                                            <div className="w-3 bg-primary/40 rounded-full h-10"></div>
                                            <div className="w-3 bg-primary/20 rounded-full h-14"></div>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-background-dark p-4 rounded-xl">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span
                                                    className="material-icons text-sm text-green-500">auto_awesome</span>
                                                <span className="text-xs font-bold text-gray-900 dark:text-white">AI Feedback</span>
                                            </div>
                                            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                            <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 mb-24 lg:mb-32">
                                <div className="lg:w-1/2 space-y-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-2">
                                        <span className="material-icons text-3xl">edit_note</span>
                                    </div>
                                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white">AI Writing
                                        Correction</h4>
                                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                        Submit your essays and get comprehensive corrections instantly. Our AI checks
                                        grammar, coherence, lexical resource, and task response to ensure you meet the
                                        criteria.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <div
                                            className="flex items-center gap-3 p-3 bg-surface-light dark:bg-surface-dark rounded-xl">
                                            <span className="material-icons text-green-500">check_circle</span>
                                            <span
                                                className="font-medium text-gray-700 dark:text-gray-300">Grammar &amp; Vocabulary Check</span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-surface-light dark:bg-surface-dark rounded-xl">
                                            <span className="material-icons text-green-500">check_circle</span>
                                            <span
                                                className="font-medium text-gray-700 dark:text-gray-300">Coherence &amp; Task Response Feedback</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <div
                                        className="relative bg-white dark:bg-surface-dark rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 min-h-[320px]">
                                        <div
                                            className="absolute top-8 right-8 w-1/3 bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-100 dark:border-purple-800/30">
                                            <span
                                                className="text-xs font-bold text-purple-600 dark:text-purple-400 block mb-2">Suggestions</span>
                                            <div
                                                className="h-1.5 w-full bg-purple-200 dark:bg-purple-800/50 rounded mb-2"></div>
                                            <div
                                                className="h-1.5 w-2/3 bg-purple-200 dark:bg-purple-800/50 rounded"></div>
                                        </div>
                                        <div className="w-1/2 space-y-4 mt-2">
                                            <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                                            <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded flex">
                                                <div
                                                    className="w-1/3 bg-red-200 dark:bg-red-900/50 h-full rounded-l relative group cursor-pointer">
                                                    <div
                                                        className="hidden group-hover:block absolute -top-8 left-0 bg-black text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">Spelling
                                                        Error
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                            <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                                            <div className="h-3 w-4/5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                            <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded flex">
                                                <div className="w-1/2 h-full"></div>
                                                <div
                                                    className="w-1/4 bg-yellow-200 dark:bg-yellow-900/50 h-full relative group"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24 lg:mb-32">
                                <div className="lg:w-1/2 space-y-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
                                        <span className="material-icons text-3xl">headphones</span>
                                    </div>
                                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white">Realistic Exam
                                        Simulation</h4>
                                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                        Experience the real test environment. Practice Listening with diverse global
                                        accents and Reading passages equipped with strict time tracking to build your
                                        stamina.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <div
                                            className="flex items-center gap-3 p-3 bg-surface-light dark:bg-surface-dark rounded-xl">
                                            <span className="material-icons text-green-500">check_circle</span>
                                            <span className="font-medium text-gray-700 dark:text-gray-300">Diverse English Accents (UK, US, AU)</span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-surface-light dark:bg-surface-dark rounded-xl">
                                            <span className="material-icons text-green-500">check_circle</span>
                                            <span className="font-medium text-gray-700 dark:text-gray-300">Real-time Exam Timer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <div
                                        className="relative bg-white dark:bg-surface-dark rounded-3xl shadow-2xl p-6 border border-gray-100 dark:border-gray-700">
                                        <div
                                            className="flex justify-between items-center mb-6 bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center gap-2">
                                                <span className="material-icons text-red-500 text-sm">timer</span>
                                                <span className="font-mono text-red-500 font-bold">39:59</span>
                                            </div>
                                            <div
                                                className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Reading
                                                Passage 1
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div
                                                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 text-white">
                                                <span className="material-icons text-sm">play_arrow</span>
                                            </div>
                                            <div
                                                className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <div className="w-1/3 h-full bg-primary rounded-full"></div>
                                            </div>
                                            <span
                                                className="text-xs font-mono text-gray-500 dark:text-gray-400">04:20</span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                                            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                                            <div className="h-2 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                            <div className="h-2 w-4/5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                                <div className="lg:w-1/2 space-y-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-2">
                                        <span className="material-icons text-3xl">insights</span>
                                    </div>
                                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white">Instant Band Score
                                        Prediction</h4>
                                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                        Stop guessing your level. Our algorithm tracks your performance across all mock
                                        tests to predict your current IELTS band score with high accuracy.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <div
                                            className="flex items-center gap-3 p-3 bg-surface-light dark:bg-surface-dark rounded-xl">
                                            <span className="material-icons text-green-500">check_circle</span>
                                            <span className="font-medium text-gray-700 dark:text-gray-300">Data-Driven Performance Tracking</span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-surface-light dark:bg-surface-dark rounded-xl">
                                            <span className="material-icons text-green-500">check_circle</span>
                                            <span className="font-medium text-gray-700 dark:text-gray-300">Identify Weak Areas Instantly</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full flex justify-center">
                                    <div
                                        className="relative bg-white dark:bg-surface-dark rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 w-full max-w-sm">
                                        <div className="text-center mb-6">
                                            <h5 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Predicted
                                                Score</h5>
                                        </div>
                                        <div className="relative w-48 h-48 mx-auto mb-8">
                                            <div
                                                className="w-full h-full rounded-full border-[12px] border-gray-100 dark:border-gray-700"></div>
                                            <div
                                                className="absolute inset-0 w-full h-full rounded-full border-[12px] border-primary border-t-transparent border-l-transparent -rotate-45"
                                                style={{borderRightColor: 'transparent'}}></div>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span
                                                    className="text-5xl font-black text-gray-900 dark:text-white">7.5</span>
                                                <span
                                                    className="text-xs text-green-500 font-bold bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full mt-1">+0.5</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl text-center">
                                                <span className="text-xs text-gray-500 block">Listening</span>
                                                <span className="font-bold text-gray-900 dark:text-white">8.0</span>
                                            </div>
                                            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl text-center">
                                                <span className="text-xs text-gray-500 block">Speaking</span>
                                                <span className="font-bold text-gray-900 dark:text-white">7.5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Master every Section */}
                    <section
                        className="py-16 bg-surface-light dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Master Every
                                    Section</h2>
                                <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">Comprehensive
                                    practice materials designed to simulate the real exam environment for all four
                                    modules.</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div
                                    className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 group cursor-pointer">
                                    <div
                                        className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                        <span
                                            className="material-icons text-primary group-hover:text-white transition-colors">headphones</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Listening</h3>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Practice with
                                        various accents and real-world audio scenarios.</p>
                                </div>
                                <div
                                    className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 group cursor-pointer">
                                    <div
                                        className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                                        <span
                                            className="material-icons text-green-600 group-hover:text-white transition-colors">menu_book</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Reading</h3>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Improve
                                        comprehension with academic and general training texts.</p>
                                </div>
                                <div
                                    className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 group cursor-pointer">
                                    <div
                                        className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                                        <span
                                            className="material-icons text-purple-600 group-hover:text-white transition-colors">edit</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Writing</h3>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Get feedback
                                        on your essays and task responses.</p>
                                </div>
                                <div
                                    className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 group cursor-pointer">
                                    <div
                                        className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                                        <span
                                            className="material-icons text-orange-600 group-hover:text-white transition-colors">record_voice_over</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Speaking</h3>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Simulate
                                        interviews and practice fluency with AI feedback.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Real Ielts Exam section */}
                    <section className="py-24 pb-10 bg-white dark:bg-background-dark overflow-hidden relative">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1">
                                    <div
                                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary text-sm font-semibold mb-6">
                                        <span className="material-icons text-base">verified</span>
                                        Authentic Experience
                                    </div>
                                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                                        Real IELTS Exam <br/>
                                        <span
                                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Simulation</span>
                                    </h2>
                                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-10 leading-relaxed">
                                        Prepare with 100% accuracy. Our mock exams replicate the exact conditions of the
                                        official test, helping you build stamina and confidence for the big day.
                                    </p>
                                    <div className="space-y-8">
                                        <div className="flex items-start gap-4 group">
                                            <div
                                                className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-light dark:bg-surface-dark flex items-center justify-center text-secondary border border-gray-100 dark:border-gray-700 shadow-sm group-hover:scale-105 transition-transform">
                                                <span className="material-icons">timer</span>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Strict
                                                        Time Controls</h3>
                                                    <span
                                                        className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-300 rounded border border-red-200 dark:border-red-800">Timed</span>
                                                </div>
                                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Experience
                                                    the pressure of real-time limits. The timer stops exactly when the
                                                    official exam would.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 group">
                                            <div
                                                className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-light dark:bg-surface-dark flex items-center justify-center text-primary border border-gray-100 dark:border-gray-700 shadow-sm group-hover:scale-105 transition-transform">
                                                <span className="material-icons">format_list_bulleted</span>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Real
                                                        Question Types</h3>
                                                    <span
                                                        className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 rounded border border-blue-200 dark:border-blue-800">Exam-like</span>
                                                </div>
                                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Practice
                                                    with standard formats: Multiple Choice, Matching Headings,
                                                    True/False/Not Given, and more.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 group">
                                            <div
                                                className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-light dark:bg-surface-dark flex items-center justify-center text-accent border border-gray-100 dark:border-gray-700 shadow-sm group-hover:scale-105 transition-transform">
                                                <span className="material-icons">psychology</span>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Smart
                                                        Scoring Logic</h3>
                                                    <span
                                                        className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-300 rounded border border-green-200 dark:border-green-800">Official Pattern</span>
                                                </div>
                                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Get
                                                    instant band scores calculated using the official IELTS algorithm
                                                    for Reading and Listening sections.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Available
                                            Modules</p>
                                        <div className="flex gap-4">
                                            <div
                                                className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700">
                                                <span className="material-icons text-gray-500 text-sm">school</span>
                                                <span
                                                    className="text-sm font-semibold text-gray-700 dark:text-gray-300">Academic</span>
                                            </div>
                                            <div
                                                className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-700">
                                                <span
                                                    className="material-icons text-gray-500 text-sm">work_outline</span>
                                                <span
                                                    className="text-sm font-semibold text-gray-700 dark:text-gray-300">General Training</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2 relative">
                                    <div
                                        className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
                                    <div
                                        className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                                    <div
                                        className="relative bg-white dark:bg-surface-dark rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                        <div
                                            className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                            </div>
                                            <div
                                                className="flex items-center gap-2 bg-white dark:bg-gray-900 px-3 py-1.5 rounded-md shadow-sm border border-gray-200 dark:border-gray-700">
                                                <span
                                                    className="material-icons text-red-500 text-base animate-pulse">timer</span>
                                                <span
                                                    className="font-mono font-bold text-red-600 dark:text-red-400">59:24</span>
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <div className="flex flex-col gap-6">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs font-bold text-gray-400 uppercase">Section 1 of 3</span>
                                                    <div className="flex gap-1">
                                                        <div className="w-8 h-1.5 rounded-full bg-primary"></div>
                                                        <div
                                                            className="w-8 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                                        <div
                                                            className="w-8 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-6">
                                                    <div className="w-2/3 space-y-3">
                                                        <div
                                                            className="h-4 bg-gray-100 dark:bg-gray-700 rounded-full w-full"></div>
                                                        <div
                                                            className="h-4 bg-gray-100 dark:bg-gray-700 rounded-full w-5/6"></div>
                                                        <div
                                                            className="h-4 bg-gray-100 dark:bg-gray-700 rounded-full w-4/6"></div>
                                                        <div
                                                            className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30">
                                                            <div
                                                                className="h-3 bg-blue-200 dark:bg-blue-800/40 rounded-full w-3/4 mb-2"></div>
                                                            <div
                                                                className="h-3 bg-blue-200 dark:bg-blue-800/40 rounded-full w-1/2"></div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="w-1/3 border-l border-gray-100 dark:border-gray-700 pl-6 space-y-4">
                                                        <div>
                                                            <div
                                                                className="text-[10px] text-gray-400 mb-1 font-bold">Q1
                                                            </div>
                                                            <div
                                                                className="h-8 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg"></div>
                                                        </div>
                                                        <div>
                                                            <div
                                                                className="text-[10px] text-gray-400 mb-1 font-bold">Q2
                                                            </div>
                                                            <div
                                                                className="h-8 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg"></div>
                                                        </div>
                                                        <div>
                                                            <div
                                                                className="text-[10px] text-gray-400 mb-1 font-bold">Q3
                                                            </div>
                                                            <div className="flex gap-2">
                                                                <div
                                                                    className="h-4 w-4 rounded-full border border-gray-300 dark:border-gray-600"></div>
                                                                <div
                                                                    className="h-2 w-12 bg-gray-200 dark:bg-gray-700 rounded-full mt-1"></div>
                                                            </div>
                                                            <div className="flex gap-2 mt-2">
                                                                <div
                                                                    className="h-4 w-4 rounded-full border-4 border-primary bg-white dark:bg-gray-800"></div>
                                                                <div
                                                                    className="h-2 w-16 bg-gray-200 dark:bg-gray-700 rounded-full mt-1"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-gray-50 dark:bg-gray-800 px-6 py-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                            <span className="text-xs font-semibold text-gray-400">Review</span>
                                            <button
                                                className="bg-primary hover:bg-blue-600 transition-colors text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg shadow-primary/30">Next
                                                Section
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Who for Section */}
                    <section className="py-20 relative overflow-hidden bg-surface-light dark:bg-background-dark">
                        <div className="absolute inset-0 pointer-events-none">
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10"></div>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Who
                                    Is <span className="text-primary">IELTERO</span> For?</h2>
                                <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
                                    Whether you're aiming for global education or career growth, our platform adapts to
                                    your specific goals.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div
                                    className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-start h-full">
                                    <div
                                        className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <span className="material-icons text-2xl">school</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">Study
                                        Abroad</h3>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                        Students planning their education journey in English-speaking countries.
                                    </p>
                                </div>
                                <div
                                    className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-start h-full">
                                    <div
                                        className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                        <span className="material-icons text-2xl">flight_takeoff</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">Job
                                        Seekers &amp; Migration</h3>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                        Applicants seeking PR visas or global employment opportunities.
                                    </p>
                                </div>
                                <div
                                    className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-start h-full">
                                    <div
                                        className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                        <span className="material-icons text-2xl">account_balance</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">University
                                        Applicants</h3>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                        Candidates needing high band scores for competitive university admissions.
                                    </p>
                                </div>
                                <div
                                    className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-start h-full">
                                    <div
                                        className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                        <span className="material-icons text-2xl">business_center</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">Working
                                        Professionals</h3>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                        Busy individuals requiring flexible, high-impact preparation schedules.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* See your progress Section */}
                    <section className="py-20 bg-white dark:bg-background-dark overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:flex-row-reverse">
                                <div className="lg:w-2/5 space-y-8">
                                    <div>
<span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                        Data-Driven Success
                    </span>
                                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                            See Your Progress, <br/><span
                                            className="text-primary">Boost Your Confidence</span>
                                        </h2>
                                        <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
                                            Stop guessing where you stand. Our advanced analytics break down your
                                            performance across all four skills, highlighting exactly where you need to
                                            focus to hit your target band score.
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                                <span className="material-icons">trending_up</span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Measurable
                                                    Improvement</h4>
                                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">Track
                                                    your band score trajectory week by week. Visualize your growth and
                                                    stay motivated.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                                                <span className="material-icons">insights</span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Detailed
                                                    Insights</h4>
                                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">Identify
                                                    weak points in specific question types, from Multiple Choice to Map
                                                    Labelling.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="w-full sm:w-auto bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                                        View Sample Report
                                        <span className="material-icons text-sm">arrow_outward</span>
                                    </button>
                                </div>
                                <div className="lg:w-3/5 relative">
                                    <div
                                        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl pointer-events-none opacity-50"></div>
                                    <div
                                        className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100 dark:border-gray-700 relative z-10">
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                            <div
                                                className="bg-white dark:bg-background-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                                                <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium uppercase tracking-wide">Current
                                                    Band</p>
                                                <div className="flex items-end gap-2 mt-1">
                                                    <span
                                                        className="text-3xl font-extrabold text-gray-900 dark:text-white">6.5</span>
                                                    <span
                                                        className="text-sm font-semibold text-green-500 mb-1 flex items-center">
<span className="material-icons text-sm">arrow_drop_up</span> +0.5
                                </span>
                                                </div>
                                            </div>
                                            <div
                                                className="bg-white dark:bg-background-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                                                <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium uppercase tracking-wide">Target
                                                    Band</p>
                                                <div className="flex items-end gap-2 mt-1">
                                                    <span className="text-3xl font-extrabold text-primary">7.5</span>
                                                </div>
                                            </div>
                                            <div
                                                className="bg-white dark:bg-background-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                                                <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium uppercase tracking-wide">Tests
                                                    Taken</p>
                                                <div className="flex items-end gap-2 mt-1">
                                                    <span
                                                        className="text-3xl font-extrabold text-gray-900 dark:text-white">12</span>
                                                    <span
                                                        className="text-xs text-text-muted-light dark:text-text-muted-dark mb-1.5">Last 30 days</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div
                                                className="bg-white dark:bg-background-dark p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
                                                <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Skill
                                                    Breakdown</h5>
                                                <div className="space-y-4">
                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1">
                                                            <span
                                                                className="font-medium text-gray-700 dark:text-gray-300">Listening</span>
                                                            <span
                                                                className="font-bold text-gray-900 dark:text-white">7.0</span>
                                                        </div>
                                                        <div
                                                            className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                                                            <div className="bg-blue-500 h-2 rounded-full"
                                                                 style={{width: '80%'}}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1">
                                                            <span
                                                                className="font-medium text-gray-700 dark:text-gray-300">Reading</span>
                                                            <span
                                                                className="font-bold text-gray-900 dark:text-white">6.5</span>
                                                        </div>
                                                        <div
                                                            className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                                                            <div className="bg-green-500 h-2 rounded-full"
                                                                 style={{width: "70%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1">
                                                            <span
                                                                className="font-medium text-gray-700 dark:text-gray-300">Writing</span>
                                                            <span
                                                                className="font-bold text-gray-900 dark:text-white">6.0</span>
                                                        </div>
                                                        <div
                                                            className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                                                            <div className="bg-purple-500 h-2 rounded-full"
                                                                 style={{width: "60%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1">
                                                            <span
                                                                className="font-medium text-gray-700 dark:text-gray-300">Speaking</span>
                                                            <span
                                                                className="font-bold text-gray-900 dark:text-white">6.5</span>
                                                        </div>
                                                        <div
                                                            className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                                                            <div className="bg-orange-500 h-2 rounded-full"
                                                                 style={{width: "70%"}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="bg-white dark:bg-background-dark p-5 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col">
                                                <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Weekly
                                                    Band Trend</h5>
                                                <div className="flex-1 flex items-end justify-between px-2 gap-2 h-32">
                                                    <div
                                                        className="w-full bg-gray-100 dark:bg-gray-700 rounded-t-lg relative group"
                                                        style={{height: "40%"}}>
                                                        <div
                                                            className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded transition-opacity">5.5
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="w-full bg-gray-100 dark:bg-gray-700 rounded-t-lg relative group"
                                                        style={{height: "55%"}}>
                                                        <div
                                                            className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded transition-opacity">6.0
                                                        </div>
                                                    </div>
                                                    <div className="w-full bg-primary/30 rounded-t-lg relative group"
                                                         style={{height: "50 % "}}>
                                                        <div
                                                            className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded transition-opacity">5.5
                                                        </div>
                                                    </div>
                                                    <div className="w-full bg-primary/60 rounded-t-lg relative group"
                                                         style={{height: "70%"}}>
                                                        <div
                                                            className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded transition-opacity">6.5
                                                        </div>
                                                    </div>
                                                    <div className="w-full bg-primary rounded-t-lg relative group"
                                                         style={{height: "85%"}}>
                                                        <div
                                                            className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded transition-opacity">7.0
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex justify-between mt-2 text-[10px] text-text-muted-light dark:text-text-muted-dark uppercase font-medium">
                                                    <span>Wk1</span>
                                                    <span>Wk2</span>
                                                    <span>Wk3</span>
                                                    <span>Wk4</span>
                                                    <span>Wk5</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-6 bg-white dark:bg-background-dark p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
                                            <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Analysis
                                                Summary</h5>
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <div
                                                    className="flex-1 flex items-center gap-3 bg-green-50 dark:bg-green-900/10 p-3 rounded-xl border border-green-100 dark:border-green-900/20">
                                                    <div
                                                        className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-800/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                                        <span className="material-icons text-sm">thumb_up</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-green-800 dark:text-green-300">Strong
                                                            Point</p>
                                                        <p className="text-xs text-green-700 dark:text-green-400">Reading:
                                                            True/False/Not Given</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-1 flex items-center gap-3 bg-red-50 dark:bg-red-900/10 p-3 rounded-xl border border-red-100 dark:border-red-900/20">
                                                    <div
                                                        className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-800/30 flex items-center justify-center text-red-600 dark:text-red-400">
                                                        <span className="material-icons text-sm">priority_high</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-red-800 dark:text-red-300">Needs
                                                            Focus</p>
                                                        <p className="text-xs text-red-700 dark:text-red-400">Writing:
                                                            Task 2 Coherence</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Trusted by Section */}
                    <section className="py-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
                        <div
                            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div
                            className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                                    Trusted by <span className="text-primary">High Achievers</span>
                                </h2>
                                <p className="text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
                                    Join thousands of students who have improved their band scores and achieved their
                                    global dreams.
                                </p>
                            </div>
                            <div
                                className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-b border-gray-200 dark:border-gray-800 pb-12">
                                <div className="text-center">
                                    <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">50k+
                                    </div>
                                    <div
                                        className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">Active
                                        Students
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">1M+
                                    </div>
                                    <div
                                        className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">Tests
                                        Taken
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">4.8/5
                                    </div>
                                    <div
                                        className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">Average
                                        Rating
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">98%
                                    </div>
                                    <div
                                        className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">Goal
                                        Achievement
                                    </div>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div
                                    className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 relative group border border-gray-100 dark:border-gray-800">
                                    <div
                                        className="absolute top-8 right-8 text-primary/20 group-hover:text-primary/40 transition-colors">
                                        <span className="material-icons text-4xl">format_quote</span>
                                    </div>
                                    <div
                                        className="inline-block bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-full text-xs font-bold mb-6 border border-green-100 dark:border-green-800">
                                        Band 6.0 <span className="text-green-500 mx-1">→</span> 7.5
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 mb-8 relative z-10 leading-relaxed min-h-[80px]">
                                        "I was stuck at 6.0 for writing for months. After using the mock exams and model
                                        answers here, I finally understood what examiners look for."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img alt="Elena Rodriguez"
                                             className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md"
                                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdjHRfJJsaIjjCmGY1c1YlgKTjemi3EvUzxej17h6kxn2llcZGz2ote1nHtdOTkIt6pqfqTmHyO1_d_3BCu1XWc_IFfdmeobV9DlDc0P7WvYAjYGKrsI6b0Uxlshj2haxCK-tstnmNELL7i2PsPokwXCWwtKeKu3uOr6gPJzlGPPAX7qJ2HqU8sDtEHHKC472842XipyxuBOYBNaN87LFQCcwOTslsMEymYIOmYPOWfBzGWVh08r8hMwlgzirDB0Jci6qQIpmvgygr"/>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">Elena
                                                Rodriguez</h4>
                                            <div
                                                className="flex items-center gap-2 text-xs text-text-muted-light dark:text-text-muted-dark font-medium">
                                                <span>🇪🇸 Spain</span>
                                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                                <span>Academic</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 relative group border border-gray-100 dark:border-gray-800">
                                    <div
                                        className="absolute top-8 right-8 text-primary/20 group-hover:text-primary/40 transition-colors">
                                        <span className="material-icons text-4xl">format_quote</span>
                                    </div>
                                    <div
                                        className="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full text-xs font-bold mb-6 border border-blue-100 dark:border-blue-800">
                                        Band 5.5 <span className="text-blue-500 mx-1">→</span> 7.0 in 2 months
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 mb-8 relative z-10 leading-relaxed min-h-[80px]">
                                        "The speaking simulator is incredible. It helped me get used to the timing and
                                        pressure. I felt so much more confident walking into the real exam."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img alt="Wei Zhang"
                                             className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md"
                                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTjEmbUAE-6KFmaGWBDXr5Qax_cMRS24NY3MO8m2e8lG1Bq3xENg76C_cBd2ju95QG5ASIIW9qWC-OS6CXDsQ4gk7t63XH1JtKDh0lcSKIvCATdB6Hz1LtRbIGODgFbw9q9kI-A1XwjAxXuuCvk5WRgLdooVp5cnRu6hCXlHNfjg7GUIiw1sEJD0fr-XgEDSRkoe4ycwXpms4ER8w5lHpXARK4w6Lmfy9Qnc2as35qjYSF6YXWKqOczQ5MgYSWDcchr_ovm2Gs6D9L"/>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">Wei
                                                Zhang</h4>
                                            <div
                                                className="flex items-center gap-2 text-xs text-text-muted-light dark:text-text-muted-dark font-medium">
                                                <span>🇨🇳 China</span>
                                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                                <span>General</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 relative group border border-gray-100 dark:border-gray-800">
                                    <div
                                        className="absolute top-8 right-8 text-primary/20 group-hover:text-primary/40 transition-colors">
                                        <span className="material-icons text-4xl">format_quote</span>
                                    </div>
                                    <div
                                        className="inline-block bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-full text-xs font-bold mb-6 border border-purple-100 dark:border-purple-800">
                                        Band 6.5 <span className="text-purple-500 mx-1">→</span> 8.0
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 mb-8 relative z-10 leading-relaxed min-h-[80px]">
                                        "The detailed analytics showed me exactly where I was losing marks in Reading. I
                                        focused on my weak question types and my score skyrocketed."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img alt="Priya Patel"
                                             className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md"
                                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3GjYoo65N7_8hT40EsLukO7X4P1IjJkXrro2rm_uam5JDfObtgLRR4wAnpDH0iTAaOrnU35uRVVpPsVl987w4LSJ3Qiw2s4XlzuG1TducH5E0I2sMXx4E8C9_j9T3VNayQQfyUYXJZpKbWZx6ztklc7eXGl5aLJZJEQmQaEU2CAgomZNU5EuCz2kdwwNhg6JMvLrVTN9EvRcdyp6Jqnx_OzG3tRWTIq4M1qdEIXe_XkxDPrSZ4GtshQhL9IQRQboFWzn-e6LqKcE8"/>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">Priya
                                                Patel</h4>
                                            <div
                                                className="flex items-center gap-2 text-xs text-text-muted-light dark:text-text-muted-dark font-medium">
                                                <span>🇮🇳 India</span>
                                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                                <span>Academic</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Pricing Section */}
                    <section className="py-20 relative overflow-hidden" id="pricing">
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-surface-dark opacity-50 pointer-events-none"></div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Pricing
                                    Plans</h2>
                                <p className="text-xl text-text-muted-light dark:text-text-muted-dark">Choose the
                                    perfect plan to boost your IELTS score. Simple pricing, no hidden fees.</p>
                                <div className="mt-10 flex items-center justify-center gap-4">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">Monthly</span>
                                    <button
                                        className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 cursor-pointer group">
                                        <span className="sr-only">Toggle billing cycle</span>
                                        <span
                                            className="absolute left-1 top-1 bg-white shadow-sm w-6 h-6 rounded-full transition-transform group-hover:scale-110"></span>
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="text-lg font-medium text-gray-500 dark:text-gray-400">Yearly</span>
                                        <span
                                            className="bg-secondary/20 text-yellow-700 dark:text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-secondary/30 uppercase tracking-wide">Save 20%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                                <div
                                    className="bg-white dark:bg-surface-dark rounded-[2rem] p-8 lg:p-10 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 relative group">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Free
                                            Starter</h3>
                                        <p className="text-text-muted-light dark:text-text-muted-dark">Perfect for
                                            getting familiar with the IELTS format.</p>
                                    </div>
                                    <div className="flex items-baseline mb-8">
                                        <span
                                            className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">$0</span>
                                        <span
                                            className="ml-2 text-xl text-gray-500 dark:text-gray-400 font-medium">/month</span>
                                    </div>
                                    <button
                                        className="w-full py-4 px-6 rounded-xl border-2 border-primary text-primary font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 mb-8 focus:ring-4 focus:ring-primary/20">
                                        Start Free Practice
                                    </button>
                                    <div className="space-y-4">
                                        <p className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4">Features
                                            included:</p>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                                <span
                                                    className="material-icons text-green-500 text-xl flex-shrink-0">check_circle</span>
                                                <span>1 Full Mock Exam</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                                <span
                                                    className="material-icons text-green-500 text-xl flex-shrink-0">check_circle</span>
                                                <span>Basic Practice Questions</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                                <span
                                                    className="material-icons text-green-500 text-xl flex-shrink-0">check_circle</span>
                                                <span>Standard Results &amp; Scoring</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-400 dark:text-gray-600 opacity-75">
                                                <span className="material-icons text-xl flex-shrink-0">cancel</span>
                                                <span className="line-through">AI Writing &amp; Speaking Feedback</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-400 dark:text-gray-600 opacity-75">
                                                <span className="material-icons text-xl flex-shrink-0">cancel</span>
                                                <span className="line-through">Unlimited Mock Exams</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="bg-white dark:bg-surface-dark rounded-[2rem] p-8 lg:p-10 border-2 border-primary shadow-glow shadow-primary/20 relative transform md:-translate-y-6 z-10">
                                    <div
                                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<span
    className="bg-gradient-to-r from-primary to-accent text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1">
<span className="material-icons text-base">star</span> Most Popular
                    </span>
                                    </div>
                                    <div className="mb-6 mt-2">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">IELTS
                                            Pro</h3>
                                        <p className="text-text-muted-light dark:text-text-muted-dark">Everything you
                                            need to score Band 7.0+ guaranteed.</p>
                                    </div>
                                    <div className="flex items-baseline mb-8">
                                        <span
                                            className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">$29</span>
                                        <span
                                            className="ml-2 text-xl text-gray-500 dark:text-gray-400 font-medium">/month</span>
                                    </div>
                                    <button
                                        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 mb-8 focus:ring-4 focus:ring-primary/40">
                                        Upgrade to Premium
                                    </button>
                                    <div className="space-y-4">
                                        <p className="text-xs font-bold uppercase text-primary tracking-wider mb-4">Everything
                                            in Free, plus:</p>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3 text-gray-900 dark:text-white font-medium">
                                                <div className="bg-primary/10 p-0.5 rounded-full flex-shrink-0"><span
                                                    className="material-icons text-primary text-lg">check</span></div>
                                                <span>Unlimited Full Mock Exams</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-900 dark:text-white font-medium">
                                                <div className="bg-primary/10 p-0.5 rounded-full flex-shrink-0"><span
                                                    className="material-icons text-primary text-lg">check</span></div>
                                                <span>AI Writing &amp; Speaking Scoring</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-900 dark:text-white font-medium">
                                                <div className="bg-primary/10 p-0.5 rounded-full flex-shrink-0"><span
                                                    className="material-icons text-primary text-lg">check</span></div>
                                                <span>Detailed Band Score Analytics</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-900 dark:text-white font-medium">
                                                <div className="bg-primary/10 p-0.5 rounded-full flex-shrink-0"><span
                                                    className="material-icons text-primary text-lg">check</span></div>
                                                <span>Speaking Partner AI Simulator</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-gray-900 dark:text-white font-medium">
                                                <div className="bg-primary/10 p-0.5 rounded-full flex-shrink-0"><span
                                                    className="material-icons text-primary text-lg">check</span></div>
                                                <span>Priority 24/7 Support</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 text-center">
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark flex items-center justify-center gap-2">
                                    <span className="material-icons text-gray-400 text-base">lock</span>
                                    Secure payment with SSL Encryption. 7-day money-back guarantee.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* FAQ Section */}
                    <section className="py-20 bg-background-light dark:bg-background-dark">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Common Questions</span>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Frequently
                                    Asked Questions</h2>
                                <p className="mt-4 text-text-muted-light dark:text-text-muted-dark text-lg max-w-2xl mx-auto">
                                    Everything you need to know about our IELTS practice platform and features.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <details
                                    className="group bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md [&amp;_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 p-6 md:p-8 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                                                <span className="material-icons">help_outline</span>
                                            </div>
                                            <h3 className="font-bold text-lg">Is this similar to real IELTS?</h3>
                                        </div>
                                        <div
                                            className="white-space-nowrap text-gray-500 transition group-open:-rotate-180">
                                            <span className="material-icons">expand_more</span>
                                        </div>
                                    </summary>
                                    <div
                                        className="px-6 pb-6 md:px-8 md:pb-8 leading-relaxed text-text-muted-light dark:text-text-muted-dark border-t border-gray-100 dark:border-gray-800/50 pt-4">
                                        <p>
                                            Absolutely. Our practice tests are designed by former IELTS examiners to
                                            strictly adhere to the current IELTS exam structure, timing, and difficulty
                                            levels. Whether it's the audio speed in Listening or the complexity of
                                            Reading passages, we aim for a 99% simulation accuracy.
                                        </p>
                                    </div>
                                </details>
                                <details
                                    className="group bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md [&amp;_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 p-6 md:p-8 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                                                <span className="material-icons">psychology</span>
                                            </div>
                                            <h3 className="font-bold text-lg">How accurate is AI scoring?</h3>
                                        </div>
                                        <div
                                            className="white-space-nowrap text-gray-500 transition group-open:-rotate-180">
                                            <span className="material-icons">expand_more</span>
                                        </div>
                                    </summary>
                                    <div
                                        className="px-6 pb-6 md:px-8 md:pb-8 leading-relaxed text-text-muted-light dark:text-text-muted-dark border-t border-gray-100 dark:border-gray-800/50 pt-4">
                                        <p>
                                            Our AI scoring model is trained on thousands of real IELTS responses rated
                                            by certified examiners. It provides instant band scores with an accuracy
                                            rate within +/- 0.5 band of a human examiner, especially for Writing and
                                            Speaking components.
                                        </p>
                                    </div>
                                </details>
                                <details
                                    className="group bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md [&amp;_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 p-6 md:p-8 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="flex-shrink-0 w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                                                <span className="material-icons">school</span>
                                            </div>
                                            <h3 className="font-bold text-lg">Can beginners use this?</h3>
                                        </div>
                                        <div
                                            className="white-space-nowrap text-gray-500 transition group-open:-rotate-180">
                                            <span className="material-icons">expand_more</span>
                                        </div>
                                    </summary>
                                    <div
                                        className="px-6 pb-6 md:px-8 md:pb-8 leading-relaxed text-text-muted-light dark:text-text-muted-dark border-t border-gray-100 dark:border-gray-800/50 pt-4">
                                        <p>
                                            Yes! While our mock exams simulate the real difficulty, we also offer
                                            progressive practice modes. Beginners can start with untimed practice
                                            sessions and access detailed explanations for every answer to build their
                                            foundation before attempting full mock exams.
                                        </p>
                                    </div>
                                </details>
                                <details
                                    className="group bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md [&amp;_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 p-6 md:p-8 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                                                <span className="material-icons">compare_arrows</span>
                                            </div>
                                            <h3 className="font-bold text-lg">Academic vs General Training?</h3>
                                        </div>
                                        <div
                                            className="white-space-nowrap text-gray-500 transition group-open:-rotate-180">
                                            <span className="material-icons">expand_more</span>
                                        </div>
                                    </summary>
                                    <div
                                        className="px-6 pb-6 md:px-8 md:pb-8 leading-relaxed text-text-muted-light dark:text-text-muted-dark border-t border-gray-100 dark:border-gray-800/50 pt-4">
                                        <p>
                                            We support both! When you sign up or start a practice session, you can
                                            toggle between IELTS Academic (for university admission) and General
                                            Training (for migration or work). The Reading and Writing sections will
                                            automatically adjust to your selected module.
                                        </p>
                                    </div>
                                </details>
                                <details
                                    className="group bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md [&amp;_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 p-6 md:p-8 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500">
                                                <span className="material-icons">record_voice_over</span>
                                            </div>
                                            <h3 className="font-bold text-lg">Is speaking evaluated by AI or
                                                humans?</h3>
                                        </div>
                                        <div
                                            className="white-space-nowrap text-gray-500 transition group-open:-rotate-180">
                                            <span className="material-icons">expand_more</span>
                                        </div>
                                    </summary>
                                    <div
                                        className="px-6 pb-6 md:px-8 md:pb-8 leading-relaxed text-text-muted-light dark:text-text-muted-dark border-t border-gray-100 dark:border-gray-800/50 pt-4">
                                        <p>
                                            You get the best of both worlds. Our advanced Speech Recognition AI provides
                                            instant feedback on pronunciation, fluency, and vocabulary. For premium
                                            users, we also offer the option to have your speaking recordings reviewed by
                                            certified human IELTS tutors for personalized feedback.
                                        </p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </section>
                    {/* Start your ielts prep today Section */}

                    <section className="relative py-20 lg:py-28 overflow-hidden">
                        <div className="absolute inset-0 bg-primary dark:bg-blue-900">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-accent opacity-90 dark:opacity-80"></div>
                            <div
                                className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
                            <div
                                className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-accent opacity-20 rounded-full blur-3xl"></div>
                            <div className="absolute inset-0 opacity-10"
                                 style={{
                                     backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                                     backgroundSize: "30px 30px;"
                                 }}></div>
                        </div>
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <div className="max-w-3xl mx-auto">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                                    Start Your IELTS Preparation Today
                                </h2>
                                <p className="text-xl md:text-2xl text-blue-50 mb-10 leading-relaxed font-light">
                                    Join a community of achievers. Boost your confidence and improve your score with our
                                    comprehensive practice tools.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                                    <button
                                        className="w-full sm:w-auto bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
                                        Get Full Access
                                        <span
                                            className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                    <button
                                        className="w-full sm:w-auto bg-transparent border-2 border-white/40 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center backdrop-blur-sm">
                                        Try Free Mock Test
                                    </button>
                                </div>
                                <div
                                    className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-blue-100 text-sm font-medium">
                                    <div className="flex items-center gap-2">
                                        <span className="material-icons text-white text-base">check_circle</span>
                                        <span>No credit card needed</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-icons text-white text-base">check_circle</span>
                                        <span>Instant feedback</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-icons text-white text-base">check_circle</span>
                                        <span>7-day money back guarantee</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer
                        className="bg-white dark:bg-background-dark pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 cursor-pointer">
                                        <div className="relative w-8 h-8">
                                            <div
                                                className="absolute inset-0 bg-secondary rounded-full opacity-20"></div>
                                            <svg className="w-8 h-8 text-secondary" fill="currentColor"
                                                 viewBox="0 0 24 24">
                                                <circle className="text-secondary" cx="12" cy="12" fill-opacity="0.2"
                                                        r="10"></circle>
                                                <path d="M2 12C2 12 6 18 12 18C18 18 22 12 22 12" fill="none"
                                                      stroke="#06B6D4" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="3"></path>
                                                <circle className="text-secondary" cx="12" cy="12" fill="currentColor"
                                                        r="4"></circle>
                                            </svg>
                                        </div>
                                        <span
                                            className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">IELTERO</span>
                                    </div>
                                    <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-sm">
                                        Empowering students worldwide to achieve their desired IELTS scores through
                                        comprehensive practice, realistic simulations, and expert guidance.
                                    </p>
                                    <div className="flex gap-4">
                                        <a className="w-10 h-10 rounded-full bg-gray-50 dark:bg-surface-dark flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                                           href="#">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                            </svg>
                                        </a>
                                        <a className="w-10 h-10 rounded-full bg-gray-50 dark:bg-surface-dark flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                                           href="#">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                            </svg>
                                        </a>
                                        <a className="w-10 h-10 rounded-full bg-gray-50 dark:bg-surface-dark flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                                           href="#">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                            </svg>
                                        </a>
                                        <a className="w-10 h-10 rounded-full bg-gray-50 dark:bg-surface-dark flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                                           href="#">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5.106v-8.312c0-2.234.417-5.16 3.869-5.16 3.449 0 3.385 3.226 3.385 5.25v8.222h5.035v-9.083c0-4.526-.975-8.073-6.289-8.073-2.583 0-4.322 1.436-5.137 2.783v-2.627z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Practice</h4>
                                    <ul className="space-y-4">
                                        <li><a
                                            className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors duration-200 text-sm font-medium"
                                            href="#">Listening Practice</a></li>
                                        <li><a
                                            className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors duration-200 text-sm font-medium"
                                            href="#">Reading Tests</a></li>
                                        <li><a
                                            className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors duration-200 text-sm font-medium"
                                            href="#">Writing Tasks</a></li>
                                        <li><a
                                            className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors duration-200 text-sm font-medium"
                                            href="#">Speaking Simulators</a></li>
                                        <li><a
                                            className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors duration-200 text-sm font-medium"
                                            href="#">Full Mock Exam</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Company</h4>
                                    <ul className="space-y-4">
                                        <li><a
                                            className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors duration-200 text-sm font-medium"
                                            href="#">About Us</a></li>
                                        <li><a
                                            className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors duration-200 text-sm font-medium"
                                            href="#">Contact Support</a></li>
                                        <li><a
                                            className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors duration-200 text-sm font-medium"
                                            href="#">Privacy Policy</a></li>
                                        <li><a
                                            className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors duration-200 text-sm font-medium"
                                            href="#">Terms of Service</a></li>
                                        <li><a
                                            className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors duration-200 text-sm font-medium"
                                            href="#">Success Stories</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Stay
                                        Updated</h4>
                                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4">Subscribe
                                        to get the latest exam tips and platform updates.</p>
                                    <form className="space-y-3" >
                                        <div className="relative">
                                            <span
                                                className="material-icons absolute left-3 top-3 text-gray-400 text-sm">email</span>
                                            <input
                                                className="w-full bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                placeholder="Enter your email" type="email"/>
                                        </div>
                                        <button
                                            className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-2.5 rounded-xl text-sm transition-colors shadow-lg hover:shadow-blue-500/25"
                                            type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div
                                className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-sm text-gray-500 dark:text-gray-400">© 2026 IELTERO. All rights
                                    reserved.</p>
                                <div className="flex items-center gap-6">
<span className="text-xs text-gray-400 flex items-center gap-1">
<span className="material-icons text-sm">language</span> English (US)
                </span>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

        </>
    )
}