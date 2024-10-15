import storage from "redux-persist/lib/storage";
import { blue, green, grey, pink,  } from "@mui/material/colors";

export const excludedActions = ["persist/PERSIST", "persist/REHYDRATE"];

export const persistConfig = {
  key: "root",
  storage,
};

export const styles = {
  cardStyle: {
    overflow: "hidden",
    borderRadius: '20px',
  },
  cardContentStyle: {
    height: "400px",
    overflowY: "auto",
    backgroundColor:'rgba(0,0,0,0.9)'
  },
  bgGradient: {
    background: 'linear-gradient(to right, #B538F7,#8C3EF0)',
    color: grey[100],
  },
};