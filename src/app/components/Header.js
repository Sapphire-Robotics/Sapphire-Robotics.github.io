function HeaderLink({ children, href }) {
    return (
        <a href={href} style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.3em",
            color: "#fadbff",
            margin: "35px"
        }}>{children}</a>
    );
}

export default function Header() {
    return (
        <div style={{
            backgroundColor: "#5b489c",
            height: "75px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            justifyContent: "space-around"
        }}>
            <HeaderLink href="/"><span style={{
                color: "#f24bea",
                fontSize: "1.5em"
            }}>LOGO</span></HeaderLink>
            <div>
                <HeaderLink href="/">Home</HeaderLink>
                <HeaderLink href="/about">About</HeaderLink>
                <HeaderLink href="/support">Support</HeaderLink>
            </div>
        </div>
    );
}