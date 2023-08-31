import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered prompts</span>
      </h1>
      <p className="desc text-center">
        promptopia is an open-source AI prompting tool for modern world to
        discover, create and Share creative prompts Feed
      </p>

      <Feed />
    </section>
  );
};

export default Home;
