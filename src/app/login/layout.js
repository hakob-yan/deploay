import { store } from "../redux/redux/store";

export default async function BuyCryptoLayout({ children }) {
  const name = store.getState().partner.partnerName;
  return (
    <>
      <h1 className="font-black">LOGIN PAGE</h1>
      <h1 className="text-red-400">{name}</h1>
      {children}
    </>
  );
}
