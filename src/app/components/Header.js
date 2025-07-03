'use client'
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

function HeaderLink({ children, href }) {
    return (
        <a href={href} className={styles.headerLink} style={{
            color: href == usePathname() ? "#96bfff" : "#fadbff"
        }}>{children}</a>
    );
}

export default function Header() {
    return (
        <div style={{
            backgroundColor: "#2c3b69",
            height: "75px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            justifyContent: "space-around",
            position: "fixed",
            top: "0",
            width: "100vw"
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