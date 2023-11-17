import { urlFor, client } from '../../../lib/client';
type Params = {
  params: {
    id: string;
  };
};
async function getMove(id: any) {
  const move =
    await client.fetch(`*[_type == 'movie'&& _id =='${id.params.id}']{
  'poster':poster.asset._ref,
  title,
  'info':overview[0].children[].text
    
}`);
  return move;
}
export default async function Page(id: Params) {
  const data = await getMove(id);
  return (
    <div>
      {data.length && (
        <>
          <h1>{data[0]?.title}</h1>
          <img src={urlFor(data[0].poster).width(400).url()} alt={data.title} />
          <p>{data[0].info}</p>
        </>
      )}
    </div>
  );
}
