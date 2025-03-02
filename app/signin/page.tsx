import Image from "next/image";

export default function Home() {
    return (
        <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] width-[100%] grid-cols-2">
            <div>
                <p>Welcome to lalLand</p>
            </div>
            <div>
                <input type="text" className="border-2 p-1 border-black-400" placeholder="Enter Your name " />
            </div>
        </div>
    );
}