const Heading = ({ heading }) => {
  return (
    <div>
      <h1 className={"text-4xl font-bold lg:px-28 inline-flex flex-shrink-0"}>
        {heading}
      </h1>
    </div>
  );
};

export default Heading;
