import { SKILLS } from "@/lib/constants";
import AnimationContainer from "../animated/animated-container";
import { Badge } from "../ui/badge";

const SkillsSection = () => {
  return (
    <AnimationContainer className="w-full ">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-white lg:text-start">
        Skills
      </h2>

      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        I specialize in building seamless, user-friendly applications using
        modern web technologies. My toolkit includes:
      </p>

      <div className="flex flex-col items-start mt-8">
        <div className="flex flex-col flex-wrap items-start mb-2 space-y-4">
          {SKILLS?.map(({ title, stacks }) => (
            <AnimationContainer
              key={title}
              className="flex fex-col items-center"
            >
              <div>
                <h3 className="items-start mb-3 text-lg font-bold text-white">
                  {title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {/* <ShowSkills stacks={stack} /> */}
                  {stacks.map((stack) => (
                    <Badge
                      key={stack}
                      className="bg-neutral-600/70 hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
                    >
                      <span className="font-medium text-white">{stack}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
};
export default SkillsSection;
