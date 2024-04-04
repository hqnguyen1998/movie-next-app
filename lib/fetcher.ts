export const fetcher = (url: string) =>
  fetch(url).then((r: Response) => r.json());
