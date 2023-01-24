type address = {
  prefecture: string;
  municipality: string;
  town: string;
};
let addressInit: address = {
  prefecture: "",
  municipality: "",
  town: "",
};

export type { address };
export { addressInit };
