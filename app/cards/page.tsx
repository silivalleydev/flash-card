import type { FC } from 'react';
import BaseLayer from '../components/BaseLayer';
import MobileLayer from '../components/MobileLayer';
import ContentLayer from '../components/ContentLayer';

interface CardsServerProps { }

const CardsServer: FC<CardsServerProps> = () => {
    return (
        <BaseLayer>
            <MobileLayer>
                <ContentLayer>
                    Cards
                </ContentLayer>
            </MobileLayer>
        </BaseLayer>
    );
}

export default CardsServer;
