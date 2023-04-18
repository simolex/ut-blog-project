import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { LoaderGrid } from 'shared/ui/LoaderGrid/LoaderGrid';
import { Flex } from 'shared/ui/Stack';

export const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense
        fallback={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <Flex max direction="row" align="center" justify="center">
                <LoaderGrid />
            </Flex>
        }
    >
        <StoryComponent />
    </Suspense>
);