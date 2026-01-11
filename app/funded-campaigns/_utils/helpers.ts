export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-BD", {
        style: "currency",
        currency: "BDT",
        minimumFractionDigits: 0,
    }).format(amount);
};

export const calculateProgress = (raised: number, total: number): number => {
    return Math.round((raised / total) * 100);
};
