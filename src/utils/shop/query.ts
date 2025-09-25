export type MetafieldFilter = { title: string; value: string[] };

export function buildMetafieldQuery(filters?: MetafieldFilter[]): string {
  if (!filters || filters.length === 0) return '';

  return filters
    .map((f) => {
      if (!f.value || f.value.length === 0) return '';

      if (f.value.length === 1) {
        return `metafields.custom.${f.title}:${f.value[0]}`;
      }

      const values = f.value.join(' OR ');
      return `metafields.custom.${f.title}:(${values})`;
    })
    .filter(Boolean)
    .join(' OR ');
}
