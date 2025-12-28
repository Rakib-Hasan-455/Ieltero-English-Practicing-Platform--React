import React from "react";

const IeltsListeningPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-gray-100 min-h-screen flex flex-col overflow-x-hidden">
            {/* ================= Header ================= */}
            <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark px-6 lg:px-10 py-3 relative z-40">
                <div className="flex items-center gap-4 text-primary">
                    <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
                        <span className="material-symbols-outlined">graphic_eq</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">IELTERO</h2>
                </div>

                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">
                        Dashboard
                    </a>
                    <a className="text-primary" href="#">
                        Practice Tests
                    </a>
                    <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">
                        My Progress
                    </a>
                    <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">
                        Profile
                    </a>
                </nav>

                <div className="md:hidden">
          <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
            menu
          </span>
                </div>
            </header>

            {/* ================= Library Section ================= */}
            <section className="px-6 lg:px-40 py-10 bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-black tracking-tight mb-2">
                                IELTS Listening Library
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400">
                                Select a Cambridge practice test to begin your session.
                            </p>
                        </div>

                        <div className="w-full md:w-96">
                            <div className="flex items-center h-12 rounded-lg bg-background-light dark:bg-background-dark border focus-within:border-primary/50">
                <span className="material-symbols-outlined px-4 text-gray-400">
                  search
                </span>
                                <input
                                    className="w-full bg-transparent border-none focus:ring-0 text-sm"
                                    placeholder="Search tests (e.g., Cambridge 12)..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {["All Tests", "Academic", "General Training", "Recent", "Not Started"].map(
                            (label, i) => (
                                <button
                                    key={label}
                                    className={`h-9 px-4 rounded-full text-sm font-medium whitespace-nowrap ${
                                        i === 0
                                            ? "bg-[#111418] text-white"
                                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                                >
                                    {label}
                                </button>
                            )
                        )}
                    </div>

                    {/* Test Cards (Example) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <TestCard
                            title="Cambridge IELTS 18"
                            subtitle="Released 2023 • 4 Tests Available"
                            badge="Academic"
                        />
                        <TestCard
                            title="Cambridge IELTS 17"
                            subtitle="Released 2022 • In Progress"
                            badge="General"
                        />
                        <TestCard
                            title="Cambridge IELTS 16"
                            subtitle="Released 2021 • 4 Tests Available"
                            badge="Academic"
                        />
                    </div>
                </div>
            </section>

            {/* ================= Sticky Audio Player ================= */}
            <div className="sticky top-0 bg-[#101922] text-white border-t border-gray-800 shadow-xl z-50">
                <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center gap-4">
                    <button className="size-12 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">
              play_arrow
            </span>
                    </button>
                    <div className="flex-1">
                        <p className="text-sm">
                            Now Playing: Cambridge 17, Test 2, Part 2
                        </p>
                        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden mt-1">
                            <div className="h-full w-1/2 bg-primary" />
                        </div>
                    </div>
                    <span className="text-sm font-mono">14:22 / 30:00</span>
                </div>
            </div>

            {/* ================= Main Content ================= */}
            <main className="flex-1 max-w-[1200px] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                {/* Questions */}
                <section className="flex-1 bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold mb-4">Questions 11–16</h2>

                    <Question number={11} text="The event will take place on the" suffix="of September." />
                    <Question number={12} text="Attendees are required to bring their" suffix="card for entry." />
                    <Question number={13} text="The total cost for the workshop is $" suffix="per person." />
                </section>

                {/* Navigator */}
                <aside className="lg:w-80 bg-white dark:bg-surface-dark p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              grid_view
            </span>
                        Navigator
                    </h3>

                    <div className="grid grid-cols-5 gap-2">
                        {Array.from({ length: 20 }, (_, i) => (
                            <button
                                key={i}
                                className={`size-9 rounded-lg font-bold text-sm ${
                                    i === 10
                                        ? "bg-primary text-white"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default IeltsListeningPage;

/* ================= Sub Components ================= */

interface TestCardProps {
    title: string;
    subtitle: string;
    badge: string;
}

const TestCard: React.FC<TestCardProps> = ({ title, subtitle, badge }) => {
    return (
        <div className="bg-white dark:bg-[#1e2933] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all">
            <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-t-xl relative">
        <span className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 px-2 py-1 rounded text-xs font-bold">
          {badge}
        </span>
            </div>
            <div className="p-5">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {subtitle}
                </p>

                <div className="grid grid-cols-4 gap-2 mt-4">
                    {["Part 1", "Part 2", "Part 3", "Part 4"].map((p) => (
                        <button
                            key={p}
                            className="h-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface QuestionProps {
    number: number;
    text: string;
    suffix: string;
}

const Question: React.FC<QuestionProps> = ({ number, text, suffix }) => {
    return (
        <div className="flex gap-2 py-3 border-b border-gray-200 dark:border-gray-800">
            <span className="font-bold text-primary">{number}.</span>
            <span>{text}</span>
            <input
                className="border-b border-gray-400 bg-transparent text-center w-40 focus:border-primary focus:ring-0"
                placeholder="Type answer"
            />
            <span>{suffix}</span>
        </div>
    );
};
