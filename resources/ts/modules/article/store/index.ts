import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleInterface, ArticlesState } from "../../../types";
const initialState: ArticlesState = {
    data: [],
    pagination: {
        currentPage: 0,
        from: 0,
        lastPage: 0,
        nextPageUrl: '',
        path: '',
        perPage: 0,
        prevPageUrl: null,
        to: 0,
        total: 0,
    }
};
export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticles: (state: ArticlesState, action: PayloadAction<ArticlesState>) => {
            state = action.payload;
        },
        addArticle: (state: ArticlesState, action: PayloadAction<ArticleInterface>) => {
            state.data.push(action.payload);
        },
        updateArticle: (state: ArticlesState, action: PayloadAction<ArticleInterface>) => {
            const index = state.data.findIndex((article) => article.id === action.payload.id);
            if (index) {
                state.data[index] = action.payload;
            }
        },
        deleteArticle: (state: ArticlesState, action: PayloadAction<ArticleInterface>) => {
            state.data.filter((article) => article.id !== action.payload.id);
        },
    }
});

// Action creators are generated for each case reducer function
export const { addArticles, addArticle, updateArticle, deleteArticle } = articleSlice.actions;
export default articleSlice.reducer;