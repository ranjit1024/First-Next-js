export default function ({ children }: { children: React.ReactNode }) {
    return <div className="h-[100%]  w-[100%] flex-col">
        <h1>Flat 20 % off</h1>
        <div className="h-[100%] w-[100%] flex justify-center items-center font-[family-name:var(--font-geist-sans)] p-2">
            {children}
        </div>

    </div>
}