import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome to Agile Connect SCM" />
            <div
                className="min-h-screen flex items-center justify-center bg-themeGradient bg-blend-darken before:bg-noise before:absolute before:bg-cover before:opacity-85 before:-z-10 before:h-full before:w-full"
            >

                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl mb-2 font-extrabold text-indigo-700 dark:text-white">
                            Agile Connect SCM
                        </h1>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            Your Supply Chain Management solution powered by
                            Laravel and React
                        </p>
                    </div>

                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="block w-full py-2 px-4 bg-indigo-500 text-white rounded-md text-center font-semibold hover:bg-indigo-600 focus:outline focus:outline-2 focus:outline-red-500"
                        >
                            Go to Dashboard
                        </Link>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <Link
                                href={route("login")}
                                className="block w-full py-2 px-4 bg-indigo-500 text-white rounded-md text-center font-semibold hover:bg-indigo-600 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="block w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-md text-center font-semibold hover:bg-gray-300 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
