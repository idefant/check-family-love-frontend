export const strToNum = () => (str: string) => {
  const formattedStr = str.replaceAll(' ', '');
  return formattedStr ? +formattedStr.replaceAll(',', '.') : '';
};

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
