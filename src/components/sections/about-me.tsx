import AnimationContainer from "../animated/animated-container";

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full py-12 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center md:text-left text-white lg:text-start">
        About me
      </h2>

      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        Hi, I&apos;m Sahil Verm! I&apos;m a passionate developer with a love for
        turning ideas into digital experiences. With a focus on clean code and
        creative solutions, I enjoy building projects that solve real-world
        problems. When I&apos;m not coding, I&apos;m exploring new technologies,
        learning, and sharing my journey through blog posts. Join me as I
        explore the intersection of tech and creativity!
      </p>
    </AnimationContainer>
  );
};
export default AboutMe;
