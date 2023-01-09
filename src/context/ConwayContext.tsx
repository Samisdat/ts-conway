import React, { createContext, useReducer, Dispatch, ReactNode } from "react";
import { MapActions, mapReducer, MapType } from "./reducers";
import { initalZoom } from "../configure";

const initialState: MapType = {
  zoom: initalZoom,
  left: 0,
  top: 0,
  ready: false,
};

const AppContext = createContext<{
  state: MapType;
  dispatch: Dispatch<MapActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

type MapProviderProps = {
  children: ReactNode;
};

const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useMap = () => {
  const context = React.useContext(AppContext);

  if (context === undefined) {
    throw new Error("useMap must be used within a MapProvider");
  }

  return context;
};

export { MapProvider, useMap };
