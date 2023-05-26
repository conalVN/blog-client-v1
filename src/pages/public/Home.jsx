import { memo } from "react";
import { Intro, NewFeed, Services } from "../../components";
function Home() {
  console.log(`re-render home`);
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <Intro />
      <NewFeed />
      <Services />
    </div>
  );
}

export default memo(Home);