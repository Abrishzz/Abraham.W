import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { POSTS_PATH, postFilePaths } from 'utils/mdx';
import { formatTimecode } from 'utils/timecode';

export { Articles as default } from './Articles';

export function getStaticProps() {
  const allPosts = postFilePaths.map(filePath => {
    const fileContent = fs.readFileSync(path.join(POSTS_PATH, filePath), 'utf-8');
    const { data, content } = matter(fileContent);

    const { time } = readingTime(content);
    const timecode = formatTimecode(time);

    const fileName = path.basename(filePath); // Get the base file name without extension
    const slug = fileName.replace(/\.(md|mdx)$/, ''); // Remove the extension from the filename

    return {
      ...data,
      timecode,
      slug,
    };
  });

  const featured = allPosts.find(post => post.featured);

  const posts = allPosts
    .filter(post => post.slug !== featured.slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: { posts, featured },
  };
}
