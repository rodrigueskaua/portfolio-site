export const useAsset = () => {
  const base = useRuntimeConfig().app.baseURL
  const root = base.endsWith('/') ? base : `${base}/`
  return (path: string) => `${root}${path}`
}
