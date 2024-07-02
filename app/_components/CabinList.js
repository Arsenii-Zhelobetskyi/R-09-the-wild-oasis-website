import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";
// import { noStore } from "next/cache";
async function CabinList() {
  //with noStore is component is nonCached request component
  // noStore() // this request will not be cached, and the page cabins will be regenerated on every request
  // useful with "partial pre-rendering", cause then only the list will be dynamic, and not the cabins page(cabins will stayed static)
  const cabins = await getCabins();

  if (!cabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
