import { createEntityAdapter } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { fetchArticleRecommendation } from '../services/fetchArticleRecommendation/fetchArticleRecommendation';
import { ArticleDetailsRecommendationSchema } from '../types/articleDetailsRecommendationSchema';
import { buildSlice } from '@/shared/lib/store';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationSlice = buildSlice({
    name: 'articleDetailsRecommendationSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendation.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendation.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendation.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleDetailsRecommendationReducer,
    useActions: useArticleDetailsRecommendationActions,
} = articleDetailsRecommendationSlice;
