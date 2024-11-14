import CodingIcon from "../assets/code.json?url";
import { DotLottieSolid } from "@lottiefiles/dotlottie-solid";

export function AnimatedComputerIcon() {
  return (
    <DotLottieSolid
      src={CodingIcon}
      loop
      autoplay
      mode="bounce"
      class="p-4 mx-auto "
      style={{
        width: "100px",
        height: "100px",
      }}
    />
  );
}

export default AnimatedComputerIcon;
