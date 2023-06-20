import classNames from "classnames";

import { redfg, bluebg } from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={classNames(redfg, bluebg)}>Hello!</h1>
    </main>
  );
}
