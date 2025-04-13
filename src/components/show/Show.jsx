import * as React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

function Show() {
  return (
    <div className="h-[100vh] flex items-center justify-center w-full">
      <GooeyText
        texts={["Design", "Engineering", "Is", "Awesome"]}
        morphTime={1}
        cooldownTime={0.25}
        className="font-bold"
      />
    </div>
  );
}

export default Show;
