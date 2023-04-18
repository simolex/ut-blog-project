import { User } from '@/entities/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

// import { ValueOf } from 'shared/config/typeEnum/typeEnum';
export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export enum ArticleView {
    LIST = 'LIST',
    GRID = 'GRID',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title: string;
    paragraphs: string[];
}
export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}
export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

export type ArticleType = 'ALL' | 'IT' | 'SCIENCE' | 'ECONOMICS';

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    user: User; // bad FSD?
    createdAt: string;
    type: ArticleType[];
    blocks?: ArticleBlock[];
}
