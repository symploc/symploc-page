import { Composition } from "remotion";
import { HeroScreenshot } from "./compositions/HeroScreenshot";
import { ProductDemo } from "./compositions/ProductDemo";
import { SuperAgentDemo } from "./compositions/SuperAgentDemo";
import { PlanModeDemo } from "./compositions/PlanModeDemo";
import { SystemVizDemo } from "./compositions/SystemVizDemo";
import { DeployDemo } from "./compositions/DeployDemo";
import { MobileDemo } from "./compositions/MobileDemo";
import { IntegrationsDemo } from "./compositions/IntegrationsDemo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroScreenshot"
        component={HeroScreenshot}
        durationInFrames={1180}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="ProductDemo"
        component={ProductDemo}
        durationInFrames={510}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="SuperAgentDemo"
        component={SuperAgentDemo}
        durationInFrames={820}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="PlanModeDemo"
        component={PlanModeDemo}
        durationInFrames={930}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="SystemVizDemo"
        component={SystemVizDemo}
        durationInFrames={800}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="DeployDemo"
        component={DeployDemo}
        durationInFrames={930}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="MobileDemo"
        component={MobileDemo}
        durationInFrames={700}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="IntegrationsDemo"
        component={IntegrationsDemo}
        durationInFrames={670}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
