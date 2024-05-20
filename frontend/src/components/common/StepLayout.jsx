import NextButton from "./NextButton";
import BackButton from "./BackButton";

export default function StepLayout({
  children,
  title,
  description,
  back,
  next,
  confirm,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pt-10 px-20">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="mb-4">{description}</p>

      <form onSubmit={handleSubmit}>
        <div className="h-96">
        {children}
        </div>

        <div className="flex flex-row-reverse justify-between">
          {next && <NextButton />}
          {back && <BackButton />}
        </div>
      </form>
    </div>
  );
}
