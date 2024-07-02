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
import { useSelectedPond } from "@/context/SelectedPondContext";
import { CYCLE_WEEKLY_DATA } from "@/data/cycle";

const showDeleteConfirm = (id: number, age: number) => {
  confirm({
    title: "Hapus kolam?",
    okType: "danger",
    content: (
      <p>
        Apakah anda yakin akan menghapus data pekan ke-
        <span className="font-semibold">{age}</span>?
      </p>
    ),
    onOk() {
      console.log(id);
    },
  });
};

const columns: TableColumnsType<CycleWeeklyType> = [
  {
    title: "Pekan / Umur",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Berat Ikan (gr)",
    dataIndex: "fishWeight",
    key: "fishWeight",
  },
  {
    title: "Konsumsi Pakan (%)",
    dataIndex: "feedPercentage",
    key: "feedPercentage",
  },
  {
    title: "Sisa Ikan Hidup",
    dataIndex: "remainingFish",
    key: "remainingFish",
  },
  {
    title: "Kematian per Pekan",
    dataIndex: "totalDeath",
    key: "totalDeath",
  },
  {
    title: "Total Bobot Ikan (kg)",
    dataIndex: "totalFishWeight",
    key: "totalFishWeight",
    render: (_, record) => record.totalFishWeight / 1000,
  },
  {
    title: "Total Konsumsi Pakan (kg)",
    dataIndex: "totalFeedDaily",
    key: "totalFeedDaily",
    render: (_, record) => record.totalFeedDaily / 1000,
  },
  {
    title: "Biaya Pakan Pekan ini",
    dataIndex: "totalFeedPrice",
    key: "totalFeedPrice",
  },
  {
    title: "Pernah dipanen?",
    dataIndex: "isHarvested",
    key: "isHarvested",
    render: (_, record) => (record.isHarvested ? "Ya" : "Tidak"),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Link href={RoutePaths.cycleEdit.fmt(record.id)}>
          <EditOutlined />
        </Link>
        <Button
          type="text"
          danger
          onClick={() => showDeleteConfirm(record.id, record.age)}
        >
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
];

const CycleWeekly = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { selectedPond } = useSelectedPond();

  return (
    <div>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[
          {
            title: <Link href={RoutePaths.home.string()}>Home</Link>,
          },
          {
            title: "Siklus",
          },
        ]}
      />

      <div className="mb-3 mt-4 flex w-full justify-end">
        <Link href={RoutePaths.cycleAdd.string()}>
          <Button type="default">Tambah</Button>
        </Link>
      </div>

      <Table columns={columns} dataSource={CYCLE_WEEKLY_DATA} className="overflow-auto" />
    </div>
  );
};

export default CycleWeekly;
