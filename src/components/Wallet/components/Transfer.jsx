import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import AddressInput from "../../AddressInput";
import TokenList from "./TokenList";

const styles = {
  card: {
    alignItems: "center",
    fontSize: "14px",
    width: "100%",
  },
  tranfer: {
    padding: "20px",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    fontSize: "14px",
  },
  header: {
    textAlign: "center",
    fontSize: "14px",
  },
  h3 : {
    fontSize: "0.90rem",
  },
  input: {
    width: "100%",
    outline: "none",
    fontSize: "14px",
    fontSize: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textverflow: "ellipsis",
    appearance: "textfield",
    color: "#041836",
    fontWeight: "700",
    border: "none",
    backgroundColor: "transparent",
  },
  select: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    gap: "20px",
  },

  row: {
    display: "flex",
    marginLeft: "25px",
    alignItems: "center",
    fontSize: "14px",
    gap: "10px",
    flexDirection: "row",
  },
  button: {
    marginTop: "10px",
    width: "100%",
    border: "0px",
    cursor: "pointer",
    fontSize: "13px",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    textTransform: "uppercase",
    borderRadius: "8px",
    outline: "0px",
    height: "46px",
    color: "white",
    backgroundColor: "#000000",
  },
  field: {
    backgroundColor: "aliceblue",
    borderRadius: "8px",
    height: "35px",
    alignItems: "center",
    fontSize: "14px",
    display: "flex",
    width: "100%",
    padding: "0 10px",
  },
};

function Transfer() {
  const { Moralis } = useMoralis();
  const [receiver, setReceiver] = useState();
  const [token, setToken] = useState();
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState();
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (token && amount && receiver) setTx({ amount, receiver, token });
  }, [token, amount, receiver]);

  async function transfer() {
    const { amount, receiver, token } = tx;
    const options = {
      type: "erc20",
      amount: Moralis.Units.Token(amount, token.decimals),
      receiver,
      contractAddress: token.token_address,
    };
    console.log(isPending);
    setIsPending(true);
    await Moralis.transfer(options)
      .then((tx) => {
        console.log(tx);
        setIsPending(false);
      })
      .catch((e) => {
        alert(e.message);
        setIsPending(false);
      });
  }

  return (
    <div style={styles.card}>
      <div style={styles.tranfer}>
        <div style={styles.header}>
          <h6>Transfer Assets</h6>
        </div>
        <div style={styles.select}>
          <h6>Address:</h6>
          <AddressInput
            autoFocus
            placeholder="Public Addresses (0x)"
            onChange={setReceiver}
          />
        </div>
        <div style={styles.select}>
          <h6>Amount:</h6>
          <div style={styles.field}>
            <input
              style={styles.input}
              placeholder="0.00"
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div style={styles.select}>
          <h6>Asset:</h6>
          {token && (
            <div className="row" style={styles.row}>
              {token.logo ? (
                <img
                  src={token.logo}
                  alt={token.symbol}
                  style={{
                    maxWidth: "15px",
                    maxHeight: "15px",
                    borderRadius: "15px",
                  }}
                />
              ) : (
                <img
                  src="https://etherscan.io/images/main/empty-token.png"
                  alt=""
                  style={{
                    maxWidth: "15px",
                    maxHeight: "15px",
                    borderRadius: "15px",
                  }}
                />
              )}

              <h4 style={styles.text}>{token.symbol}</h4>
            </div>
          )}
        </div>
        <button style={styles.button} disabled={!tx} onClick={() => transfer()}>
          {isPending ? <Loader /> : "Transfer"}
        </button>
      </div>
      <TokenList setToken={setToken} />
    </div>
  );
}

export default Transfer;

const Loader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: "auto", display: "block", shapeRendering: "auto" }}
    width="48px"
    height="48px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="white"
      strokeWidth="7"
      r="20"
      strokeDasharray="94.24777960769379 33.41592653589793"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
);
