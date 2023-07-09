import { PageContainer, ProCard } from "@ant-design/pro-components";

export default function HistoryPageComponent() {
    return <PageContainer>
    <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard style={{ height: 200 }} />
        <ProCard gutter={16} ghost>
            <ProCard colSpan={16} style={{ height: 200 }} />
            <ProCard colSpan={8} style={{ height: 200 }} />
        </ProCard>
        <ProCard gutter={16} ghost>
            <ProCard colSpan={8} style={{ height: 200 }} />
            <ProCard colSpan={16} style={{ height: 200 }} />
        </ProCard>
    </ProCard>
</PageContainer>
}
