import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import { notFound } from "next/navigation";

export default async function SongDetailPage({ params }: { params: { id: string } }) {
  const result: any = await new Promise((resolve) => {
    const songRef = ref(dbFirebase, `songs/${params.id}`);
    onValue(songRef, async (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    });
  })

  if(!result){
    notFound();
  }

    return (
      <>
        {/* CardInfo */}
        <CardInfo
          image={result.image}
          title={result.title}
          description="Hồ Quang Hiếu, Huỳnh Văn"
        />
        {/* Section 2: Lời Bài Hát */}
        <Section2 lyric={result.lyric}/>

        {/* Section 3: Bài Hát Cùng Danh Mục */}
        <Section3 categoryId={result.categoryId} songId={params.id}/>
      </>
    );
}
  