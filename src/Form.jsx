import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="form">
      <input
        {...register("firstName", { required: "This is required" })}
        type="text"
        placeholder="First Name"
      />
      <p>{errors?.firstName?.message}</p>
      <input
        {...register("lastName", {
          required: "This is required",
          minLength: { value: 4, message: "Minimum length is 4" },
        })}
        type="text"
        placeholder="Last Name"
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
