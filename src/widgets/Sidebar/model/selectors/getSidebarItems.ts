import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';
import HomeIcon from '@/shared/assets/icons/home-20x20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20x20.svg';
import AboutIcon from '@/shared/assets/icons/about-20x20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20x20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            textSlug: 'main-link',
            Icon: HomeIcon,
        },

        {
            path: RoutePath.about,
            textSlug: 'about-link',
            Icon: AboutIcon,
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                textSlug: 'profile-link',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                textSlug: 'articles-link',
                Icon: ArticleIcon,
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
// (state: StateSchema) => state.user.authDate?.id;
