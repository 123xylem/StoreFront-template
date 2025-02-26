import { useQuery } from "@tanstack/react-query";

export const useFetchProduct = ({
  queryKey = [""],
}: {
  queryKey: string[];
}) => {
  return useQuery({
    queryKey: queryKey,
    queryFn: async () =>
      fetch(
        `https://fakestoreapi.com/products${queryKey ? `/${queryKey}` : ""}`
      ).then((res) => res.json()),
  });
};
