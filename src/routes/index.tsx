import type { JSX } from "solid-js";
import ProfileImg from "../assets/Profile.jpg";
import AirwallexIcon from "../assets/airwallex.svg";
import CultureAmpIcon from "../assets/cultureampicon.svg";
import ReadCloudIcon from "../assets/readcloud.svg";
import LaptopIcon from "../assets/Laptop.png";
import Primary from "../assets/primary.svg";
import RMITIcon from "../assets/rmit.png";
import UmiIcon from "../assets/umi.png";
import PlantBrokerIcon from "../assets/plantbroker.avif";
import { EvervaultCard } from "../components/EvervaultCard";
import { cn } from "../lib/cn";
import {
  LucideProps,
  Sparkle,
  ScrollText,
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  GlobeIcon,
} from "lucide-solid";
import Particles from "~/components/Particles";

const ExperienceCard = (props: {
  class?: string;
  children: JSX.Element;
  imgSrc?: string;
  Icon?: (props: LucideProps) => JSX.Element;
}) => (
  <div class={`${props.class} break-inside-avoid`}>
    <div class="flex">
      <div class="lg:basis-20 p-2 flex justify-center items-start relative">
        {props.imgSrc ? (
          <img src={props.imgSrc} alt="Logo" class="h-8 w-8 -mt-2 m-0" />
        ) : props.Icon ? (
          <props.Icon class="h-8 w-8 -mt-2 m-0" />
        ) : (
          <div class="bg-gray-500 rounded-full h-4 w-4" />
        )}
        <div class="h-[calc(100%-2.5rem)] w-[0px]  absolute left-0 right-0 top-10 mx-auto text-slate-300" />
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

const CustomTitle = (props: { children: JSX.Element }) => (
  <h2 class="">{props.children}</h2>
);

const App = () => {
  return (
    <div>
      <div class="size-full fixed top-0 left-0 -z-10 print:hidden">
        <Particles
          particleColors={["#eee", "#fff"]}
          particleCount={200}
          particleSpread={5}
          speed={0.03}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          particleHoverFactor={0.1}
        />
      </div>
      <div class="flex flex-col min-h-screen print:text-[12px] font-mono tracking-tight">
        <main class="flex-1 print:pt-12 lg:pt-[20vh] pt-12 max-w-2xl print:max-w-4xl mx-auto px-4 pb-4 grid lg:gap-32 gap-20 print:gap-12 [&_h3>a]:font-semibold">
          <div class="grid sm:grid-cols-3  sm:place-items-stretch gap-2">
            <div class="grid   gap-4   rounded-lg  col-span-full lg:col-span-full">
              <div class="max-w-none relative prose prose-sm lg:flex print:flex justify-between items-center justify-self-stretch">
                <h2 class="m-0 font-serif not-prose text-2xl">
                  Daniel Manning
                </h2>
                <div class="flex gap-1 print:mt-2">
                  <p class="m-0 text-center">Software Engineer,</p>
                  <p class="m-0 text-center">Co-founder.</p>
                </div>
              </div>
            </div>

            <div class=" text-[14px] text-start   col-span-full border rounded-lg p-4 border-slate-400 bg-white">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <div class="flex items-start gap-4">
                  <img
                    src={ProfileImg}
                    alt="Daniel Manning — Software Engineer"
                    class="rounded-2xl mt-1 h-20 w-20 object-cover border border-gray-300"
                    loading="lazy"
                    width="160"
                    height="160"
                  />
                  <div>
                    <h1 id="intro-heading" class="m-0 text-lg font-serif">
                      Hey - I'm Dan.
                    </h1>
                    <p class="m-0 text-sm text-slate-700">
                      I design and build full-stack applications, focusing on
                      seamless user experiences and impactful, high-quality
                      projects.
                    </p>
                  </div>
                </div>

                <div class="ml-auto flex gap-2 items-center print:hidden">
                  <a
                    href="/resume.pdf"
                    download
                    class="whitespace-nowrap inline-block rounded bg-slate-800 text-white px-3 py-1 text-sm hover:bg-slate-700"
                    aria-label="Download résumé (PDF)"
                  >
                    Download Résumé
                  </a>
                </div>
              </div>
            </div>
            <div class="max-w-none col-span-full justify-between prose flex gap-2 items-end  rounded-lg  text-sm font-normal  print:hidden">
              <ContactDetailsCompact />
            </div>
            <div class="max-w-none col-span-full justify-between prose gap-2 items-end lg:hidden rounded-lg  text-sm font-normal p-2 hidden print:flex">
              <ContactDetails hideLabels />
            </div>
          </div>

          <section class="grid gap-6">
            <h2 class="text-start text-xl text-slate-500 mb-0 font-serif lg:ps-20 ps-12 print:p-0">
              Experience
              <hr />
            </h2>
            <div class="grid gap-16 print:gap-8">
              <ExperienceCard imgSrc={Primary}>
                <h3 class="m-0 ">
                  <a href="https://primary.tech">Primary</a> (Aug 2024 - Jun
                  2025)
                  <br />
                  <small>Senior/Lead Software Engineer</small>
                </h3>

                <div class="pt-2 pb-4  inline-flex gap-2 flex-wrap">
                  <InlinePill class="bg-neutral-700">Remix</InlinePill>
                  <InlinePill class="bg-sky-500">React</InlinePill>
                  <InlinePill class="bg-blue-500">TypeScript</InlinePill>
                  <InlinePill class="bg-cyan-400">Tailwind</InlinePill>
                  <InlinePill class="bg-green-500">NodeJS</InlinePill>
                  <InlinePill class="bg-sky-600">PostgreSQL</InlinePill>
                  <InlinePill class="bg-indigo-500">Prisma</InlinePill>
                </div>

                <ul class="m-0">
                  <li>
                    Spearheaded front-end development using React + TypeScript
                    in Remix, collaborating with designers to build polished,
                    user-centric interfaces.
                  </li>
                  <li>
                    Delivered impactful features across the full stack by
                    bridging technical gaps, proposing innovative solutions, and
                    maintaining a “get-it-done” mindset.
                  </li>
                  <li>
                    Led and planned product-delivering projects in collaboration
                    with engineering and design.
                  </li>
                </ul>
              </ExperienceCard>
              <ExperienceCard imgSrc={ReadCloudIcon}>
                <h3 class="m-0 ">
                  <a href="https://readcloud.com">ReadCloud</a> (Mar 2023 - Aug
                  2024)
                  <br />
                  <small>Senior/Lead Software Engineer</small>
                </h3>

                <div class="pt-2 pb-4  inline-flex gap-2 flex-wrap">
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

                <ul class="m-0">
                  <li>
                    Led a small team of engineers through planning, mentoring,
                    and hands-on development of core projects, including a
                    full-stack LMS plugin used by ~10k active users.
                  </li>
                  <li>
                    Initiated AWS cost savings and optimizations, and the
                    migration of existing infrastruction to CDK + SST.
                  </li>
                  <li>
                    Introduced observability infrastructure like CloudWatch,
                    Sentry, and analytics using PostHog.
                  </li>
                  <li>
                    Maintained and/or migrated legacy PHP, Python, and Java +
                    Kotlin systems.
                  </li>
                  <li>
                    Exposed to a wide variety of tools and frameworks, including
                    Tauri, React Native and Expo as native app solutions.
                    Additionally, education management infrastructure such as
                    Canvas, Moodle, SchoolBox, and VETtrak in particular.
                  </li>
                </ul>
              </ExperienceCard>
              {/* Print:margin top hack - just to get it a bit below the top of a page */}
              <ExperienceCard class=" print:mt-8" imgSrc={CultureAmpIcon}>
                <h3 class="m-0">
                  <a href="https://cultureamp.com">CultureAmp</a> (Nov 2019 -
                  Mar 2023)
                  <br />
                  <small>Senior Software Engineer</small>
                </h3>
                <div class="pt-2 pb-4  inline-flex gap-2 flex-wrap">
                  <InlinePill class="bg-sky-500">React</InlinePill>
                  <InlinePill class="bg-blue-500">TypeScript</InlinePill>
                  <InlinePill class="bg-green-500">NodeJS</InlinePill>
                  <InlinePill class="bg-yellow-500">AWS</InlinePill>
                  <InlinePill class="bg-fuchsia-500">Kotlin</InlinePill>
                  <InlinePill class="bg-sky-400">Elm</InlinePill>
                </div>

                <ul class="m-0">
                  <li>
                    Contributed to full-stack development projects involving
                    React, TypeScript, NodeJS, and Kotlin.
                  </li>
                  <li>
                    Maintained the in-house design system (Kaizen Design System)
                    and optimized development processes across teams by
                    automating dependency updates using Renovate.
                  </li>
                  <li>
                    Collaborated on SRE-focused projects involving AWS and CDK,
                    enhancing system reliability and deployment efficiency.
                  </li>
                  <li>
                    Worked on event-sourcing architectures and CQRS-based
                    applications.
                  </li>
                </ul>
              </ExperienceCard>
              <ExperienceCard imgSrc={ReadCloudIcon}>
                <h3 class="m-0 ">
                  <a href="https://readcloud.com/">ReadCloud</a> (Oct 2017 - Nov
                  2019)
                  <br />
                  <small>Software Engineer</small>
                </h3>
                <div class="pt-2 pb-4  inline-flex gap-2 flex-wrap">
                  <InlinePill class="bg-sky-500">React</InlinePill>
                  <InlinePill class="bg-blue-500">TypeScript</InlinePill>
                  <InlinePill class="bg-green-500">NodeJS</InlinePill>
                  <InlinePill class="bg-green-400">MongoDB</InlinePill>
                  <InlinePill class="bg-yellow-500">AWS</InlinePill>
                  <InlinePill class="bg-red-500">Java</InlinePill>
                  <InlinePill class="bg-fuchsia-500">Kotlin</InlinePill>
                </div>
                <ul class="m-0">
                  <li>
                    Developed scalable features using React, TypeScript, NodeJS,
                    and MongoDB.
                  </li>
                  <li>
                    Migrated infrastructure from Docker-based deployments on
                    vanilla VMs to AWS-backed automated CI/CD pipelines.
                  </li>
                  <li>
                    Designed intuitive user interfaces in collaboration with
                    designers, improving product adoption.
                  </li>
                </ul>
              </ExperienceCard>
              <ExperienceCard imgSrc={AirwallexIcon}>
                <h3 class="m-0">
                  <a href="https://www.airwallex.com/">Airwallex</a> (Nov 2016 -
                  Oct 2017)
                  <br />
                  <small>Junior-Mid Software Engineer</small>
                </h3>

                <div class="pt-2 pb-4  inline-flex gap-2 flex-wrap">
                  <InlinePill class="bg-sky-500">React</InlinePill>
                  <InlinePill class="bg-blue-500">TypeScript</InlinePill>
                  <InlinePill class="bg-amber-300 text-black">Flow</InlinePill>
                  <InlinePill class="bg-sky-400">Docker</InlinePill>
                  <InlinePill class="bg-red-500">Java</InlinePill>
                  <InlinePill class="bg-fuchsia-500">Kotlin</InlinePill>
                  <InlinePill class="bg-rose-500">CassandraDB</InlinePill>
                </div>
                <ul class="m-0">
                  <li>
                    Mostly frontend engineer with exposure to Kotlin, Java +
                    Spring, React, Typescript + Flow.
                  </li>
                  <li>
                    Gained experience with distributed systems such as Cassandra
                    DB, RabbitMQ
                  </li>
                  <li>
                    Became adept with Docker (incl. Compose and Swarm, and some
                    Kubernetes)
                  </li>
                </ul>
              </ExperienceCard>
            </div>
          </section>

          <section class="grid gap-6">
            <h2 class="text-start mb-0 font-serif text-xl lg:ps-20 print:ps-0 ps-12 text-slate-500 ">
              Education
              <hr />
            </h2>
            <div class="grid gap-16 print:gap-8">
              <ExperienceCard imgSrc={RMITIcon}>
                <h3 class="m-0 pb-4">
                  Bachelor of Science (Computer Science) Honours 1st Class
                  <br />
                  <small>Jan 2020 - June 2021</small>
                  <br />
                  <small>RMIT</small>
                </h3>
                <p class="m-0 print:hidden">
                  Computer science honours degree with a focus on research,
                  completing a 6 month thesis on the topic of fairness in multi
                  armed bandits (in the recommendation domain), along with
                  engaging electives involving AI techniques in games (heavy
                  focus on reinforcement learning), and cloud infrastructure
                  development.
                </p>
                <p class="max-w-xs print:m-0">
                  <a href="https://www.myequals.net/sharelink/99cc95c7-f9af-42b6-9f4c-98fb89ed72d7/fe59eb01-3da5-4959-8f9c-b50d40ec44db">
                    Transcript
                  </a>{" "}
                  |{" "}
                  <a href="https://danielmanning.notion.site/Group-fairness-in-recommendation-bandits-30c82e785d394c89998f8604964ece5b">
                    Thesis
                  </a>
                  <span class="float-end m-0 hidden print:inline">
                    GPA: 4.0
                  </span>
                </p>
                <div class="max-w-xs print:hidden">
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
                <br class="print:hidden" />
                <p class="print:hidden">
                  Later in 2022, I began a PhD into the intersection between
                  deep reinforcement learning (e.g. PPO) and large pretrained
                  language models (e.g. GPT, BERT), to understand how we can
                  improve overall reasoining capabilities in sequential decision
                  making. I intensively study how these language models perform
                  and can be used to play text-based games like{" "}
                  <a href="https://www.pcjs.org/software/pcx86/game/infocom/zork1/">
                    Zork
                  </a>
                  , and, at the time, found unanswered research questions
                  relating to their inability to determine which actions they
                  can make, and what their long term effects are. My passion
                  lies here: to give language models the ability to think{" "}
                  <em>slowly</em> rather than quickly.
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

                <p class="flex justify-between max-w-xs print:m-0">
                  <a href="https://www.myequals.net/sharelink/99cc95c7-f9af-42b6-9f4c-98fb89ed72d7/fe59eb01-3da5-4959-8f9c-b50d40ec44db">
                    Transcript
                  </a>
                  <span class="text-end m-0">GPA: 4.0</span>
                </p>
              </ExperienceCard>
            </div>
          </section>

          <section class="grid gap-6 print:mt-4">
            <h2 class="text-start mb-0 font-serif text-xl text-slate-500 print:ps-0 lg:ps-20 ps-12 break-before-page ">
              Projects <hr />
            </h2>
            <div class="grid gap-16 print:gap-8">
              <ExperienceCard imgSrc={UmiIcon}>
                <h3 class="m-0 pb-4">
                  <a href="https://umi.rmit.edu.au/">Umi Chatbot</a> (Aug 2025 -
                  Current)
                  <br />
                  <small>Engineer and Research Assistant</small>
                </h3>
                <p class="m-0">
                  This project is about uplifting Umi - a chatbot for helping
                  people navigate online abuse of personal and sensitive images.
                  It's packed with useful knowledge about what to say and when,
                  and about relevant legislation. We're now improving it's user
                  experience, ability to collect more meaningful and
                  researchable data, and use lessons learned making{" "}
                  <a href="#atlas">Atlas</a> to greatly improve information
                  retrieval and conversational quality.
                </p>
              </ExperienceCard>
              <ExperienceCard imgSrc={PlantBrokerIcon}>
                <h3 class="m-0 pb-4">
                  <a href="https://theplantbroker.com.au">The Plant Broker</a>{" "}
                  (Jan 2025 - Current)
                  <br />
                  <small>Consulting Engineer</small>
                </h3>
                <p class="m-0">
                  A Shopify store selling plants online to metro and regional
                  Melbourne, where I develop backend automation solutions to
                  solve stock/logistical problems that are key to the business'
                  success. This project gave me a lot of experience in scraping,
                  background jobs in NextJS, and Shopify's domain models (their
                  GraphQL schema in particular).
                </p>
              </ExperienceCard>
              <ExperienceCard Icon={ScrollText}>
                <h3 class="m-0 pb-4">
                  <a href="https://facctconference.org/static/papers24/facct24-104.pdf">
                    Equalised Odds is not Equal Individual Odds: Post-processing
                    for Group and Individual Fairness
                  </a>{" "}
                  (FAccT 2024)
                  <br />
                  <small>Co-author</small>
                </h3>
                <p class="m-0">
                  This paper highlights a fundamental tension between group
                  fairness (e.g. accuracy between demographics) and individual
                  fairness (e.g. accuracy between any two people). We show that
                  widely used existing post-processing methods involving
                  randomisation violate individual fairness and prevent some
                  groups from ever accessing the same classification odds as
                  others. To address this, we introduce a new fairness notion
                  called equalised individual odds and propose continuous,
                  monotonic probability functions constrained by Lipschitz
                  continuity to replace step-like decision rules. This method
                  ensures smooth treatment across thresholds, preserves
                  predictive accuracy, and guarantees that all individuals can
                  access the full range of classification odds available to any
                  group. The approach demonstrates, on widely used test sets,
                  that it can maintain group fairness while improving individual
                  fairness and transparency, thereby reconciling the conflict
                  between these two fairness objectives.
                </p>
              </ExperienceCard>
            </div>
          </section>

          <section>
            <h2 class="text-center font-serif text-xl">
              Referees available on request
            </h2>
          </section>
        </main>
      </div>
      <div class="py-4" />
      <footer class="print:bg-transparent  print:relative sticky top-0 border-t-2 border-slate-400 print:border-none py-4 w-full grid gap-4">
        <div class="grid grid-flow-row sm:grid-flow-col sm:place-items-center place-content-center text-end sm:text-start gap-2 sm:gap-4 prose prose-sm text-xs m-auto w-full">
          <ContactDetails />
        </div>
        <div class="prose prose-sm place-self-center print:hidden">
          <small>
            Made with ❤️ by Daniel Manning, using SolidJS + Tailwind
          </small>
        </div>
      </footer>
    </div>
  );
};

export default App;
function LinkedInLink({ children }: { children?: JSX.Element }) {
  return (
    <a href="https://linkedin.com/in/dmcmanning">
      {children || "linkedin.com/in/dmcmanning"}
    </a>
  );
}

function MobileLink({ children }: { children?: JSX.Element }) {
  return <a href="tel:+61413406990">{children || "+61413406990"}</a>;
}

function EmailLink({ children }: { children?: JSX.Element }) {
  return (
    <a href="mailto:danielmanning213@gmail.com">
      {children || "danielmanning213@gmail.com"}
    </a>
  );
}

function WebLink({ children }: { children?: JSX.Element }) {
  return (
    <a href="https://dmisdm.github.io">{children || "dmisdm.github.io"}</a>
  );
}

function ContactDetails({ hideLabels }: { hideLabels?: boolean }) {
  return (
    <>
      <div>
        {!hideLabels && (
          <>
            <small>Email</small>
            <br />
          </>
        )}

        <strong>
          <EmailLink />
        </strong>
      </div>
      <div>
        {!hideLabels && (
          <>
            <small>Mobile</small>
            <br />
          </>
        )}
        <strong>
          <MobileLink />
        </strong>
      </div>
      <div>
        {!hideLabels && (
          <>
            <small>Linkedin</small>
            <br />
          </>
        )}
        <strong>
          <LinkedInLink />
        </strong>
      </div>
    </>
  );
}
function ContactDetailsCompact() {
  return (
    <>
      <EmailLink>
        <MailIcon class="inline size-4 me-2" />
        Email
      </EmailLink>
      <MobileLink>
        <PhoneIcon class="inline size-4 me-2" />
        Mobile
      </MobileLink>
      <LinkedInLink>
        <LinkedinIcon class="inline size-4 me-2" />
        LinkedIn
      </LinkedInLink>
    </>
  );
}
