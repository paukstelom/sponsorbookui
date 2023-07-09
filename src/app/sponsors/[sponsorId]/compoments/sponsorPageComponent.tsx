'use client'
import { ProDescriptions } from '@ant-design/pro-components'
import sponsorbook from 'sponsorbook/clients/sponsorbook'

export default function SingleSponsorPageComponent({
    sponsorId,
}: {
    sponsorId: string
}) {
    return (
        <>
            <ProDescriptions
                // bordered
                //   formProps={{
                //     onValuesChange: (e, f) => console.log(f),
                //   }}
                title="Contact details"
                request={async () => {
                    const response = await sponsorbook().getOneSponsor(
                        sponsorId
                    )
                    if (response.ok) {
                        const data = await response.json()
                        return {data, success: true}
                    } 
                    return {success: false}
                }}
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
                    },
                ]}
            ></ProDescriptions>
        </>
    )
}
