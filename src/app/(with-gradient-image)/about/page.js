import PageTitle from "@/app/(with-gradient-image)/components/PageTitle.js";
import PageContent from "@/app/(with-gradient-image)/components/PageContent.js";

export default function Page() {
    return (
        <>
            <PageTitle>About</PageTitle>
            <PageContent>
                <p>
                    We were founded in 2024 as a homeschool coding club in North Carolina, and expanded to include students from all schools. 
                    Our founding members have taught coding classes to young students (including HTML, JavaScript, and Python), organized coding competitions, and mentored FLL teams.
                    Our mission is to introduce and spark interest in coding and robotics. We plan on expanding to host and mentor multiple FLL teams and coding activities to reach a wider audience.

                </p>
            </PageContent>
        </>
    );
}