import { Accessor, createSignal, JSX } from "solid-js";

export const EvervaultCard = (props: {
  children?: JSX.Element;
  class?: string;
}) => {
  let [mouseX, setMouseX] = createSignal(0);
  let [mouseY, setMouseY] = createSignal(0);

  const [randomString, setRandomString] = createSignal("");

  let str = generateRandomString(1500);
  setRandomString(str);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    setMouseX(clientX - left);
    setMouseY(clientY - top);

    const str = generateRandomString(10000);
    setRandomString(str);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      class={"group/card bg-transparent " + props.class ?? ""}
    >
      <CardPattern
        mouseX={mouseX}
        mouseY={mouseY}
        randomString={randomString}
      />
      {props.children}
    </div>
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  randomString,
}: {
  mouseX: Accessor<number>;
  mouseY: Accessor<number>;
  randomString: Accessor<string>;
}) {
  let style = () =>
    `mask-image: radial-gradient(250px at ${mouseX()}px ${mouseY()}px, white, transparent); -webkit-mask-image radial-gradient(250px at ${mouseX()}px ${mouseY()}px, white, transparent)`;

  return (
    <div class="pointer-events-none">
      <div class="absolute inset-0 rounded-md  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <div
        class="absolute inset-0 rounded-md bg-gradient-to-r from-amber-500 to-pink-700 opacity-0  group-hover/card:opacity-50 backdrop-blur-xl transition duration-500"
        style={style()}
      />
      <div
        class="absolute inset-0 rounded-md opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style()}
      >
        <p class="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString()}
        </p>
      </div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
