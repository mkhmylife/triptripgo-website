export async function getArticle(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`);
  return await res.json();
}
