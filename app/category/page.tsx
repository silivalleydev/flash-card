import type { FC } from 'react';
import BaseLayer from '../components/BaseLayer';
import MobileLayer from '../components/MobileLayer';
import ContentLayer from '../components/ContentLayer';
import CategoryListPage from './client';

interface CategoryServerProps { }

const CategoryServer: FC<CategoryServerProps> = () => {
    return (
        <BaseLayer>
            <MobileLayer>
                <ContentLayer>
                    <CategoryListPage />
                </ContentLayer>
            </MobileLayer>
        </BaseLayer>
    );
}

export default CategoryServer;
