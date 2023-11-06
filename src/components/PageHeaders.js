export default function PageHeaders({
  h1Text = "Hello",
  h2Text = "SubHeader",
}) {
  return (
    <section className="text-center mt-24 mb-10">
      <h1
        className="text-3xl mb-3"
        style={{ textShadow: "2px 2px 0 rgba(0,0,0)" }}
      >
        {h1Text}
      </h1>
      <h2 className="opacity-75">{h2Text}</h2>
    </section>
  );
}
