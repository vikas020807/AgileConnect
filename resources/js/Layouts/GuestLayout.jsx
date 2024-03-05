import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        // <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
        <div
            className="min-h-screen flex flex-col sm:justify-center items-center pt-0 bg-themeGradient bg-blend-darken before:bg-noise before:absolute before:bg-cover before:opacity-85 before:-z-10 before:h-full before:w-full"
        >
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
