type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Zoom = "SET_ZOOM",
  Pan = "SET_PAN",
  Dimension = "Dimension",
  Canvas = "UPDATE_CANVAS",
}

// map

export type MapType = {
  zoom: number;
  left: number;
  top: number;
  ready: boolean;
  width?: number;
  height?: number;
  ctx?: CanvasRenderingContext2D;
};

type MapPayload = {
  [Types.Zoom]: {
    zoom: number;
  };
  [Types.Pan]: {
    left: number;
    top: number;
  };
  [Types.Canvas]: {
    ctx: CanvasRenderingContext2D;
  };
  [Types.Dimension]: {
    width: number;
    height: number;
  };
};

export type MapActions = ActionMap<MapPayload>[keyof ActionMap<MapPayload>];

export const mapReducer = (state: MapType, action: MapActions) => {
  switch (action.type) {
    case Types.Zoom:
      const zoom = action.payload.zoom;

      return { ...state, zoom };
    case Types.Pan:
      const left = action.payload.left;
      const top = action.payload.top;
      return { ...state, left, top };
    case Types.Dimension:
      const width = action.payload.width;
      const height = action.payload.height;
      return {
        ...state,
        width,
        height,
      };
    case Types.Canvas:
      const ctx = action.payload.ctx;
      const ready = false;
      return {
        ...state,
        ctx,
        ready,
      };
    default:
      return state;
  }
};
