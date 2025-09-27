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

export function buildColorQuery(colors?: string[]): string {
  if (!colors || colors.length === 0) return '';

  if (colors.length === 1) {
    return `variants.option:Color:${colors[0]}`;
  }

  const values = colors.map((c) => `variants.option:Color:${c}`).join(' OR ');
  return `(${values})`;
}

export function queriesCombiner(queries?: (string | null)[]): string | null {
  const cleanArrayQueries = queries?.filter((query) => query !== null);
  if (!cleanArrayQueries?.length) {
    return '';
  }

  const jointQueries = cleanArrayQueries.join(' OR ');
  return `query: "${jointQueries}" ,`;
}
