import type { FC } from 'react';
import BaseLayer from '../components/BaseLayer';
import MobileLayer from '../components/MobileLayer';
import ContentLayer from '../components/ContentLayer';

interface SignupServerProps { }

const SignupServer: FC<SignupServerProps> = () => {
    return (
        <BaseLayer>
            <MobileLayer>
                <ContentLayer>
                    Category
                </ContentLayer>
            </MobileLayer>
        </BaseLayer>
    );
}

export default SignupServer;
