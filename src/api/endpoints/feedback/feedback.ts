import { useMutation } from "@tanstack/react-query";
import queryClient from "../../queryClients";
import apiClient from "../../axios";
const useSendFeedback = (data: any) => {
  return useMutation<any, any, any, unknown>({
    mutationKey: ["feedback"],
    mutationFn: async (data) => {
        const responce = await apiClient.post('/feedback/', data);
        queryClient.invalidateQueries({ queryKey: ["feedback"] });
        return responce.data;
    },
  });
};

export { useSendFeedback };
