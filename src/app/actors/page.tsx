import { urlFor, client } from '../../lib/client.js';

async function getActors() {
  const actors = await client.fetch(`*[_type == 'person'] {
  name,
    _id,
     'src':image.asset._ref
}
`);
  return actors;
}
export default async function Actors() {
  const data = await getActors();

  return (
    <ul className='container'>
      {data &&
        data.map((item: any) => (
          <li key={item._id}>
            <h2>{item.name}</h2>
            <img
              src={data.src && urlFor(data.src).width(400).url()}
              alt={data.title}
            />
          </li>
        ))}
    </ul>
  );
}
