export const sortCards = (cards = []) =>
  cards
    .map((node) => {
      const {
        source_items: { audience_size },
      } = node;
      return {
        ...node,
        audience_size,
      };
    })
    .sort((a, b) => b.audience_size - a.audience_size);
