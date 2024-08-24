import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import { notFound } from "next/navigation";

export default async function SongsByCategoriesPage({ params }: { params: { id: string } }) {
  const result: any = await new Promise((resolve) => {
    const categoriesRef = ref(dbFirebase, `categories/${params.id}`);
    onValue(categoriesRef, async (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    });
  })

  if(!result){
    notFound();
  }

  return (
    <>
      <CardInfo
        image={result.image}
        title={result.title}
        description={result.description}
      />
      {/* Section-2 */}
      <Section2 id={params.id}/>
    </>
  );
}
