import PageTitle from "@/../src/app/components/PageTitle.js";
import PageContent from "@/../src/app/components/PageContent.js";
import Image from "next/image"

export default function Page() {
    return (
        <>
            <PageTitle>Placeholder Robotics Club</PageTitle>
            <PageContent>
                <p>
                  We are a robotics club located in Apex, North Carolina. This fall, we will be running two FLL teams.
                </p>
                <Image src="/placeholder_picture.png" width={1280} height={1280} alt="Placeholder image" style={{
                  width: "350px",
                  height: "350px"
                }} />
            </PageContent>
        </>
    );
}