import ConnectWalletModal from "./ConnectWalletModal";

interface IScaffoldProp {
  children: React.ReactNode;
}

const Scaffold: React.FC<IScaffoldProp> = ({ children }) => {
  return (
    <>
      {/* <ConnectWalletModal /> */}
      <>{children}</>
    </>
  );
};

export default Scaffold;
