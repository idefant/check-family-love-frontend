export const strToNum = () => (str: string) => (
  str ? +str.replaceAll(',', '.').replaceAll(' ', '') : str
);

class Num {
  num: number;

  constructor(num?: number) {
    this.num = num || 0;
  }

  between(first: number, second: number) {
    const [min, max] = [first, second].sort();
    return this.num >= min && this.num <= max;
  }
}

const num = (num: number) => new Num(num);

export default num;
