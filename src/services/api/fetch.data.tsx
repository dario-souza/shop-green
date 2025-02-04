export let baseUrl = 'https://fakestoreapi.com/products'
export async function fetchDataProducts<T>(url: string) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('Não foi possivel encontrar Dados')
  const data = (await response.json()) as T
  return data
}
