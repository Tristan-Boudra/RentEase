import NavigationMenu from "../components/NavigationMenu";
import { PrismaClient } from "@prisma/client";
import "../styles/Property.css";

const Property = () => {
  const prisma = new PrismaClient();

  async function main() {
    await prisma.post.update({
      where: {
        slug: 'my-first-post',
      },
      data: {
        comments: {
          createMany: {
            data: [
              { comment: 'Great post!' },
              { comment: "Can't wait to read more!" },
            ],
          },
        },
      },
    })
    const posts = await prisma.post.findMany({
      include: {
        comments: true,
      },
    })
  
    console.dir(posts, { depth: Infinity })
  }

  main()
    .catch(async (e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return (
    <div>
      <NavigationMenu />
      <div id="property" className="px-5 py-16">
        <h1 className="text-3xl font-bold">Toutes mes propriétés</h1>
        <div id="tier" className="mt-10">
          <h2 className="text-xl font-semibold">Ajouter un filtre: </h2>
          <div id="allTier" className="flex flex-row gap-10 mt-2">
            <div className="tierTypeAlpha">
              <label className="">Trie alphabétique: </label>
              <select>
                <option value="tier">Ordre</option>
                <option value="tier">Désordre</option>
              </select>
            </div>
            <div className="tierType">
              <label>Type du bien: </label>
              <select>
                <option value="tier">Appartement</option>
                <option value="tier">Maison</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
