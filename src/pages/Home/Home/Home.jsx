import useAuth from "../../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-2xl bg-red-500 font-dosis">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptatem?
      </h2>
    </div>
  );
};

export default Home;
