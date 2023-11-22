import { urlFor, client } from '../../../lib/client';
type Params = {
  params: {
    id: string;
  };
};

async function getMove(id: any) {
  const move = await client.fetch(
    `*[_type == 'events' && _id == '${id.params.id}']{
      title,
      'imgSrc':imgSrc.asset._ref,
    }`
  );
  return move;
}
export default async function Page(id: Params) {
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
