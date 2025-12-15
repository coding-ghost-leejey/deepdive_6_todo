import {
  Layout,
  Typography,
  Card,
  Tag,
  Space,
  Button,
  Input,
  Checkbox,
  Flex,
} from "antd";
import { CheckCircleTwoTone, PlusOutlined } from "@ant-design/icons";

const todos = [
  {
    id: 1,
    title: "회의록 정리",
    note: "이번 주 액션아이템만 간단히 정리",
    done: false,
    tag: "워크",
    color: "blue",
  },
  {
    id: 2,
    title: "장보기",
    note: "우유, 달걀, 바나나",
    done: false,
    tag: "집안일",
    color: "green",
  },
  {
    id: 3,
    title: "헬스장",
    note: "스트레칭 + 러닝 20분",
    done: true,
    tag: "건강",
    color: "purple",
  },
  {
    id: 4,
    title: "책 읽기",
    note: "디자인 시스템 챕터 2",
    done: true,
    tag: "개인",
    color: "gold",
  },
];

function App() {
  const completedCount = todos.filter((todo) => todo.done).length;

  return (
    <Layout className="app-shell simple">
      <Layout.Header className="app-header">
        <div className="brand">
          <CheckCircleTwoTone twoToneColor="#52c41a" />
          <Typography.Title level={4} className="brand-title">
            Simple Todos
          </Typography.Title>
          <Tag color="success" className="brand-tag">
            UI only
          </Tag>
        </div>
        <Tag color="blue">
          완료 {completedCount} / {todos.length}
        </Tag>
      </Layout.Header>

      <Layout.Content className="app-content">
        <Card
          bordered={false}
          className="shadow-card todo-card"
          title={
            <Space size="small">
              <Typography.Text strong>오늘 할 일</Typography.Text>
              <Tag color="processing">간단한 리스트</Tag>
            </Space>
          }
          extra={
            <Button type="primary" icon={<PlusOutlined />}>
              새 할 일
            </Button>
          }
        >
          <Input.Search
            placeholder="할 일을 입력하거나 검색 (동작 없음)"
            allowClear
            enterButton="추가"
            size="large"
            style={{ marginBottom: 16 }}
            onSearch={() => {}}
          />

          <Flex vertical gap="small" className="todo-stack">
            {todos.map((item) => (
              <div className="todo-item" key={item.id}>
                <Space align="start" size="middle">
                  <Checkbox checked={item.done} disabled />
                  <div className="todo-texts">
                    <Typography.Text
                      strong
                      delete={item.done}
                      style={{ display: "block" }}
                    >
                      {item.title}
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      {item.note}
                    </Typography.Text>
                  </div>
                </Space>
                <Tag color={item.color}>{item.tag}</Tag>
              </div>
            ))}
          </Flex>
        </Card>
      </Layout.Content>
    </Layout>
  );
}

export default App;
