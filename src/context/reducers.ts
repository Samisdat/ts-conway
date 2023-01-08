type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
            type: Key;
        }
        : {
            type: Key;
            payload: M[Key];
        }
};

export enum Types {
    Zoom = "SET_ZOOM",
    Pan = "SET_PAN"
}

// map

export type MapType = {
    zoom: number;
    left: number;
    top: number;
};

type MapPayload = {
    [Types.Zoom]: {
        zoom: number;
    };
    [Types.Pan]: {
        left: number;
        top: number;
    };
};

export type MapActions = ActionMap<MapPayload>[keyof ActionMap<
    MapPayload
    >];



export const mapReducer = (
    state: MapType,
    action: MapActions
) => {
    switch (action.type) {
        case Types.Zoom:
            const zoom = action.payload.zoom

            return {...state,zoom}

            ;
        case Types.Pan:
            console.log('Pan', state);
            return {...state}
        default:
            return state;
    }
};