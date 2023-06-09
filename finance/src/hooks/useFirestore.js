import { useReducer, useEffect, useState } from "react";
import { projectFirestore, timeStamp } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {
        ...state,
        isPending: true,
        document: null,
        success: false,
        error: null,
      };
    case "ADDED_DOCUMENT":
      return {
        ...state,
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "DELETED_DOCUMENT":
      return {
        ...state,
        isPending: false,
        document: null,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        ...state,
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState();

  const ref = projectFirestore.collection(collection);
  const dispatchIfNotCanceled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  const addDocument = async (document) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const createdAt = timeStamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...document, createdAt });
      dispatchIfNotCanceled({ type: "ADDED_DOCUMENT", payload: addedDocument });
    } catch (error) {
      console.error(error);
      dispatchIfNotCanceled({ type: "ERROR", payload: error.message });
    }
  };

  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });
    try {
      await ref.doc(id).delete();
      dispatchIfNotCanceled({
        type: "DELETED_DOCUMENT",
      });
    } catch (error) {
      console.error(error);
      dispatchIfNotCanceled({ type: "ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { addDocument: addDocument, deleteDocument, response };
};
