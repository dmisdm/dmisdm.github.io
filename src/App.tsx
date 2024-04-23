import "@lottiefiles/lottie-player";
import { type JSX } from "solid-js";
import ProfileImg from "../assets/Profile.jpg";
import AirwallexIcon from "../assets/airwallex.svg";
import CodingIcon from "../assets/code.json?url";
import CultureAmpIcon from "../assets/cultureampicon.svg";
import ReadCloudIcon from "../assets/readcloud.svg";
import RMITIcon from "../assets/rmit.png";
import { EvervaultCard } from "./EvervaultCard";

const Card = (props: { children: JSX.Element; class?: string }) => (
  <div class={"rounded-lg p-6 " + (props.class ?? "")}>{props.children}</div>
);

const Padding = (props: { size?: number }) => (
  <div style={{ padding: `${(props.size ?? 1) / 2}rem` }} />
);

const ExperienceCard = (props: {
  class?: string;
  children: JSX.Element;
  imgSrc?: string;
}) => (
  <div class={`py-8 ${props.class} break-inside-avoid`}>
    <div class="flex">
      <div class="lg:basis-20 p-2 flex justify-center items-start relative">
        {props.imgSrc ? (
          <img src={props.imgSrc} class="h-8 w-8 -mt-2 m-0" />
        ) : (
          <div class="bg-gray-500 rounded-full h-4 w-4"></div>
        )}
        <div class="h-[calc(100%-2.5rem)] w-[1px] bg-gray-200 absolute left-0 right-0 top-10 mx-auto" />
      </div>
      <div class="flex-1 flex-shrink-0 prose prose-sm print:max-w-4xl">
        {props.children}
      </div>
    </div>
  </div>
);

function FancyBackground() {
  return (
    <>
      <div class="from-emerald-300 bg-gradient-to-b opacity-30 absolute h-[100%] w-full -z-10" />
    </>
  );
}

const App = () => {
  return (
    <>
      <FancyBackground />

      <div class="flex flex-col min-h-screen print:text-[12px]">
        <header class="grid place-items-center w-full print:hidden lg:border-b-2 py-4 lg:border-slate-300 lg:sticky lg:top-0 lg:bg-white z-10">
          <div class="prose prose-sm hidden lg:grid grid-flow-row lg:grid-flow-col gap-4 text-xs w-full place-items-end text-end lg:text-start lg:place-items-center px-2 lg:px-0">
            <ContactDetails />
          </div>
        </header>
        <main class="flex-1 print:pt-4 lg:pt-[20vh] pt-4 max-w-2xl print:max-w-4xl mx-auto px-4 pb-4 ">
          <div class="grid sm:grid-cols-3 place-items-center sm:place-items-stretch gap-4">
            <div class="grid lg:place-content-center print:place-content-start place-content-start gap-4 py-2  rounded-lg print:col-span-2 col-span-2 lg:col-span-full">
              <img
                src={ProfileImg}
                alt="A profile picture of Daniel Manning"
                class="rounded-full h-40 place-self-center "
              />
              <div class="px-8 relative prose prose-sm">
                <h2 class="m-0">Daniel Manning</h2>
                <p class="m-0 text-center">
                  Software Engineer <br /> AI Researcher
                </p>
              </div>
            </div>
            <div class="col-span-1 grid items-end lg:hidden rounded-lg prose prose-sm p-2 print:grid print:place-content-end">
              <ContactDetails />
            </div>

            <section class="col-span-full relative rounded-lg p-6 text-center border-2 border-slate-500 prose prose-sm mx-auto max-w-full">
              <EvervaultCard>
                <div class="absolute top-4 left-0 border-t-2 border-slate-500 w-full" />
                <div class="absolute top-1 left-2 h-2 w-2 rounded-full bg-red-300" />
                <div class="absolute top-1 left-5 h-2 w-2 rounded-full bg-amber-300" />
                <div class="absolute top-1 left-8 h-2 w-2 rounded-full bg-green-300" />

                <div class="grayscale">
                  {/*@ts-ignore*/}
                  <lottie-player
                    autoplay
                    loop
                    mode="bounce"
                    src={CodingIcon}
                    class="h-24 p-4 w-24 mx-auto"
                  />
                </div>
                <h2 class="m-0 pb-4 font-serif mix-blend-multiply">
                  Full stack software engineer and AI researcher with a passion
                  for creating beautiful user experiences.
                </h2>
                <p class="text-blue-800 mix-blend-multiply">
                  My expertise lies in modern web development and
                  infrastructure, with a focus on Next.JS, React, TypeScript,
                  AWS, MongoDB and Postgres, and Deno/NodeJS.
                </p>
                <p class="text-end m-0 text-blue-800 mix-blend-multiply">
                  <small>(made using SolidJS + Vite + Tailwind)</small>
                </p>
              </EvervaultCard>
            </section>
          </div>

          <Padding size={4} />
          <section class="flex flex-col gap-4">
            <h2 class="text-center text-2xl mb-0 font-serif">Experience</h2>
            <ExperienceCard imgSrc={ReadCloudIcon}>
              <h3 class="m-0 pb-4">
                <a href="https://readcloud.com">ReadCloud</a> (since Mar 2023)
                <br />
                <small>Lead Software Engineer</small>
              </h3>

              <p class="m-0">
                An introduction into leading a small team of engineers, which
                involved planning, management and mentoring, hiring, and product
                development.
                <br /> In this role, I lead the development/integration of:
              </p>
              <ul>
                <li>
                  Technologies like Next.JS, AWS CDK + SST, and Supabase, for
                  solving a diverse range of problems in a scalable manner
                </li>
                <li>A component library based on shadcn/ui</li>
                <li>
                  AWS cost savings and optimizations, and the migration of
                  existing infrastruction to CDK + SST
                </li>
                <li>
                  Observability infrastructure such as CloudWatch, Sentry, and
                  PostHog
                </li>
                <li>
                  Maintaining and partially migrating legacy PHP and Python
                  applications
                </li>
              </ul>
            </ExperienceCard>
            <ExperienceCard imgSrc={CultureAmpIcon}>
              <h3 class="m-0 pb-4">
                <a href="https://cultureamp.com">CultureAmp</a> (Nov 2019 - Mar
                2023)
                <br />
                <small>Snr. Software Engineer</small>
              </h3>

              <p class="m-0">
                Full stack development using React, TypeScript, NodeJS, Kotlin,
                Elm, and historically Flow and Ruby. Innovated and maintained
                in-house design system and component library (
                <a href="https://cultureamp.design">Kaizen Design System</a>
                ). Gained SRE experience using AWS, and exposure to event
                sourcing/CQRS. Worked mostly in the team responsible for
                maintaining the health of frontend tooling and development
                throughout the company, for example deplying and maintaining
                Renovate bot
              </p>
            </ExperienceCard>
            <ExperienceCard imgSrc={ReadCloudIcon}>
              <h3 class="m-0 pb-4">
                <a href="https://readcloud.com/">ReadCloud</a> (Oct 2017 - Nov
                2019)
                <br />
                <small>Software Engineer</small>
              </h3>
              <p class="m-0">
                Full stack engineer at an EduTech company. This involved getting
                my hands dirty with a large number of technologies, mostly
                React, Typescript, NodeJS, Java, and MongoDB. Being one of the
                very few developers, I enjoyed the full experience of setting up
                infrastructure on vanilla VMs with docker, later moving to AWS
                and automating through Gitlab's CI, also taking on some design
                of UIs.
              </p>
            </ExperienceCard>
            <ExperienceCard imgSrc={AirwallexIcon}>
              <h3 class="m-0 pb-4">
                <a href="https://www.airwallex.com/">Airwallex</a> (Nov 2016 -
                Oct 2017)
                <br />
                <small>Junior-Mid Software Engineer</small>
              </h3>
              <p class="m-0">
                Mostly frontend engineer with exposure to Kotlin, Java + Spring,
                React, Typescript + Flow. Additionally, I gained experience with
                distributed systems such as Cassandra DB, RabbitMQ, and is in
                this job where I became more advanced with Docker (incl. Compose
                and Swarm, and some Kubernetes).
              </p>
            </ExperienceCard>

            <ExperienceCard imgSrc={ReadCloudIcon}>
              <h3 class="m-0 pb-4">
                <a href="https://readcloud.com/">ReadCloud</a> (Feb 2015 - Nov
                2016)
                <br />
                <small>Intern and Junior Software Engineer</small>
              </h3>
              <p class="m-0">
                Similar to the position above at ReadCloud but on a smaller
                scale with Angular, NodeJS, Java and MongoDB.
              </p>
            </ExperienceCard>
          </section>
          <hr class="border-gray-300 py-4" />
          <section>
            <h2 class="text-center mb-0 font-serif text-2xl">Education</h2>
            <ExperienceCard imgSrc={RMITIcon}>
              <h3 class="m-0 pb-4">
                Doctor of Philosophy (PhD. Computer Science)
                <br />
                <small>since Mar 2022 - deferred</small>
                <br />
                <small>RMIT</small>
              </h3>
              <p class="m-0">
                Eight months of academic research into the intersection between
                deep reinforcement learning (e.g. PPO) and large pretrained
                language models (e.g. GPT, BERT), to understand how we can
                improve overall reasoining capabilities in sequential decision
                making. I intensively studied how these language models perform
                and can be used to play text-based games like{" "}
                <a href="https://www.pcjs.org/software/pcx86/game/infocom/zork1/">
                  Zork
                </a>
                , and, at the time, found unanswered research questions relating
                to their inability to determine which actions they can make, and
                what their long term effects are. My passion lies here: to give
                language models the ability to think <em>slowly</em> rather than
                quickly.
              </p>
            </ExperienceCard>
            <ExperienceCard imgSrc={RMITIcon}>
              <h3 class="m-0 pb-4">
                Bachelor of Science (Computer Science) Honours 1st Class
                <br />
                <small>Jan 2020 - June 2021</small>
                <br />
                <small>RMIT</small>
              </h3>
              <p class="m-0">
                Computer science honours degree with a focus on research,
                completing a 6 month thesis on the topic of fairness in multi
                armed bandits (in the recommendation domain), along with
                engaging electives involving AI techniques in games (heavy focus
                on reinforcement learning), and cloud infrastructure
                development.
              </p>
              <p>
                <a href="https://www.myequals.net/sharelink/99cc95c7-f9af-42b6-9f4c-98fb89ed72d7/fe59eb01-3da5-4959-8f9c-b50d40ec44db">
                  Transcript
                </a>{" "}
                |{" "}
                <a href="https://danielmanning.notion.site/Group-fairness-in-recommendation-bandits-30c82e785d394c89998f8604964ece5b">
                  Thesis
                </a>
              </p>
              <div class="max-w-xs">
                {[
                  [<strong>Course</strong>, <strong>Mark</strong>],
                  ["Honours Research Project (Thesis)", "89%"],
                  ["Research Methods", "86%"],
                  ["Games and AI Techniques", "95%"],
                  ["Cloud Computing (AWS and GCP)", "95%"],
                ].map((row) => (
                  <div class="flex justify-between">
                    <div>{row[0]}</div>
                    <div>{row[1]}</div>
                  </div>
                ))}
                <p class="text-end m-0">GPA: 4.0</p>
              </div>
              <br />
            </ExperienceCard>
            <ExperienceCard imgSrc={RMITIcon}>
              <h3 class="m-0 pb-4">
                Bachelor of Software Engineering
                <br />
                <small>Jan 2013 - Nov 2016</small>
                <br />
                <small>RMIT</small>
              </h3>
              <p class="m-0">
                Array of subjects (see transcript for list) such as low level
                assembly programming, advanced mathematics for computing, AI,
                object oriented software design, web dev, and an industry
                project at ReadCloud. This degree along with it's internship
                experience led to my career in software engineering with a focus
                on web service development and the ecosystem surrounding it
                (backend, frontend, infrastructure/AWS etc)
              </p>
              <p class="flex justify-between max-w-xs">
                <a href="https://www.myequals.net/sharelink/99cc95c7-f9af-42b6-9f4c-98fb89ed72d7/fe59eb01-3da5-4959-8f9c-b50d40ec44db">
                  Transcript
                </a>
                <span class="text-end m-0">GPA: 4.0</span>
              </p>
            </ExperienceCard>
          </section>
          <Padding size={2} />
          <section>
            <h2 class="text-center font-serif text-2xl">
              Referees available on request
            </h2>
          </section>
        </main>
      </div>
      <footer class="print:bg-transparent text-white print:relative sticky top-0  border-slate-400 p-4 w-full ">
        <div class="grid grid-flow-row sm:grid-flow-col sm:place-items-center place-content-end text-end sm:text-start gap-2 sm:gap-4 prose prose-sm text-xs m-auto w-full">
          <ContactDetails />
        </div>
      </footer>
    </>
  );
};

export default App;
function LinkedInLink() {
  return (
    <a href="https://linkedin.com/in/dmcmanning">linkedin.com/in/dmcmanning</a>
  );
}

function MobileLink() {
  return <a href="tel:+61413406990">+61413406990</a>;
}

function EmailLink() {
  return (
    <a href="mailto:danielmanning213@gmail.com">danielmanning213@gmail.com</a>
  );
}

function ContactDetails() {
  return (
    <>
      <div>
        <small>Email</small>
        <br />
        <strong>
          <EmailLink />
        </strong>
      </div>
      <div>
        <small>Mobile</small>
        <br />
        <strong>
          <MobileLink />
        </strong>
      </div>
      <div>
        <small>Linkedin</small>
        <br />
        <strong>
          <LinkedInLink />
        </strong>
      </div>
      <div>
        <small>Website</small>
        <br />
        <strong>
          <a href="https://dmisdm.github.io">dmisdm.github.io</a>
        </strong>
      </div>
    </>
  );
}
