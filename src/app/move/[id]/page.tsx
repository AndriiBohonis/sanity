import { urlFor, client } from '../../../lib/client';
type Params = {
  params: {
    id: string;
  };
};
export const revalidate = 30;
export async function generateStaticParams() {
  const pagesId = await client.fetch(
    `*[_type == 'events']{
    "id":_id
    }`
  );
  return pagesId;
}

async function getMove(id: any) {
  const move = await client.fetch(
    `*[_type == 'events' && _id == '${id}']{
      title,
      'imgSrc':imgSrc.asset._ref,
    }`
  );

  return move;
}
export default async function Page({ params: { id } }: Params) {
  const data = await getMove(id);

  return (
    <div>
      {data && (
        <>
          <h1>{data[0].title}</h1>
          <img src={urlFor(data[0].imgSrc).url()} alt={data.title} />
        </>
      )}
    </div>
  );
}
