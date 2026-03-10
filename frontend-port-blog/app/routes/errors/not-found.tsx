import {Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-8">Сторінку не знайдено</p>
            <Link to="/" className="text-blue-500 hover:underline">
                Повернутися на головну
            </Link>
        </div>
    )
}

export default NotFound;