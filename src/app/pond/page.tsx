"use client";

import {
  Breadcrumb,
  Button,
  Space,
  Table,
  TableColumnsType,
  theme,
} from "antd";
import { confirm } from "@/components/modal";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";
import { RoutePaths } from "@/routes/routePaths";
import { POND_DATA } from "@/data/pond";

const showDeleteConfirm = (id: string, name: string) => {
  confirm({
    title: "Hapus kolam?",
    okType: "danger",
    content: (
      <p>
        Apakah anda yakin akan menghapus kolam <span className="font-semibold">{name}</span>?
      </p>
    ),
    onOk() {
      console.log(id);
    },
  });
};

const columns: TableColumnsType<PondType> = [
  {
    title: "Nama",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Diameter",
    dataIndex: "diameter",
    key: "diameter",
  },
  {
    title: "Tinggi",
    dataIndex: "height",
    key: "height",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Link href={RoutePaths.pondEdit.fmt(record.id)}>
          <EditOutlined />
        </Link>
        <Button
          type="text"
          danger
          onClick={() => showDeleteConfirm(record.id, record.name)}
        >
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
];

const Pond = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[
          {
            title: <Link href={RoutePaths.home.string()}>Home</Link>,
          },
          {
            title: "Kolam",
          },
        ]}
      />

      <div className="mb-3 mt-4 flex w-full justify-end">
        <Link href={RoutePaths.pondAdd.string()}>
          <Button type="default">Tambah</Button>
        </Link>
      </div>

      <Table columns={columns} dataSource={POND_DATA} className="overflow-auto" />
    </div>
  );
};

export default Pond;
