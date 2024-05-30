import { useMutation } from "@tanstack/react-query";
import queryClient from "../../queryClients";
import apiClient from "../../axios";
const useSendFeedback = () => {
  return useMutation<any, any, any, unknown>({
        mutationFn: async (request) => {
        const responce = await apiClient.post('/feedback/', request);
        return responce.data;
    },
  });
};

export { useSendFeedback };
