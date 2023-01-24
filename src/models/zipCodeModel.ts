type result = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
};
let resultInit: result = {
  address1: "",
  address2: "",
  address3: "",
  kana1: "",
  kana2: "",
  kana3: "",
  prefcode: "",
  zipcode: "",
};
type addressInfo = {
  message: string;
  results: Array<result> | null;
  status: number;
};
let addressInfoInit: addressInfo = {
    message: "",
    results: [resultInit],
    status: 0,
  };

export type { addressInfo };
export { addressInfoInit };
