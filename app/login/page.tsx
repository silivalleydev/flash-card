import type { FC } from 'react';
import BaseLayer from '../components/BaseLayer';
import MobileLayer from '../components/MobileLayer';
import ContentLayer from '../components/ContentLayer';

interface LoginServerProps { }

const LoginServer: FC<LoginServerProps> = () => {
    return (
        <BaseLayer>
            <MobileLayer>
                <ContentLayer>
                    Login
                </ContentLayer>
            </MobileLayer>
        </BaseLayer>
    );
}

export default LoginServer;
