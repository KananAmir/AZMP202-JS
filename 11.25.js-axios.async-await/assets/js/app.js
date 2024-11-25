async function getData() {
  try {
    const res = axios.get("https://northwind.vercel.app/api/categories");
    console.log(res.data);
  } catch (error) {}
}
