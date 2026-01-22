"use client";
import Link from "next/link";

export default function Research() {
        return (
        <section id="research" className="scroll-mt-24 px-4 py-16 flex flex-col">
            <div className="flex flex-col items-center">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                        学术经纬
                    </h2>
                    <div className="mt-4 mx-auto max-w-7xl w-24 border-b-4 border-emerald-500 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 w-[80%] flex-1">


                    <div className="flex flex-col h-full group cursor-pointer items-center p-6">
                        <Link href="/research/funds" className="mt-5 justify-center items-center flex flex-col">
                            <p className="fas fa-7x fa-flask-vial text-green-800 mb-6"></p>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">科研项目</h3>
                        </Link>
                    </div>

                    <div className="flex flex-col h-full group cursor-pointer items-center p-6 ">
                        <Link href="/research/journals" className="mt-5 justify-center items-center flex flex-col">
                            <p className="fas fa-7x fa-book text-green-800 mb-6"></p>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">期刊论文</h3>
                        </Link>
                    </div>

                    <div className="flex flex-col h-full group cursor-pointer items-center p-6">
                        <Link href="/research/conferences" className="mt-5 justify-center items-center flex flex-col">
                            <p className="fas fa-7x fa-users text-green-800 mb-6"></p>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">学术会议</h3>
                        </Link>
                    </div>

                    <div className="flex flex-col h-full group cursor-pointer items-center p-6">
                        <Link href="/research/patents" className="mt-5 justify-center items-center flex flex-col">
                            <p className="fas fa-7x fa-file-contract text-green-800 mb-6"></p>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">专利获奖</h3>
                        </Link>
                    </div>

                    <div className="flex flex-col h-full group cursor-pointer items-center p-6">
                        <Link href="/research/competitions" className="mt-5 justify-center items-center flex flex-col">
                            <p className="fas fa-7x fa-microscope text-green-800 mb-6"></p>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">仪器设备</h3>
                        </Link>
                    </div>

                    <div className="flex flex-col h-full group cursor-pointer items-center p-6">
                        <Link href="/research/databases" className="mt-5 justify-center items-center flex flex-col">
                            <p className="fas fa-7x fa-database text-green-800 mb-6"></p>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">数据共享</h3>
                        </Link>
                    </div>
                </div>

                
            </div>
        </section>
    );
}