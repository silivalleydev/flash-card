import BaseLayer from '@/app/components/BaseLayer';
import ContentLayer from '@/app/components/ContentLayer';
import MobileLayer from '@/app/components/MobileLayer';
import type { FC } from 'react';
import ManageCardsPage from './client';


interface CardsServerProps { }

const CardsServer: FC<CardsServerProps> = ({ params }) => {
    return (
        <BaseLayer>
            <MobileLayer>
                <ContentLayer>
                    <ManageCardsPage params={{
                        categoryId: params.categoryId
                    }} />
                </ContentLayer>
            </MobileLayer>
        </BaseLayer>
    );
}

export default CardsServer;
