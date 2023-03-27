import { Component, ComponentProps, JSX } from "solid-js";

import ProfileImg from "../assets/Profile.jpg";
import CultureAmpIcon from "../assets/cultureampicon.svg";
import AirwallexIcon from "../assets/airwallex.svg";
import ReadCloudIcon from "../assets/readcloud.svg";
import CodingIcon from "../assets/code.json?url";
import RMITIcon from "../assets/rmit.png";
import "@lottiefiles/lottie-player";

const Card = (props: { children: JSX.Element; class?: string }) => (
  <div class={" rounded-lg p-6 " + (props.class ?? "")}>{props.children}</div>
);

const Padding = (props: { size?: number }) => (
  <div style={{ padding: `${(props.size ?? 1) / 2}rem` }} />
);

const ContactDetails = (props: { row?: boolean; class?: string }) => (
  <div
    class={"flex gap-4 prose-sm " + (props.class ?? "")}
    classList={{ "flex-col": !props.row }}
  >
    <div>
      <small>Email</small>
      <br />
      <a href="mailto:danielmanning213@gmail.com">
        <strong>danielmanning213@gmail.com</strong>
      </a>
    </div>
    <div>
      <small>Mobile</small>
      <br />
      <strong>+61413406990</strong>
    </div>
    <div>
      <small>Linkedin</small>
      <br />
      <a href="https://linkedin.com/in/dmcmanning">
        <strong>linkedin.com/in/dmcmanning</strong>
      </a>
    </div>
  </div>
);

const ExperienceCard = (props: {
  class?: string;
  children: JSX.Element;
  imgSrc?: string;
}) => (
  <div class={`py-8 ${props.class}`}>
    <div class="flex">
      <div class="basis-20 p-2 flex justify-center items-start relative">
        {props.imgSrc ? (
          <img src={props.imgSrc} class="h-8 w-8 -mt-2 m-0" />
        ) : (
          <div class="bg-gray-500 rounded-full h-4 w-4"></div>
        )}
        <div class="h-[calc(100%-2rem)] w-[1px] bg-gray-300 absolute left-0 right-0 top-8 mx-auto" />
      </div>
      <div class="flex-1 flex-shrink-0">{props.children}</div>
    </div>
  </div>
);

const App = () => {
  return (
    <>
      <div
        style={{ "clip-path": "polygon(0 0, 0 90%, 150% 0)" }}
        class="opacity-10 bg-amber-300 absolute h-[100%] w-full"
      />

      <div class="min-h-screen flex flex-col bg-stone-50 p-4">
        <main class="flex-1 print:pt-2 pt-[20vh]">
          <div class="prose print:prose-sm mx-auto pt-8">
            <header class="flex relative">
              <div class="flex flex-col items-center justify-start flex-shrink-0 ">
                <img
                  src={ProfileImg}
                  alt="A profile picture of Daniel Manning"
                  class="rounded-full h-40 m-0 -mb-8 z-10"
                />
                <Padding />
                <div class="px-8 py-4 rounded-lg bg-slate-700 prose prose-sm prose-invert">
                  <h2 class="m-0">Daniel Manning</h2>
                  <p class="m-0 text-center">
                    Software Engineer <br /> AI Researcher
                  </p>
                </div>
              </div>
              <div class="flex-1" />
              <ContactDetails class="justify-end text-end" />
            </header>
            <Padding size={2} />
            <section>
              <Card class="text-center">
                {/*@ts-ignore*/}
                <lottie-player
                  autoplay
                  loop
                  mode="normal"
                  src={CodingIcon}
                  class="h-24 p-4"
                />
                <h2 class="m-0 pb-4  font-serif">
                  Full stack software engineer and AI researcher with a passion
                  for creating beautiful user experiences.
                </h2>
                <p class="text-[#3a4f9a]">
                  My expertise lies in modern web development with a focus on
                  React, TypeScript, NodeJS, Kotlin, and related backend
                  technologies. I'm also interested in language and
                  communication, and enjoy delving into academic research on
                  language models and reinforcement learning, thus having plenty
                  of experience with Python.
                </p>
                <p class="text-end m-0 text-[#3a4f9a]">
                  <small>(site made using SolidJS + Vite + Tailwind!)</small>
                </p>
              </Card>
            </section>
            <hr />
            <section class="flex flex-col gap-4">
              <h2 class="text-center mb-0 font-serif">Experience</h2>
              <ExperienceCard imgSrc={CultureAmpIcon}>
                <h3 class="m-0 pb-4">
                  <a href="https://cultureamp.com">CultureAmp</a> (since Nov
                  2019)
                  <br />
                  <small>Snr. Software Engineer</small>
                </h3>

                <p class="m-0">
                  Full stack development using React, TypeScript, NodeJS,
                  Kotlin, Elm, and historically Flow and Ruby. Innovated and
                  maintained in-house design system and component library (
                  <a href="https://cultureamp.design">Kaizen Design System</a>
                  ). Gained SRE experience using AWS, and exposure to event
                  sourcing/CQRS. Currently working in the team responsible for
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
                  Full stack engineer at an EduTech company. This involved
                  getting my hands dirty with a large number of technologies,
                  mostly React, Typescript, NodeJS, Java, and MongoDB. Being one
                  of the very few developers, I enjoyed the full experience of
                  setting up infrastructure on vanilla VMs with docker, later
                  moving to AWS and automating through Gitlab's CI, also taking
                  on some design of UIs.
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
                  Mostly frontend engineer with exposure to Kotlin, Java +
                  Spring, React, Typescript + some Flow, along with experience
                  in distributed systems such as Cassandra DB, RabbitMQ, plus
                  dev ops with Docker + Swarm and Kubernetes.
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
            <hr />
            <section>
              <h2 class="text-center mb-0 font-serif">Education</h2>
              <ExperienceCard imgSrc={RMITIcon}>
                <h3 class="m-0 pb-4">
                  Doctor of Philosophy (PhD. Computer Science)
                  <br />
                  <small>since Jan 2022 - deferred</small>
                  <br />
                  <small>RMIT</small>
                </h3>
                <p class="m-0">
                  Eight months of academic research into the intersection
                  between deep reinforcement learning (e.g. PPO) and large
                  pretrained language models (e.g. GPT, BERT), to understand how
                  we can improve sequential decision making reasoning in the
                  latter. I intensively studied how these language models
                  perform and can be used to play text-based games like{" "}
                  <a href="https://www.pcjs.org/software/pcx86/game/infocom/zork1/">
                    Zork
                  </a>
                  , and found unanswered research questions - you'd be surprised
                  how badly so called "intelligent" language models like ChatGPT
                  can perform at simple games which humans can easily complete
                  with basic reasoning skills. My passion lies here: to give
                  language models the ability to think <em>slowly</em> rather
                  than quickly.
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
                  engaging electives involving AI techniques in games (heavy
                  focus on reinforcement learning), and cloud infrastructure
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
                  experience led to my career in software engineering with a
                  focus on web service development and the ecosystem surrounding
                  it (backend, frontend, infrastructure/AWS etc)
                </p>
                <p class="flex justify-between max-w-xs">
                  <a href="https://www.myequals.net/sharelink/99cc95c7-f9af-42b6-9f4c-98fb89ed72d7/fe59eb01-3da5-4959-8f9c-b50d40ec44db">
                    Transcript
                  </a>
                  <span class="text-end m-0">GPA: 4.0</span>
                </p>
              </ExperienceCard>
            </section>
            <hr />
            <section>
              <h2 class="text-center font-serif">
                Referees available on request!
              </h2>
            </section>
          </div>
        </main>
      </div>
      <footer class="bg-slate-600 text-white print:relative sticky bottom-0 border-t border-solid border-slate-400">
        <div class="py-4 m-auto prose prose-invert">
          <ContactDetails class="justify-center text-xs sm:text-sm" row />
        </div>
      </footer>
    </>
  );
};

export default App;
