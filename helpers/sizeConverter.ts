class SizeConverter {
  bytes: number;

  constructor(bytes: number) {
    this.bytes = bytes;
  }

  to(units: 'kb' | 'mb') {
    const actions = {
      kb: () => this.bytes / 2 ** 10,
      mb: () => this.bytes / 2 ** 20,
    };
    return actions[units]();
  }
}

const convertSize = (bytes: number) => new SizeConverter(bytes);

export default convertSize;
