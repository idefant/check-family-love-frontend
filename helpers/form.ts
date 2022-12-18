export const vdNum = (value: number) => !Number.isNaN(value) || 'Должно быть числом';
export const vdInt = (value: number) => Number.isInteger(value) || 'Число должно быть целым';
