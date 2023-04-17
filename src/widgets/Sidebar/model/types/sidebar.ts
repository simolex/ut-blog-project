import { FC } from 'react';

export interface SidebarItemType {
    path: string;
    textSlug: string; // TFunction<string, undefined>;
    Icon: FC<ExtendSVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
