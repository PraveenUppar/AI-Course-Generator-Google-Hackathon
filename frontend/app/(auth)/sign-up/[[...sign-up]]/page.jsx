import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome to Neo Course</h2>
        <SignUp/>
    </div>
</div>;
}


