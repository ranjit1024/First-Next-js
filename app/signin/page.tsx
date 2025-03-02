import Image from "next/image";

export default function Home() {
    return (
        <div className="grid  items-center justify-items-center min-h-screen    font-[family-name:var(--font-geist-sans)] width-[100%] grid-cols-2">
            <div className="w-[100%] h-[100%] bg-green-200 flex justify-center items-center">
                <p className="text-3xl ">Welcome to LalaLand</p>
            </div>
            <div className="w-[100%] flex items-center gap-2 justify-center flex-col">

                <input type="text" className="border-gray-300 border-1 p-2  rounded-sm w-[90%]" placeholder="Enter Your name " />
                <input type="text" className="border-gray-300 border-1 p-2  rounded-sm w-[90%]" placeholder="Enter Your name " />
                <input type="submit" className="border-gray-300 border-1 p-2  rounded-sm bg-green-600 hover:cursor-pointer mt-2 w-[90%]" placeholder="Enter Your name " />

            </div>
        </div>
    );
}