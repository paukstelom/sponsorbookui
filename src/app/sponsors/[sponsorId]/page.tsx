
import { ProDescriptions } from '@ant-design/pro-components';
import { Input, Tooltip } from 'antd';
import sponsorbook from 'sponsorbook/clients/sponsorbook'
import { Sponsor } from 'sponsorbook/clients/sponsorbook/models';
import SingleSponsorPageComponent from './compoments/sponsorPageComponent';


export default async function SingleSponsorPage({
    params,
}: {
    params: { sponsorId: string }
}) {

    return (<SingleSponsorPageComponent sponsorId={params.sponsorId}/>
  );
};

