export interface Weather {
    timestamp: string;
    temperature: number;
    condition: string;
    icon: string | null;
}