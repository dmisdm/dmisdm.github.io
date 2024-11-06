import "@lottiefiles/lottie-player";
import type { JSX } from "solid-js";
import ProfileImg from "../assets/Profile.jpg";
import AirwallexIcon from "../assets/airwallex.svg";
import CodingIcon from "../assets/code.json?url";
import CultureAmpIcon from "../assets/cultureampicon.svg";
import ReadCloudIcon from "../assets/readcloud.svg";
import Primary from "../assets/primary.svg";
import RMITIcon from "../assets/rmit.png";
import { EvervaultCard } from "./EvervaultCard";
import { cn } from "./cn";

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
          <img src={props.imgSrc} alt="Logo" class="h-8 w-8 -mt-2 m-0" />
        ) : (
          <div class="bg-gray-500 rounded-full h-4 w-4" />
        )}
        <div class="h-[calc(100%-2.5rem)] w-[1px] bg-gray-200 absolute left-0 right-0 top-10 mx-auto" />
      </div>
      <div class="flex-1 flex-shrink-0 prose prose-sm print:max-w-4xl">
        {props.children}
      </div>
    </div>
  </div>
);

function InlinePill(props: { class?: string; children: JSX.Element }) {
  return (
    <span
      class={cn(
        "rounded-full bg-slate-400 text-white p-1 px-2 text-xs",
        props.class
      )}
    >
      {props.children}
    </span>
  );
}

function FancyBackground() {
  return (
    <>
      <div class="from-emerald-300 bg-gradient-to-b opacity-30 absolute h-[100%] w-full -z-10" />
    </>
  );
}

const CustomTitle = (props: { children: JSX.Element }) => (
  <h2 class="">{props.children}</h2>
);

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
                alt="Daniel Manning"
                class="rounded-full h-40 place-self-center shadow-md"
              />
              <div class="px-8 relative prose prose-sm">
                <h2 class="m-0">Daniel Manning</h2>
                <p class="m-0 text-center">
                  Software Engineer <br /> Aspiring Designer
                </p>
              </div>
            </div>
            <div class="col-span-1 grid items-end lg:hidden rounded-lg prose prose-sm p-2 print:grid print:place-content-end">
              <ContactDetails />
            </div>

            <section class="col-span-full relative rounded-lg p-6 text-center border-2 shadow-2xl prose prose-sm mx-auto max-w-full bg-slate-800 prose-invert print-color-adjust">
              <EvervaultCard>
                <div class="absolute top-4 left-0 border-t-2 border-slate-500 w-full" />
                <div class="absolute top-1 left-2 h-2 w-2 rounded-full bg-red-300" />
                <div class="absolute top-1 left-5 h-2 w-2 rounded-full bg-amber-300" />
                <div class="absolute top-1 left-8 h-2 w-2 rounded-full bg-green-300" />

                <div class="brightness-200">
                  {/*@ts-ignore*/}
                  <lottie-player
                    autoplay
                    loop
                    mode="bounce"
                    src={CodingIcon}
                    class="h-24 p-4 w-24 mx-auto "
                  />
                </div>
                <h2 class="m-0 pb-4 font-serif ">
                  Full stack software engineer with a passion for creating
                  beautiful user experiences
                </h2>
                <p class=" ">
                  My expertise lies in modern web development and
                  infrastructure, with a focus on Next.JS, React, TypeScript,
                  AWS, MongoDB and Postgres, and Deno/NodeJS.
                </p>
              </EvervaultCard>
            </section>
          </div>

          <Padding size={4} />
          <section class="flex flex-col gap-4">
            <h2 class="text-center text-2xl mb-0 font-serif">Experience</h2>
            <ExperienceCard imgSrc={Primary}>
              <h3 class="m-0 ">
                <a href="https://primary.tech">Primary</a> (since Aug 2024)
                <br />
                <small>Senior Software Engineer</small>
              </h3>

              <div class="pt-2 pb-6  inline-flex gap-2 flex-wrap">
                <InlinePill class="bg-neutral-700">Remix</InlinePill>
                <InlinePill class="bg-sky-500">React</InlinePill>
                <InlinePill class="bg-blue-500">TypeScript</InlinePill>
                <InlinePill class="bg-cyan-400">Tailwind</InlinePill>
                <InlinePill class="bg-green-500">NodeJS</InlinePill>
                <InlinePill class="bg-sky-600">PostgreSQL</InlinePill>
                <InlinePill class="bg-indigo-500">Prisma</InlinePill>
              </div>

              <p class="m-0">
                A fast-paced Sydney-based fintech startup tackling treasury
                management. Specializing in frontend product development with
                React+TypeScript in Remix, I worked closely with designers to
                bring polished, user-centered experiences to life. Known for
                bridging gaps, proposing innovative solutions, and executing
                with a ‘get-it-done’ mindset to deliver impactful features
                across the full stack.
              </p>
            </ExperienceCard>
            <ExperienceCard imgSrc={ReadCloudIcon}>
              <h3 class="m-0 ">
                <a href="https://readcloud.com">ReadCloud</a> (Mar 2023 - Aug
                2024)
                <br />
                <small>Lead Software Engineer</small>
              </h3>

              <div class="pt-2 pb-6  inline-flex gap-2 flex-wrap">
                <InlinePill class="bg-sky-500">React</InlinePill>
                <InlinePill class="bg-blue-500">TypeScript</InlinePill>
                <InlinePill class="bg-cyan-400">Tailwind</InlinePill>
                <InlinePill class="bg-green-500">NodeJS</InlinePill>
                <InlinePill class="bg-slate-700">Deno</InlinePill>
                <InlinePill class="bg-yellow-500">AWS</InlinePill>
                <InlinePill class="bg-sky-600">PostgreSQL</InlinePill>
                <InlinePill class="bg-green-400">MongoDB</InlinePill>
                <InlinePill class="bg-sky-500">PHP</InlinePill>
                <InlinePill class="bg-red-500">Java</InlinePill>
                <InlinePill class="bg-fuchsia-500">Kotlin</InlinePill>
              </div>

              <p class="m-0">
                Leading a small team of engineers, involving: planning,
                management, mentoring, hiring, design, product development.
                <br /> I've led and significantly contributed to projects such
                as:
              </p>
              <ul>
                <li>
                  A full stack LMS plugin served to ~10k active users, written
                  with: React, TypeScript, shadcn/ui + Tailwind, Deno Deploy,
                  Supabase (postgres), and PHP for a Moodle integration.
                </li>
                <li>A component library based on shadcn/ui</li>
                <li>
                  AWS cost savings and optimizations, and the migration of
                  existing infrastruction to CDK + SST
                </li>
                <li>
                  Introducing observability infrastructure like CloudWatch,
                  Sentry, and analytics using PostHog
                </li>
                <li>
                  Maintaining and migrating legacy PHP and Python
                  APIs/applications
                </li>
                <li>Maintaining a Java + Kotlin (Spring) API</li>
              </ul>
            </ExperienceCard>
            <ExperienceCard imgSrc={CultureAmpIcon}>
              <h3 class="m-0 ">
                <a href="https://cultureamp.com">CultureAmp</a> (Nov 2019 - Mar
                2023)
                <br />
                <small>Snr. Software Engineer</small>
              </h3>
              <div class="pt-2 pb-6  inline-flex gap-2 flex-wrap">
                <InlinePill class="bg-sky-500">React</InlinePill>
                <InlinePill class="bg-blue-500">TypeScript</InlinePill>
                <InlinePill class="bg-green-500">NodeJS</InlinePill>
                <InlinePill class="bg-yellow-500">AWS</InlinePill>
                <InlinePill class="bg-fuchsia-500">Kotlin</InlinePill>
                <InlinePill class="bg-sky-400">Elm</InlinePill>
              </div>

              <p class="m-0">
                Full stack development using React, TypeScript, NodeJS, Kotlin,
                Elm, and historically Flow and Ruby. Innovated and maintained
                in-house design system and component library (
                <a href="https://cultureamp.design">Kaizen Design System</a>
                ). Gained SRE experience using AWS + CDK. Worked in projects
                using event sourcing/CQRS. Worked mostly in the team responsible
                for maintaining the health of frontend tooling and development
                throughout the company, for example deplying and maintaining
                Renovate bot (for dependency updates).
              </p>
            </ExperienceCard>
            <ExperienceCard imgSrc={ReadCloudIcon}>
              <h3 class="m-0 ">
                <a href="https://readcloud.com/">ReadCloud</a> (Oct 2017 - Nov
                2019)
                <br />
                <small>Software Engineer</small>
              </h3>
              <div class="pt-2 pb-6  inline-flex gap-2 flex-wrap">
                <InlinePill class="bg-sky-500">React</InlinePill>
                <InlinePill class="bg-blue-500">TypeScript</InlinePill>
                <InlinePill class="bg-green-500">NodeJS</InlinePill>
                <InlinePill class="bg-green-400">MongoDB</InlinePill>
                <InlinePill class="bg-yellow-500">AWS</InlinePill>
                <InlinePill class="bg-red-500">Java</InlinePill>
                <InlinePill class="bg-fuchsia-500">Kotlin</InlinePill>
              </div>
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
              <h3 class="m-0">
                <a href="https://www.airwallex.com/">Airwallex</a> (Nov 2016 -
                Oct 2017)
                <br />
                <small>Junior-Mid Software Engineer</small>
              </h3>

              <div class="pt-2 pb-6  inline-flex gap-2 flex-wrap">
                <InlinePill class="bg-sky-500">React</InlinePill>
                <InlinePill class="bg-blue-500">TypeScript</InlinePill>
                <InlinePill class="bg-amber-300 text-black">Flow</InlinePill>
                <InlinePill class="bg-sky-400">Docker</InlinePill>
                <InlinePill class="bg-red-500">Java</InlinePill>
                <InlinePill class="bg-fuchsia-500">Kotlin</InlinePill>
                <InlinePill class="bg-rose-500">CassandraDB</InlinePill>
              </div>
              <p class="m-0">
                Mostly frontend engineer with exposure to Kotlin, Java + Spring,
                React, Typescript + Flow. Additionally, I gained experience with
                distributed systems such as Cassandra DB, RabbitMQ, and is in
                this job where I became more advanced with Docker (incl. Compose
                and Swarm, and some Kubernetes).
              </p>
            </ExperienceCard>
          </section>
          <div style={{ "page-break-after": "always", clear: "both" }} />
          <hr class="border-gray-300 py-4" />
          <section>
            <h2 class="text-center mb-0 font-serif text-2xl">Education</h2>

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
              <p>
                Later in 2022, I began a PhD into the intersection between deep
                reinforcement learning (e.g. PPO) and large pretrained language
                models (e.g. GPT, BERT), to understand how we can improve
                overall reasoining capabilities in sequential decision making. I
                intensively study how these language models perform and can be
                used to play text-based games like{" "}
                <a href="https://www.pcjs.org/software/pcx86/game/infocom/zork1/">
                  Zork
                </a>
                , and, at the time, found unanswered research questions relating
                to their inability to determine which actions they can make, and
                what their long term effects are. My passion lies here: to give
                language models the ability to think <em>slowly</em> rather than
                quickly.
                <br />
                After about a year of research, it became clear that academia
                isn't all that it seems. Personal circumstances and life goals
                shift, and my language and reasoning ideas felt irrelevant under
                the shadow of the LLM boom. If I undertake this again, overseas
                (probably EU) academic models seem like the way to go!
              </p>
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
                project + internship at ReadCloud in 2015. This degree along
                with it's real-world experience led to my career in software
                engineering, with a focus on web development and the ecosystem
                surrounding it (backend, frontend, infrastructure/AWS etc).
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
      <footer class="print:bg-transparent  print:relative sticky top-0 border-t-2 border-slate-400 print:border-none p-4 w-full grid gap-4">
        <div class="grid grid-flow-row sm:grid-flow-col sm:place-items-center place-content-center text-end sm:text-start gap-2 sm:gap-4 prose prose-sm text-xs m-auto w-full">
          <ContactDetails />
        </div>
        <div class="prose prose-sm place-self-center print:hidden">
          <small>
            Made with ❤️ by Daniel Manning, using SolidJS + Vite + Tailwind
          </small>
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
