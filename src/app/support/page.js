import PageTitle from "@/app/(with-gradient-image)/components/PageTitle.js";
import PageContent from "@/app/(with-gradient-image)/components/PageContent.js";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <PageTitle>Support</PageTitle>
            <PageContent>
                <p>
                    Thank you to our sponsors.
                </p>
                <div style={{
                    display: "flex",
                    flexFlow: "row no-wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    margin: "0",
                    position: "fixed",
                    left: "0"
                }}>
                    <Image src="/john-deere-logo.PNG" width={705} height={216} alt="John Deere Logo" />
                    <Image src="/carolina-orthodontics-&-children's-dentistry-logo.png" width={396} height={100} alt="Carolina Orthodontics & Children's Dentistry Logo" />
                </div>
            </PageContent>
        </>
    );
}