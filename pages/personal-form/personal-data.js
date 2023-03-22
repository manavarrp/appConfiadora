import PersonPhysicalForm from "../../components/PersonPhysicalForm";
import PersonForm from "../../components/PersonPhysicalForm/PersonForm";

const PersonData = () => {
  return (
    <div className="grid lg:grid-cols-1 gap-5 mt-16 ">
      <div className="bg-white rounded h-10 shadow-sm ">
        <PersonPhysicalForm activeStep={0} />
      </div>
      <div className="mt-40 sm:mt-10">
        <PersonForm />
      </div>
    </div>
  );
};

export default PersonData;
