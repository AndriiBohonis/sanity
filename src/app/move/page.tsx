import Link from 'next/link.js';
import { urlFor, client } from '../../lib/client.js';

async function getPosts() {
  const posts = await client.fetch(`*[_type == 'events']{
  title,
  _id,
  'imgSrc':imgSrc.asset._ref,


}`);
  return posts;
}
export const revalidate = 60;
export default async function Move() {
  const data = await getPosts();
  return (
    <ul className='container'>
      {data &&
        data.map((item: any) => (
          <li key={item._id}>
            <h2>
              <Link href={`move/${item._id}`}>{item.title}</Link>
            </h2>
            <h3> popularity:${item.popularity}</h3>
            <img src={urlFor(item.imgSrc).width(400).url()} alt={item.title} />
          </li>
        ))}
    </ul>
  );
}
