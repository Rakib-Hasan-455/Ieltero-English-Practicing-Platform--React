import './SignIn.css'
import {useNavigate} from "react-router-dom";

export default function SignIn() {
    const navigator = useNavigate();

    return ( <>
            <div
                className="font-body bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 antialiased h-screen w-full overflow-hidden flex flex-col lg:flex-row">
                <div
                    className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white dark:bg-surface-dark lg:w-1/2 xl:w-5/12 border-r border-gray-100 dark:border-gray-800 z-10 relative shadow-2xl lg:shadow-none">
                    <div className="flex items-center gap-3 mb-12 lg:mb-20 lg:ml-24"
                         onClick={() => navigator("/")}
                    >
                        <a className="flex items-center gap-3 group" href="#">
                            <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
                                <div className="absolute inset-0 bg-secondary rounded-full opacity-20"></div>
                                <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                                    <circle className="text-secondary" cx="12" cy="12" fill-opacity="0.2"
                                            r="10"></circle>
                                    <path d="M2 12C2 12 6 18 12 18C18 18 22 12 22 12" fill="none" stroke="#06B6D4"
                                          stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                                    <circle className="text-secondary" cx="12" cy="12" fill="currentColor"
                                            r="4"></circle>
                                </svg>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IELTERO</span>
                        </a>
                    </div>
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white font-display tracking-tight">
                                Welcome back
                            </h2>
                            <p className="mt-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                                Please enter your details to access your personalized practice plan.
                            </p>
                        </div>
                        <div className="mt-8">
                            <div className="grid grid-cols-1 gap-3">
                                <button
                                    className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-200 dark:border-gray-700 shadow-soft bg-white dark:bg-surface-dark text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all transform hover:-translate-y-0.5"
                                    type="button">
                                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
                                    </svg>
                                    Sign in with Google
                                </button>
                            </div>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span
                                        className="px-2 bg-white dark:bg-surface-dark text-gray-500 dark:text-gray-400">Or continue with email</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <form action="#" className="space-y-6" method="POST">
                                    <div>
                                        <label
                                            className="block text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 mb-1.5"
                                            htmlFor="email">
                                            Email address
                                        </label>
                                        <div className="mt-1">
                                            <input autoComplete="email"
                                                   placeholder={'youremail@example.com'}
                                                   className="appearance-none block w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary dark:bg-background-dark dark:text-white sm:text-sm transition-all"
                                                   id="email" name="email" required type="email"/>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label
                                            className="block text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 mb-1.5"
                                            htmlFor="password">
                                            Password
                                        </label>
                                        <div className="mt-1">
                                            <input autoComplete="current-password"
                                                   placeholder={'••••••••'}
                                                   className="appearance-none block w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm  placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary dark:bg-background-dark dark:text-white sm:text-sm transition-all"
                                                   id="password" name="password" required type="password"/>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                                                id="remember-me" name="remember-me" type="checkbox"/>
                                            <label
                                                className="ml-2 block text-sm text-gray-600 dark:text-gray-400 cursor-pointer select-none"
                                                htmlFor="remember-me">
                                                Remember me
                                            </label>
                                        </div>
                                        <div className="text-sm">
                                            <a className="font-semibold text-primary hover:text-blue-600 transition-colors"
                                               href="#">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-lg shadow-blue-500/25 text-sm font-bold text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:-translate-y-0.5"
                                            type="submit">
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                                Don't have an account?
                                <a className="font-bold text-primary hover:text-blue-500 transition-colors ml-1 "
                                   onClick={() => navigator("/sign-up")}>
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </div>
                    <div
                        className="mt-auto pt-10 flex gap-6 text-xs font-medium text-gray-400 justify-center lg:justify-start">
                        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                        <a className="hover:text-primary transition-colors" href="#">Help Center</a>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 xl:w-7/12  relative overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img alt="Abstract blue fluid 3D shapes representing modern learning"
                             className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYv8izxM3fM_FEB9oyC9jbT7nFpU5-o8TZ0_8X-rXhNCF1hsEboGXPGWzFi7cgwFdjJ2T9G_Sc4lqV6v0AkVkqJU5fJ8fwVUCpCY5uoJqyWYoPim5UQszDrssG44GsJeYR0hIWFuULCdRFqdxDfZSwsPHEtpSSqBd0jn_paJdbHAnIpIIf_xviUpt11olY4zvxXshdM2YdlLgI4nbxdfRDZnKTNiIvMISkiwz74NN_FKuZsf5NdiZxB9fFSE6Ttm_Ju4rp6w1Xceio"/>
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-900/90 mix-blend-multiply"></div>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-12">
                        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                            <div
                                className="absolute w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
                            <div
                                className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-[80px] opacity-30 -translate-x-10 translate-y-10"></div>
                            <img alt="Abstract dynamic shapes"
                                 className="relative z-20 w-4/5 h-auto object-contain drop-shadow-2xl floating-element rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)]"
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ2iwVWoetq9BdVUlnbBgkG2csqroqmzcucvF4AkKsYTLAhlnpONjAdq1kjE-keV8eN3eYQFoXy0LiU4J3-9nmrH4qgplOwrorzbCQFGaNjs89tbVfUtBX7wKFD8VjDR_hGLz-iOz0jJ-ziGZvC0DkjQV0wkNO1H-w78_wVpx_umJ9nkyd8tLMoEXacfolSKeySd1-pOnogy0gAOn4I87-ci8KkZDRnd5ABRgUUSKeieQHiflZ_qiqjSbCtzirZnnp-KjOjYtEV-vg"/>
                            <div
                                className="absolute top-1/4 -right-4 z-30 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-[bounce_4s_infinite]">
                                <div className="p-2 bg-green-500 rounded-lg text-white">
                                    <span className="material-icons text-xl">check_circle</span>
                                </div>
                                <div>
                                    <p className="text-xs text-blue-100 font-medium uppercase tracking-wide">Daily
                                        Goal</p>
                                    <p className="text-white font-bold text-sm">Completed</p>
                                </div>
                            </div>
                            <div
                                className="absolute bottom-1/4 -left-8 z-30 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-[bounce_5s_infinite_1s]">
                                <div className="p-2 bg-yellow-500 rounded-lg text-white">
                                    <span className="material-icons text-xl">trending_up</span>
                                </div>
                                <div>
                                    <p className="text-xs text-blue-100 font-medium uppercase tracking-wide">Score</p>
                                    <p className="text-white font-bold text-sm">Band 8.0 Achieved</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-20 mt-10 text-center max-w-md">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                                Elevate Your Learning
                            </h2>
                            <p className="text-blue-100 text-lg font-light leading-relaxed">
                                Experience a smarter way to prepare. Join a community of achievers and unlock your full
                                potential today.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}