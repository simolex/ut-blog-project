import { VFC } from 'react';

export interface SidebarItemType {
    path: string;
    textSlug: string; // TFunction<string, undefined>;
    Icon: VFC<ExtendSVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
