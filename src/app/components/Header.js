'use client'
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

function HeaderLink({ children, href, className }) {
    return (
        <a href={href} className={className == styles.logo ? null : styles.headerLink} style={{
            color: href == usePathname() ? "#3a57d6" : "#9e0099"
        }}>{children}</a>
    );
}

export default function Header() {
    return (
        <div style={{
            backgroundColor: "#f0fbff",
            height: "90px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            justifyContent: "space-around",
            position: "fixed",
            top: "0",
            width: "100vw",
            boxShadow: "1px 5px 5px rgb(201, 218, 255)"
        }}>
            <HeaderLink href="/" className={styles.logo}><Image src="/logo.svg" alt="Sapphire Robotics logo" width={161} height={150} /></HeaderLink>
            <div>
                <HeaderLink href="/">Home</HeaderLink>
                <HeaderLink href="/about">About</HeaderLink>
                <HeaderLink href="/support">Support</HeaderLink>
            </div>
        </div>
    );
}