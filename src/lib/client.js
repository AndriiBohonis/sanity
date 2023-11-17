import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'oqxqohoj',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_SECRET_TOKEN,
  ignoreBrowserTokenWarning: true, // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq

// export async function createPost(post) {
//   const result = client.create(post);
//   return result;
// }

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({ title });
  return result;
}
// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source) {
  return builder.image(source);
}
