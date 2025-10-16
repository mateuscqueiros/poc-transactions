export const dynamic = "force-dynamic";

export default async function Page() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
