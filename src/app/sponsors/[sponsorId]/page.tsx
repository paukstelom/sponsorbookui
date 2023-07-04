'use client'
import { ProDescriptions } from '@ant-design/pro-components';
import { Input, Tooltip } from 'antd';
import sponsorbook from 'sponsorbook/clients/sponsorbook'
import { Sponsor } from 'sponsorbook/clients/sponsorbook/models';

export default async function SingleSponsorPage({
    params,
}: {
    params: { sponsorId: string }
}) {


    
    const sponsorData = await sponsorbook().getOneSponsor(params.sponsorId)
    const sponsor = await sponsorData.json()

    return (
    <ProDescriptions
    
      // bordered
    //   formProps={{
    //     onValuesChange: (e, f) => console.log(f),
    //   }}
      title="Contact details"
      request={() => {return sponsor}}
   
      columns={[
        {
          title: 'Company number',
          key: 'text',
          dataIndex: 'companyNumber',
          render: (_) => <>{_}</>,
        },
        {
            title: 'Company name',
            key: 'text',
            dataIndex: 'name',
          },
          {
            title: 'Website',
            key: 'text',
            dataIndex: 'website',
          },
          {
            title: 'Description',
            key: 'text',
            dataIndex: 'description',
          }
        
      ]}
    >
      
    </ProDescriptions>
  );
};

