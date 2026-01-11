export interface CompletedProject {
    id: string;
    name: string;
    category: string;
    totalRaised: string;
    investors: number;
    returnDelivered: string;
    duration: string;
    completedDate: string;
    status: string;
    contractType: string;
    description: string;
}

export interface ReportStat {
    value: string;
    label: string;
}
