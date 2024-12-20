import AnimationContainer from "../animated/animated-container";

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full py-12 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center md:text-left text-white lg:text-start">
        About me
      </h2>

      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti
        quam eaque! Repudiandae quas accusantium officia hic provident animi
        exercitationem delectus error nesciunt voluptas, tempore sed ab
        consequatur eos sunt.
      </p>
    </AnimationContainer>
  );
};
export default AboutMe;
