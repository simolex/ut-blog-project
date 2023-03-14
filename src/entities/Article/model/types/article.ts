// import { ValueOf } from 'shared/config/typeEnum/typeEnum';
export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

// export const ArticleBlockType = {
//     TEXT: 'TEXT',
//     CODE: 'CODE',
//     IMAGE: 'IMAGE',
// } as const;

// export type ArticleBlockType = ValueOf<typeof ArticleBlockType>;

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

export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks?: ArticleBlock[];
}
