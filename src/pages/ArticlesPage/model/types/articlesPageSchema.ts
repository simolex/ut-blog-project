import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    view: ArticleView;
    isLoading?: boolean;
    error?: string;
}
