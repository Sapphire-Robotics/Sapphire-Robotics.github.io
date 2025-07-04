import PageTitle from "@/../src/app/components/PageTitle.js";
import PageContent from "@/../src/app/components/PageContent.js";
import Image from "next/image"

export default function Page() {
    return (
        <>
            <PageTitle>Sapphire Robotics</PageTitle>
            <PageContent>
                <Image src="/fllPicture.jpg" width={479} height={606} alt="Placeholder image" style={{
                    position: "absolute",
                    left: "200px",
                    width: "300px",
                    height: "fit-content"
                }} />
                <p>
                    We help youth develop collaboration and communication skills by having them solve challenging engineering problems together.
                    <br />We participate in our local FIRST LEGO League Challenge competitions in North Carolina.
                </p>
                <h2>
                    What is FIRST LEGO League?
                </h2>
                <p>
                    "FIRST® LEGO® League introduces science, technology, engineering, and math (STEM) to children ages 4-16 through fun, exciting hands-on learning. Participants gain real-world problem solving experience through a guided, global robotics program, helping today's students and teachers build a better future together. Our three divisions inspire youth to experiment and grow their critical thinking, coding, and design skills through hands-on STEM learning and robotics." (Source: <a href="https://www.firstlegoleague.org/about" style={{
                        color: "#fadbff"
                    }}>FIRST LEGO League</a>
                </p>
            </PageContent>
        </>
    );
}