interface IRequirement {
	content: string;
	items: string[];
}

export interface IJob {
	id: number;
	company: string;
	logo: string;
	logoBackground: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	website: string;
	apply: string;
	description: string;
	requirements: IRequirement;
	role: IRequirement;
}
