import { useQuery } from "@apollo/client";
// import { User } from "@/generated/graphql";
import { GET_ALL_USERS_QUERY } from "./queries";

export const useAllUsers = (limit?: number, offset?: number) => {
  const {data, loading} = useQuery(GET_ALL_USERS_QUERY, {
    variables: {
      limit
      ,offset
    },
  });
  return {data, loading}
};
