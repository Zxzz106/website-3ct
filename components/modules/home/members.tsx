"use client";

import Image from "next/image";
import Link from "next/link";
import members from "@/public/res/members.json";

type Member = {
	name: string;
	avatar: string;
	research_topic?: string;
	email?: string;
	extern_url?: string;
	role?: string;
	office?: string;
	introduction?: string;
};

export default function Members() {
	const MemberCollection = ({
		members,
		type,
		type_en,
	}: {
		members: Member[];
		type: string;
		type_en: string;
	}) => {
		if (!members || members.length === 0) return null;

		return (
			<div className="w-full mb-4 last:mb-0">
				<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center flex items-center justify-center gap-4">
					<span className="h-0.5 w-8 bg-green-200 dark:bg-green-900"></span>
					{type}
					<span className="h-0.5 w-8 bg-green-200 dark:bg-green-900"></span>
				</h3>
				<div className="relative w-full overflow-hidden group">
					{/* Gradient Masks */}
					<div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-gray-50 dark:from-[#0a0a0a] to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-30" />
					<div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-gray-50 dark:from-[#0a0a0a] to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-30" />
					
					<div
						className="flex gap-8 w-max py-4 animate-marquee hover:[animation-play-state:paused]"
						style={{ animationDuration: `${members.length * 5}s` }}
					>
						{[...members, ...members].map((member, idx) => (
							<div
								key={`${member.name}-${idx}`}
								className="flex flex-col items-center w-40 group/item"
							>
								<div
									className="relative rounded-xl overflow-hidden mb-3 transition-all duration-500 bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700"
									style={{ width: "110px", height: "135px" }}
								>
									<Image
										src={`/res/members_img/${type_en.toLowerCase()}/${member.avatar}`}
										alt={member.name}
										fill
										className="object-cover object-center transition-transform duration-500 group-hover/item:scale-110"
									/>
								</div>
								<h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 text-center group-hover/item:text-green-600 dark:group-hover/item:text-green-400 transition-colors">
									{member.name}
								</h4>
								{member.research_topic && (
									<p className="text-[11px] leading-tight text-gray-500 dark:text-gray-400 text-center mt-1 px-2 line-clamp-2 italic">
										{member.research_topic}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	};
	return (
		<section id="members" className="scroll-mt-24 px-4 py-16 flex flex-col">
			<div className="relative z-10 mx-auto max-w-[90%] px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-10 text-center">
					<h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
						团队成员
					</h2>
					<div className="mt-4 mx-auto w-24 border-b-4 border-emerald-500 rounded-full"></div>
				</div>

				{/* Teachers Section */}
				<div className="w-full mb-24">
					<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-12 text-center flex items-center justify-center gap-4">
						<span className="h-0.5 w-8 bg-green-200 dark:bg-green-900"></span>
						教师队伍
						<span className="h-0.5 w-8 bg-green-200 dark:bg-green-900"></span>
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full mx-auto">
						{members.teacher.map((member) => (
							<Link
								key={member.name}
								href={member.extern_url ? member.extern_url : "#"}
								target="_blank"
								rel="noopener noreferrer"
								className="group"
							>
								<div className="bg-white dark:bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-sm p-8  transition-all duration-500 h-full flex flex-col items-center hover:shadow-lg">
									<div className="mb-6 relative">
										
										<div
											className="relative rounded-2xl overflow-hidden  dark:ring-gray-700  transition-all duration-500"
											style={{ width: "160px", height: "190px" }}
										>
											<Image
												src={`/res/members_img/teacher/${member.avatar}`}
												alt={member.name}
												fill
												className="object-cover object-center transition-transform duration-700 "
											/>
										</div>
									</div>
									<h4 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-1">
										{member.name}
									</h4>
									<p className="text-sm font-bold text-green-600 dark:text-green-400 text-center mb-4 tracking-widest uppercase">
										{member.role}
									</p>
									
									<div className="flex flex-col items-center space-y-2.5 mb-2 w-full">
										<div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
											<svg className="w-4 h-4 mr-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-10V4m0 10V4m-4 22h4" /></svg>
											{member.office}
										</div>
										{member.email && (
											<div 
												onClick={(e) => {
													e.preventDefault();
													e.stopPropagation();
													window.location.href = `mailto:${member.email}`;
												}}
												className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
											>
												<svg className="w-4 h-4 mr-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
												{member.email}
											</div>
										)}
									</div>
									
									<p className="text-sm text-gray-600 dark:text-gray-400 text-center line-clamp-4 leading-relaxed italic border-t border-gray-100 dark:border-gray-700/50 pt-6">
										&emsp;{member.introduction}
									</p>
								</div>
							</Link>
						))}
							</div>
				</div>

				<div className="w-full space-y-16">
					{MemberCollection({
						members: members.doctor,
						type: "博士生",
						type_en: "doctor",
					})}

					{MemberCollection({
						members: members.master,
						type: "硕士生",
						type_en: "master",
					})}

					{MemberCollection({
						members: members.alumni,
						type: "毕业生",
						type_en: "alumni",
					})}
				</div>
			</div>

			<style jsx global>{`
				@keyframes marquee {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				.animate-marquee {
					animation: marquee linear infinite;
					will-change: transform;
				}
			`}</style>
		</section>
	);
}