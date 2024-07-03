"use client";

import {
  Breadcrumb,
  Button,
  Select,
  Space,
  Table,
  TableColumnsType,
} from "antd";
import { confirm } from "@/components/modal";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Option } from "@/components/select";
import Link from "next/link";
import { RoutePaths } from "@/routes/routePaths";
import { useSelectedPond } from "@/context/SelectedPondContext";
import { CYCLE_DATA } from "@/data/cycle";

const showDeleteConfirm = (id: string, name: string) => {
  confirm({
    title: "Hapus kolam?",
    okType: "danger",
    content: (
      <p>
        Apakah anda yakin akan menghapus data
        <span className="font-semibold">{name}</span>?
      </p>
    ),
    onOk() {
      console.log(id);
    },
  });
};

const Cycle = () => {
  const { selectedPond } = useSelectedPond();

  const columns: TableColumnsType<CycleType> = [
    {
      title: "Nama Siklus",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Nama Kolam",
      dataIndex: "fishPondName",
      key: "fishPondName",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="small">
          <Link href={RoutePaths.cycleEdit.fmt(record.id)}>
            <EditOutlined />
          </Link>
          <Link
            onClick={() => showDeleteConfirm(record.id, record.name)}
            href="#"
          >
            <DeleteOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[
          {
            title: <Link href={RoutePaths.home.string()}>Home</Link>,
          },
          {
            title: "Siklus Panen",
          },
        ]}
      />

      <div className="mb-3 mt-4 flex w-full justify-end">
        <Link href={RoutePaths.cycleAdd.string()}>
          <Button type="default">Tambah</Button>
        </Link>
      </div>

      <Table
        columns={columns}
        dataSource={CYCLE_DATA}
        className="overflow-auto"
      />
    </div>
  );
};

export default Cycle;
