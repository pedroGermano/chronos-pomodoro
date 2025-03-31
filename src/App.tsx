import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <TimerIcon />
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum aliquam
        nihil quis, tempora dicta ea fugiat reiciendis ducimus tempore
        repudiandae. Non fuga ad possimus nobis excepturi illum amet minima
        maiores?
      </p>
    </>
  );
}
