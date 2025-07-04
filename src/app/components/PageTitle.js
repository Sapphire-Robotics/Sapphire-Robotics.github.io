import { poiretOne } from "../layout.js";

export default function PageTitle({ children }) {
    return (
        <h1 style={{
            width: "68vw",
            marginLeft: "32vw",
            textAlign: "left"
        }} className={poiretOne.className}>{children}</h1>
    );
}