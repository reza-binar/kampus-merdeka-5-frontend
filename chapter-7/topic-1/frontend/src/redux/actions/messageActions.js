import axios from "axios";
import { toast } from "react-toastify";

import {
  createNewMessageReducer,
  getAllMessagesReducer,
} from "../reducers/messageReducer";

// This function will be called in component and it will triggered the reducers
export const getAllMessages = () => async (dispatch) => {
  try {
    // Imagize we get data from API (the variable is users)
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_API}/api/v1/messages`
    );

    // Dispatch to reducers
    dispatch(getAllMessagesReducer(data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const createNewMessage = (message) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({ message });

    const config = {
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_API}/api/v1/messages`,
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    };

    const { data } = await axios(config);

    const { messages } = getState().message;

    if (messages.some((item) => item.id === data.data.id)) {
      return;
    }

    toast.success("New message!");

    dispatch(createNewMessageReducer(data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const addMessageFromWebsocket =
  (messageData) => async (dispatch, getState) => {
    try {
      // Get all state from redux
      const { message } = getState();

      // Get messages array
      const { messages } = message;

      // Check if there are any id that same
      // If there are any id that same, it will return nothing that means it not will to do anything
      if (messages.some((item) => item.id === messageData.id)) {
        return;
      }

      // Make success alert
      toast.success("New message!");

      // Make new message to reducer
      dispatch(createNewMessageReducer(messageData));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };
