function HeaderLink({ children, href }) {
    return (
        <a href={href} style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.3em",
            color: "#fadbff",
            margin: "15px"
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
            paddingLeft: "20px"
        }}>
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/about">About</HeaderLink>
            <HeaderLink href="/mission">Mission</HeaderLink>
        </div>
    );
}