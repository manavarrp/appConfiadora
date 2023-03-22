import PersonPhysicalForm from "../../components/PersonPhysicalForm";
import AddressForm from "../../components/PersonPhysicalForm/AddressForm";

const AddressData = () => {
  return (
    <div className="grid lg:grid-cols-1 gap-5 mt-16 ">
      <div className="bg-white rounded h-10 shadow-sm ">
        <PersonPhysicalForm activeStep={1} />
      </div>
      <div className="mt-40 sm:mt-10">
        <AddressForm />
      </div>
    </div>
  );
};

export default AddressData;
