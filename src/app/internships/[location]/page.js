import CurrentOpenings from "@/Ui/Careers/CurrentOpenings";

const Page = async ({ params }) => {
  const { location } = await params;

  return <CurrentOpenings selectedLocation={location} />;
};

export default Page;