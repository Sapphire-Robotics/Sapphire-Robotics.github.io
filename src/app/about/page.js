import PageTitle from "@/../src/app/components/PageTitle.js";
import PageContent from "@/../src/app/components/PageContent.js";

export default function Page() {
    return (
        <>
            <PageTitle>About</PageTitle>
            <PageContent>
                <p>
                  We are a robotics club located in Apex, North Carolina. This fall, we will be running two FLL teams.
                </p>
            </PageContent>
        </>
    );
}