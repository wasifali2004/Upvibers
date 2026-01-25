"use client"

import React from 'react';
import { Banner } from "@/components/banner";
import { cn } from '@/lib/utils';
import { ArrowRightIcon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Announcement() {
	const [show, setShow] = React.useState(true);

	return (
		<div className="relative w-full bg-white dark:bg-black transition-colors duration-300">
			{/* Radial spotlight */}
			<div
				aria-hidden="true"
				className={cn(
					'pointer-events-none absolute -top-1/3 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
					'bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_50%)]',
					'blur-[30px]',
				)}
			/>
			<Banner
				show={show}
				onHide={() => setShow(false)}
				variant="default"
				title="🚀 AI-Powered Productivity is Here!"
				description="Transform your idle time into growth moments"
				showShade={true}
				closable={true}
				icon={<Sparkles className="text-black dark:text-white transition-colors duration-300" />}
				action={
					<Button
						onClick={() => setShow(false)}
						className="inline-flex items-center gap-1 rounded-md bg-black/10 dark:bg-white/10 px-3 py-1.5 text-sm font-medium text-black dark:text-white transition-colors hover:bg-black/20 dark:hover:bg-white/20"
						variant="ghost"
					>
						Get Started
						<ArrowRightIcon className="h-3 w-3" />
					</Button>
				}
			/>
		</div>
	);
}
