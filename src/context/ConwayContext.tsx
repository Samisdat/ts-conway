
import React, { createContext, useReducer, Dispatch } from "react";
import {
MapActions, mapReducer, MapType
} from "./reducers";
import {initalZoom} from "../configure";

type InitialStateType = {
  map: MapType;
};

const initialState:InitialStateType = {
  map:{
    zoom: initalZoom,
    left:0,
    top:0,
  }
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<MapActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
    { products, shoppingCart, map }: InitialStateType,
    action: MapActions
) => ({
  map: mapReducer(map, action)
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
  );
};

const useMap = () => {
  const context = React.useContext(AppContext);

  if (context === undefined) {throw new Error("useMap must be used within a MapProvider");
  }

  return context;
};

export { AppProvider, AppContext, useMap };
