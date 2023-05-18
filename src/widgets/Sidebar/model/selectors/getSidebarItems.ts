import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import HomeIconDeprecated from '@/shared/assets/icons/home-20x20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20x20.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about-20x20.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article-20x20.svg';

import HomeIcon from '@/shared/assets/icons/Home.svg';
import ProfileIcon from '@/shared/assets/icons/Profile.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ArticleIcon from '@/shared/assets/icons/Article.svg';
import { SidebarItemType } from '../types/sidebar';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            textSlug: 'main-link',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => HomeIconDeprecated,
                on: () => HomeIcon,
            }),
        },

        {
            path: getRouteAbout(),
            textSlug: 'about-link',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                textSlug: 'profile-link',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                textSlug: 'articles-link',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticleIconDeprecated,
                    on: () => ArticleIcon,
                }),
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
// (state: StateSchema) => state.user.authData?.id;
