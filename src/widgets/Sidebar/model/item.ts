import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

import HomeIcon from 'shared/assets/icons/home-20x20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20x20.svg';
import AboutIcon from 'shared/assets/icons/about-20x20.svg';

export interface SidebarItemType {
    path: string;
    textSlug: string; // TFunction<string, undefined>;
    Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        textSlug: 'main-link',
        Icon: HomeIcon,
    },
    {
        path: RoutePath.profile,
        textSlug: 'profile-link',
        Icon: ProfileIcon,
    },
    {
        path: RoutePath.about,
        textSlug: 'about-link',
        Icon: AboutIcon,
    },
];