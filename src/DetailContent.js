export default function DetailContent({ entityTitle, entityData }) {
  let length = entityData.length;
  return (
    <>
      <div className="mt-8">
        <h3 className="text-black font-bold pb-1 mt-0 ">{entityTitle}:</h3>
        {length >= 1
          ? entityData.map((m) => {
              return <p key={m}>{m}</p>;
            })
          : "None"}
      </div>
    </>
  );
}
