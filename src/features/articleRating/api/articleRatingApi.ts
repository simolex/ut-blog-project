import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface SetArticleRatingArg extends GetArticleRatingArg {
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRatings: build.query<Rating[], GetArticleRatingArg>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        setArticleRatings: build.mutation<void, SetArticleRatingArg>({
            query: (args) => ({
                url: '/article-ratings',
                method: 'POST',
                body: args,
            }),
        }),
    }),
});

export const useGetArticleRatings = articleRatingApi.useGetArticleRatingsQuery;
export const useSetArticleRatings = articleRatingApi.useSetArticleRatingsMutation;
