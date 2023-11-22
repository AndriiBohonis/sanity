import { urlFor, client } from '../../lib/client.js';

async function getActors() {
  const actors = await client.fetch(
    `*[_type == 'events']
`,
    { next: { revalidate: 1 } }
  );
  return actors;
}
export default async function Actors() {
  const data = await getActors();
  console.log(data);

  return (
    <ul className='container'>
      {data && data.map(item => <li>{item.title}</li>)}
    </ul>
  );
}
