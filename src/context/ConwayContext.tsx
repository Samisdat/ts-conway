import * as React from "react";
import { useRef } from "react";
import { initalZoom } from "../configure";

type Action = {
  type: "SET_ZOOM";
  zoom: number;
};

type Dispatch = (action: Action) => void;
type State = {
  zoom: number;
};

type MapProviderProps = {
  children: React.ReactNode;
};

const MapStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function mapReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_ZOOM": {
      const { zoom } = action;

      return {
        ...state,
        zoom,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${(action as any).type}`);
    }
  }
}

function MapProvider({ children }: MapProviderProps) {
  const ref = useRef(null);

  const [state, dispatch] = React.useReducer(mapReducer, {
    zoom: initalZoom,
  });

  const value = { state, dispatch };

  return (
    <MapStateContext.Provider value={value}>
      {children}
    </MapStateContext.Provider>
  );
}

const useMap = () => {
  const context = React.useContext(MapStateContext);

  if (context === undefined) {
    throw new Error("useMap must be used within a MapProvider");
  }

  return context;
};

export { MapProvider, useMap };
