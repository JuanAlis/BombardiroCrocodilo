import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Activity {
    _id: string;
    titulo: string;
    descripcion: string;
    fecha_inicio: string;
    profesor: { _id: string, nombre: string; email: string };
    preguntas: {
        _id: string;
        alumno: { nombre: string };
        contenido: string;
        respuesta_profesor?: string;
    }[];
    alumnos_inscritos: string[]; // también lo necesitas para saber si el alumno está apuntado

}

interface ActivityState {
    activities: Activity[];
    loading: boolean;
    error: string | null;
}

const initialState: ActivityState = {
    activities: [],
    loading: false,
    error: null,
};

export const fetchActivities = createAsyncThunk(
    "activities/fetchActivities",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:5001/api/activities");
            return response.data;
        } catch (error: any) {
            return rejectWithValue("Error al cargar actividades");
        }
    }
);

export const createActivity = createAsyncThunk(
    "activities/createActivity",
    async (
        {
            titulo,
            descripcion,
            fecha_inicio,
            token,
        }: { titulo: string; descripcion: string; fecha_inicio: string; token: string },
        { rejectWithValue }
    ) => {
        try {
            const response = await axios.post(
                "http://localhost:5001/api/activities",
                { titulo, descripcion, fecha_inicio },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.msg || "Error al crear actividad"
            );
        }
    }
);

export const inscribirseActividad = createAsyncThunk(
    "activities/inscribirseActividad",
    async ({ id, token }: { id: string; token: string }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `http://localhost:5001/api/activities/${id}/inscribirse`,
                {},
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            return response.data.activity;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.msg || "Error al inscribirse");
        }
    }
);



const activitySlice = createSlice({
    name: "activities",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchActivities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchActivities.fulfilled, (state, action: PayloadAction<Activity[]>) => {
                state.loading = false;
                state.activities = action.payload;
            })
            .addCase(fetchActivities.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const hacerPregunta = createAsyncThunk(
    "activities/hacerPregunta",
    async (
        { id, contenido, token }: { id: string; contenido: string; token: string },
        { rejectWithValue }
    ) => {
        try {
            const response = await axios.post(
                `http://localhost:5001/api/activities/${id}/preguntar`,
                { contenido },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            return response.data.activity; // Devuelve la actividad actualizada
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.msg || "Error al enviar pregunta");
        }
    }
);

export const responderPregunta = createAsyncThunk(
    "activities/responderPregunta",
    async (
        {
            activityId,
            preguntaId,
            respuesta,
            token,
        }: { activityId: string; preguntaId: string; respuesta: string; token: string },
        { rejectWithValue }
    ) => {
        try {
            const response = await axios.post(
                `http://localhost:5001/api/activities/${activityId}/pregunta/${preguntaId}/responder`,
                { respuesta },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            return response.data.activity; // Devolvemos la actividad actualizada
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.msg || "Error al responder la pregunta");
        }
    }
);



export default activitySlice.reducer;
