import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
    isLandingPage?: boolean;
    onGetStarted?: () => void;
}

export function Navbar({ isLandingPage = false, onGetStarted }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                        <div className="relative w-10 h-10">

                            <div className="absolute inset-0 bg-secondary rounded-full opacity-20"></div>
                            <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                                <circle className="text-secondary" cx="12" cy="12" fill-opacity="0.2" r="10"></circle>
                                <path d="M2 12C2 12 6 18 12 18C18 18 22 12 22 12" fill="none" stroke="#06B6D4"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                                <circle className="text-secondary" cx="12" cy="12" fill="currentColor" r="4"></circle>
                            </svg>
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IELTERO</span>
                    </div>
                        {/* Desktop Navigation */}
                        {isLandingPage ? (
                            <>
                                <div className="hidden md:flex items-center space-x-8">
                                    <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary font-medium transition-colors"
                                       href="#">Listening</a>
                                    <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary font-medium transition-colors"
                                       href="#">Reading</a>
                                    <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary font-medium transition-colors"
                                       href="#">Writing</a>
                                    <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary font-medium transition-colors"
                                       href="#">Speaking</a>
                                    <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary font-medium transition-colors"
                                       href="#">IELTS Mock Exam</a>
                                </div>
                                <div className="flex items-center space-x-4 ">
                                    <button
                                        onClick={onGetStarted}
                                        className="hidden md:block cursor-pointer bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30">
                                        Sign In
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="hidden md:flex items-center gap-4">
              <span className="text-gray-600">
                Welcome back, Student
              </span>
                                <div
                                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white">S</span>
                                </div>
                            </div>
                        )}

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                    {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-600"/>
                            ) : (
                                <Menu className="w-6 h-6 text-gray-600"/>
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200">
                            {isLandingPage ? (
                                <div className="flex flex-col gap-4 text-center">
                                    <a
                                        href="#listening"
                                        className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Listening
                                    </a>
                                    <a
                                        href="#reading"
                                        className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Reading
                                    </a>
                                    <a
                                        href="#writing"
                                        className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Writing
                                    </a>
                                    <a
                                        href="#speaking"
                                        className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Speaking
                                    </a>
                                    <a
                                        href="#mock-exam"
                                        className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        IELTS Mock Exam
                                    </a>
                                    <div className="flex items-center space-x-4 ">
                                        <div className="w-full flex justify-center">
                                            <button
                                                onClick={() => {
                                                    onGetStarted?.();
                                                    setMobileMenuOpen(false);
                                                }}
                                                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors w-[50%]"
                                            >
                                                Sign In
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-3 py-2">
                                    <div
                                        className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white">S</span>
                                    </div>
                                    <span className="text-gray-600">Welcome back, Student</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
        </nav>
);
}